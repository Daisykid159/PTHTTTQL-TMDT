import React, {useEffect, useState} from "react";
import styles from './CartScreen.module.scss';
import classNames from "classnames/bind";
import {formatPrice} from "../../unitl";
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {actionDeleteProduct, actionGetListCart} from "../../redux-store/action/actionCart";

const cx = classNames.bind(styles);

function CartScreen (props) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    const [totalPrice, setTotalPrice] = useState(0);
    const [resetView, setResetView] = useState();

    const token = useSelector(state => state.reducerAuth.token);
    const decoded = useSelector(state => state.reducerAuth.decoded);
    const listCart = useSelector(state => state.reducerCart.listCart);

    const incrementQuantity = (item) => {
        item.quantity++;
        setResetView(!resetView);
    };

    const decrementQuantity = (item) => {
        if ( item.quantity > 1) {
            item.quantity--;
            setResetView(!resetView);
        }
    };

    const handleQuantity = (event, item) => {
        item.quantity = (parseInt(event.target.value, 10));
        setResetView(!resetView);
    }

    const handleToDetailProduct = (item) => {
        navigate('/screen/productDetail/DetailProduct', {
            state: { data: item }
        });
    }

    const handleToHome = () => {
        navigate('/');
    }

    const handlePay = () => {
        navigate('/screen/pay/PayScreen')
    }

    const handleDelete = (item) => {
        dispatch(actionDeleteProduct(token, decoded.sub, item));
        setResetView(!resetView);
    }

    useEffect(() => {
        let totalPriceTmp = 0
        listCart.map(item => {
            totalPriceTmp += (item.quantity * item.price);
        })
        setTotalPrice(totalPriceTmp);
    }, [resetView])

    useEffect(() => {
        dispatch(actionGetListCart(token, decoded.sub))
    }, [])

    return (
        <div className={cx('cart')}>
            {listCart.length === 0 ? (
                <div className={cx('textListCartNone')}>Bạn chưa chọn sản phẩm nào!</div>
            ) : (
                <table className={cx('table')}>
                    <thead>
                    <tr>
                        <th className={cx('imgSp')}>ẢNH</th>
                        <th className={cx('nameSp')}>TÊN SẢN PHẢM</th>
                        <th className={cx('priceSp')}>ĐƠN GIÁ</th>
                        <th className={cx('quantitySp')}>SỐ LƯỢNG</th>
                        <th className={cx('intoMoneySp')}>THÀNH TIỀN</th>
                        <th className={cx('deleteSp')}>XOÁ</th>
                    </tr>
                    </thead>

                    <tbody>
                    {listCart.map((item, index) => (
                        <tr>
                            <td onClick={() => handleToDetailProduct(item)}>
                                <img src={item.src} alt="Logo" className={cx('img')} />
                            </td>
                            <td onClick={() => handleToDetailProduct(item)} className={cx('itemSp')} >
                                <div className={cx('nameItemSp')}>{item.productSpu_name} ( {item.productSku_name} )</div>
                            </td>
                            <td className={cx('colorItemSp')}>{formatPrice(item.price)}</td>
                            <td>
                                <div className={cx('quantityProductBtn')}>
                                    <button onClick={() => decrementQuantity(item)} className={cx('btnQuantity')}>
                                        <i className={cx('bx bx-minus')}></i>
                                    </button>
                                    <input value={item.quantity} className={cx('textQuantity')} onChange={(e) => handleQuantity(e, item)} />
                                    <button onClick={() => incrementQuantity(item)} className={cx('btnQuantity')}>
                                        <i className={cx('bx bx-plus')}></i>
                                    </button>
                                </div>
                            </td>
                            <td className={cx('colorItemSp')} >{formatPrice(item.price*item.quantity)}</td>
                            <td className={cx('delete')} onClick={() => handleDelete(item)}>
                                <i className='bx bx-trash'></i>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}

            <div className={cx('flex', 'mt50')}>
                <div className={cx('btn', 'continueBuy')} onClick={handleToHome} >Tiếp tục mua hàng</div>

                {listCart.length !== 0 && (<div>
                    <div className={cx('sumMoney', 'flex')}>
                        <div className={cx('textSumMoney')}>Tổng tiền :</div>
                        <div className={cx('textSumMoney')}>{formatPrice(totalPrice)}</div>
                    </div>
                    <div className={cx('btn', 'btnSummit')} onClick={handlePay}>THANH TOÁN</div>
                </div>)}
            </div>
        </div>
    )
}

export default CartScreen;
