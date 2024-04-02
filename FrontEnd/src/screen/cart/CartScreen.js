import React, {useState} from "react";
import styles from './CartScreen.module.scss';
import classNames from "classnames/bind";
import {formatPrice} from "../../unitl";
import {useNavigate} from "react-router-dom";

const cx = classNames.bind(styles);

function CartScreen (props) {

    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleQuantity = (event) => {
        setQuantity(parseInt(event.target.value, 10))
    }

    const handleToDetailProduct = () => {
        navigate('/screen/productDetail/DetailProduct');
    }

    const handleToHome = () => {
        navigate('/');
    }

    const handlePay = () => {
        navigate('/screen/pay/PayScreen')
    }

    return (
        <div className={cx('cart')}>
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
                    <tr>
                        <td onClick={handleToDetailProduct}>
                            <img src={require('../../assets/img/imgPhone2.png')} alt="Logo" className={cx('img')} />
                        </td>
                        <td className={cx('nameItemSp')} onClick={handleToDetailProduct} >Iphone XR 64GB Like New 99%</td>
                        <td>{formatPrice(5600000)}</td>
                        <td>
                            <div className={cx('quantityProductBtn')}>
                                <button onClick={decrementQuantity} className={cx('btnQuantity')}>
                                    <i className={cx('bx bx-minus')}></i>
                                </button>
                                <input value={quantity} className={cx('textQuantity')} onChange={handleQuantity} />
                                <button onClick={incrementQuantity} className={cx('btnQuantity')}>
                                    <i className={cx('bx bx-plus')}></i>
                                </button>
                            </div>
                        </td>
                        <td>{formatPrice(5600000*quantity)}</td>
                        <td className={cx('delete')}>
                            <i className='bx bx-trash'></i>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className={cx('flex', 'mt50')}>
                <div className={cx('btn', 'continueBuy')} onClick={handleToHome} >Tiếp tục mua hàng</div>

                <div>
                    <div className={cx('sumMoney', 'flex')}>
                        <div className={cx('textSumMoney')}>Tổng tiền</div>
                        <div className={cx('textSumMoney')}>{formatPrice(10000000000)}</div>
                    </div>
                    <div className={cx('btn', 'btnSummit')} onClick={handlePay}>THANH TOÁN</div>
                </div>
            </div>
        </div>
    )
}

export default CartScreen;
