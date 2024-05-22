import React, {useEffect, useState} from "react";
import styles from './PayScreen.module.scss';
import classNames from "classnames/bind";
import {formatPrice} from "../../unitl";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";
import {actionCreateFlashOrder} from "../../redux-store/action/actionFakeApi";

const cx = classNames.bind(styles);

function PayScreen (props) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector(state => state.reducerAuth.token);
    const decoded = useSelector(state => state.reducerAuth.decoded);
    const isAdmin = useSelector(state => state.reducerAuth.admin);
    const listAddress = useSelector(state => state.reducerUserInformation.UserInformations);
    const listCart = useSelector(state => state.reducerCart.listCart);
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedItem, setSelectedItem] = useState('');
    const [nameClient, setNameClient] = useState('');
    const [sdtClient, setSdtClient] = useState('');
    const [addressKClient, setAddressKClient] = useState('');
    const [cmtClient, setCmtClient] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let totalPriceTmp = 0;
        listCart.map(item => {
            totalPriceTmp += (item.price * item.quantity)
        })

        setTotalPrice(totalPriceTmp);
    }, [])

    useEffect(() => {
        listAddress.map((item, index) => {
            if(item.default) {
                setSelectedOption(index);
                setSelectedItem(item);
            }
            return item;
        })
    }, [listAddress]);

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
        setSelectedItem(listAddress[e.target.value]);
    };

    const handleName = (e) => {
        setNameClient(e.target.value);
    }

    const handleSdt = (e) => {
        setSdtClient(e.target.value);
    }

    const handleAddressK = (e) => {
        setAddressKClient(e.target.value);
    }

    const handleCmt = (e) => {
        setCmtClient(e.target.value);
    }

    const handleToDetailProduct = () => {
        navigate('/screen/productDetail/DetailProduct');
    }

    const handlePay = () => {
        const dataPay = {
            "username": decoded.sub,
            "createdAt": moment(Date.now()).format("HH:mm DD/MM/yyyy"),
            "total": totalPrice+40000,
            "payment_id": 1,
            "carts": listCart,
        }
        console.log(dataPay)
        dispatch(actionCreateFlashOrder(token, decoded.sub, dataPay, isAdmin))
    }

    return (
        <div className={cx('payScreen', 'flex')}>

            <div className={cx('client')}>
                <div className={cx('textShippingPayment')}>Thông tin nhận hàng</div>

                <div className={cx('itemClient')}>
                    <div className={cx('textH')}>Sổ địa chỉ</div>

                    <select value={selectedOption} onChange={handleOptionChange} className={cx('selectAddress')}>
                        {listAddress.map((item, index) => (
                            <option value={index} >{item.address}</option>
                        ))}
                    </select>
                </div>

                <div className={cx('itemClient')}>
                    <div>Họ và tên *</div>
                    <input placeholder={selectedItem?.name} value={nameClient} onChange={handleName} className={cx('selectAddress', 'inputClient')}/>
                </div>

                <div className={cx('itemClient')}>
                    <div>Số điện thoại *</div>
                    <input placeholder={selectedItem?.sdt} value={sdtClient} onChange={handleSdt} className={cx('selectAddress', 'inputClient')}/>
                </div>

                {(!selectedItem || selectedItem.notView) && (<div className={cx('itemClient')}>
                    <div>Địa chỉ khác *</div>
                    <input placeholder={selectedItem?.name} value={addressKClient} onChange={handleAddressK}
                           className={cx('selectAddress', 'inputClient')}/>
                </div>)}

                <div className={cx('itemClient')}>
                    <div>Ghi chú</div>
                    <input placeholder={"Nhập ghi chú"} value={cmtClient} onChange={handleCmt} className={cx('selectAddress', 'inputClient')}/>
                </div>
            </div>

            <div className={cx('shippingPayment')}>
                <div>
                    <div className={cx('textShippingPayment')}>Vận chuyển</div>
                    <div className={cx('flex', 'center', 'shipPay')}>
                        <div className={cx('flex', 'center')}>
                            <i className={cx('bx bx-check-circle', 'check')}></i>
                            <div>Giao hàng tận nơi:</div>
                        </div>

                        <div>{formatPrice(40000)}</div>
                    </div>
                </div>

                <div style={{ marginTop: 30 }}>
                    <div className={cx('textShippingPayment')}>Phương thức thanh toán:</div>
                    <div className={cx('flex', 'center', 'shipPay')}>
                        <div className={cx('flex', 'center')}>
                            <i className={cx('bx bx-check-circle', 'check')}></i>
                            <div>VNPAY</div>
                        </div>

                        <i className={cx('bx bx-money')} style={{ fontSize: 22, color: '#05b2e9' }}></i>
                    </div>
                </div>

            </div>

            <div className={cx('product')}>
                <div className={cx('textShippingPayment')}>Đơn hàng</div>

                {listCart.map(item => (
                    <div className={cx('flex', 'center', 'btn')} onClick={handleToDetailProduct}>
                        <div className={cx('relative', 'imgP')}>
                            <img src={item.src} alt="Logo" className={cx('imgProduct')} />
                            <p className={cx('numberProduct')}>1</p>
                        </div>

                        <div className={cx('nameP')}>
                            <div className={cx('nameItemSp')}>{item.name} {item.description}</div>
                        </div>

                        <div className={cx('priceP')}>{formatPrice(item.quantity * item.price)}</div>
                    </div>
                ))}

                <div className={cx('flex', 'mt30')}>
                    <div className={cx('colorItemSp')}>Tạm tính</div>
                    <div className={cx('priceP')}>{formatPrice(totalPrice)}</div>
                </div>

                <div className={cx('flex', 'mt10')}>
                    <div className={cx('colorItemSp')}>Phí vận chuyển</div>
                    <div className={cx('priceP')}>{formatPrice(40000)}</div>
                </div>

                <div className={cx('mt30', 'flex')}>
                    <div className={cx('sumTT')}>Tổng thanh toán</div>
                    <div className={cx('priceTT')}>{formatPrice(totalPrice + 40000)}</div>
                </div>

                <div className={cx('btn', 'btnPay')} onClick={handlePay}>ĐẶT HÀNG</div>
            </div>
        </div>
    )
}

export default PayScreen;
