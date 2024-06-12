import React, {useEffect, useState} from "react";
import styles from './PayScreen.module.scss';
import classNames from "classnames/bind";
import {formatPrice} from "../../unitl";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    actionCreateOrderNew,
    actionGetAllCityGoShip,
    actionGetAllDistrictsById,
    actionGetAllWardsById, actionGetRate
} from "../../redux-store/action/actionPay";

const cx = classNames.bind(styles);

function PayScreen (props) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector(state => state.reducerAuth.token);
    const tokenGoShip = useSelector(state => state.reducerPay.tokenGoShip);
    const decoded = useSelector(state => state.reducerAuth.decoded);
    const isAdmin = useSelector(state => state.reducerAuth.admin);
    const listAddress = useSelector(state => state.reducerUserInformation.UserInformations);
    const listCart = useSelector(state => state.reducerCart.listCart);
    const listCity = useSelector(state => state.reducerPay.listCity);
    const listDistricts = useSelector(state => state.reducerPay.listDistricts);
    const listWards = useSelector(state => state.reducerPay.listWards);
    const ListOfShippingUnits = useSelector(state => state.reducerPay.ListOfShippingUnits);

    const [selectedOption, setSelectedOption] = useState('');
    const [selectedItem, setSelectedItem] = useState('');
    const [nameClient, setNameClient] = useState('');
    const [sdtClient, setSdtClient] = useState('');
    const [addressKClient, setAddressKClient] = useState('');
    const [cmtClient, setCmtClient] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectCity, setSelectCity] = useState('');
    const [selectDistricts, setSelectDistricts] = useState('');
    const [selectWards, setSelectWards] = useState('');
    const [shippingUnits, setShippingUnits] = useState();
    const [paymentId, setPaymentId] = useState(1);

    const payment_id = [
        {
            id: 1,
            paymentName: "Thanh toán khi nhận hàng",
        },
        {
            id: 2,
            paymentName: "Thanh toán qua VNPAY",
        }
    ];

    useEffect(() => {
        let totalPriceTmp = 0;
        listCart.map(item => {
            totalPriceTmp += (item.price * item.quantity)
        })

        setTotalPrice(totalPriceTmp);
    }, [])

    useEffect(() => {
        dispatch(actionGetAllCityGoShip(tokenGoShip, decoded))
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
            "total": totalPrice,
            "payment_id": paymentId,
            "ordercode": shippingUnits.id + Date.now().toString(),
            "addressRequest": {
                "city": listCity.find(item => item.id === selectCity).name,
                "district": listDistricts.find(item => item.id === selectDistricts).name,
                "street": listWards.find(item => item.id === parseInt(selectWards, 10)).name,
                "username": decoded.sub,
            },
            "shippingRequest": {
                "carrier": shippingUnits.carrier_name,
                "expected": shippingUnits.expected,
                "code": shippingUnits.id + Date.now().toString(),
                "status": "Don moi",
                "fee_ship": shippingUnits?.total_fee,
                "total_bill": totalPrice + shippingUnits?.total_fee,
                "phone": sdtClient,
                "service": shippingUnits?.service,
            },
        }
        dispatch(actionCreateOrderNew(token, decoded.sub, dataPay, navigate))
    }

    const handleSelectCity = (e) => {
        setSelectCity(e.target.value)
        dispatch(actionGetAllDistrictsById(tokenGoShip, decoded.sub, e.target.value))
    }

    const handleSelectDistricts = (e) => {
        setSelectDistricts(e.target.value)
        dispatch(actionGetAllWardsById(tokenGoShip, decoded.sub, e.target.value))
    }

    const handleSelectWards = (e) => {
        const dataShip = {
            "shipment": {
                "address_from": {
                    "district": 100700,
                    "city": 100000
                },
                "address_to": {
                    "district": selectDistricts,
                    "city": selectDistricts
                },
                "parcel": {
                    "cod": totalPrice,
                    "amount": totalPrice,
                    "width": 15,
                    "height": 5,
                    "length": 10,
                    "weight": 750
                }
            }
        }

        setSelectWards(e.target.value)
        setShippingUnits(null);
        dispatch(actionGetRate(tokenGoShip, decoded.sub, dataShip))
    }

    const handleShippingUnits = (e) => {
        setShippingUnits(ListOfShippingUnits.find(item => item.id === e.target.value));
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

                    <div className={cx('mt10')}>
                        <div>Tỉnh</div>
                        <select value={selectCity} onChange={handleSelectCity} className={cx('selectAdd')}>
                            {listCity.map(item => (
                                <option label={item.name}>{item.id}</option>
                            ))}
                        </select>
                    </div>

                    <div className={cx('mt10')}>
                        <div>Quận / Huyện</div>
                        <select value={selectDistricts} onChange={handleSelectDistricts} className={cx('selectAdd')}>
                            {listDistricts.map(item => (
                                <option label={item.name}>{item.id}</option>
                            ))}
                        </select>
                    </div>

                    <div className={cx('mt10')}>
                        <div>Phường / Xã</div>
                        <select value={selectWards} onChange={handleSelectWards} className={cx('selectAdd')}>
                            {listWards.map(item => (
                                <option label={item.name}>{item.id}</option>
                            ))}
                        </select>
                    </div>

                    <div className={cx('mt10')}>
                        <div>Địa chỉ cụ thể</div>
                        <input placeholder={selectedItem?.name || "Nhập địa chỉ cụ thể"}
                               value={addressKClient}
                               onChange={handleAddressK}
                               className={cx('selectAddress', 'inputClient')}
                        />
                    </div>
                </div>)}

                <div className={cx('itemClient')}>
                    <div>Ghi chú</div>
                    <input placeholder={"Nhập ghi chú"} value={cmtClient} onChange={handleCmt} className={cx('selectAddress', 'inputClient')}/>
                </div>
            </div>

            <div className={cx('shippingPayment')}>
                <div>
                    <div className={cx('textShippingPayment')}>Vận chuyển</div>
                    <div className={cx('shipPay')}>
                        <div className={cx('flex', 'center')}>
                            <div className={cx('flex', 'center')}>
                                <i className={cx('bx bx-check-circle', 'check')}></i>

                                <select value={shippingUnits?.id || "Chọn đơn vị vận chuyển"} onChange={handleShippingUnits} className={cx('selectAdd')}>
                                    {ListOfShippingUnits.map(item => (
                                        <option label={item.carrier_name}>{item.id}</option>
                                    ))}
                                </select>
                            </div>

                            <div>{formatPrice(shippingUnits?.total_fee || 0)}</div>
                        </div>

                        <div className={cx('mt10')}>{shippingUnits?.expected}</div>
                    </div>
                </div>

                <div style={{ marginTop: 30 }}>
                    <div className={cx('textShippingPayment')}>Phương thức thanh toán:</div>
                    <div className={cx('flex', 'center', 'shipPay')}>
                        <div className={cx('flex', 'center')}>
                            <i className={cx('bx bx-check-circle', 'check')}></i>
                            <select
                                value={paymentId}
                                onChange={e => setPaymentId(e.target.value)}
                                className={cx('selectAdd')}
                            >
                                {payment_id.map(item => (
                                    <option value={item.id}>{item.paymentName}</option>
                                ))}
                            </select>
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
                            <p className={cx('numberProduct')}>{item.quantity}</p>
                        </div>

                        <div className={cx('nameP')}>
                            <div className={cx('nameItemSp')}>{item.productSpu_name} ( {item.productSku_name} )</div>
                            <div className={cx('colorItemSp')}>{item.color}</div>
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
                    <div className={cx('priceP')}>{formatPrice(shippingUnits?.total_fee || 0)}</div>
                </div>

                <div className={cx('mt30', 'flex')}>
                    <div className={cx('sumTT')}>Tổng thanh toán</div>
                    <div className={cx('priceTT')}>{formatPrice(totalPrice + (shippingUnits?.total_fee || 0))}</div>
                </div>

                <div className={cx('btn', 'btnPay')} onClick={handlePay}>ĐẶT HÀNG</div>
            </div>
        </div>
    )
}

export default PayScreen;
