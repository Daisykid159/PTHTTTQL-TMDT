import React, {useEffect, useState} from "react";
import styles from './FakeAPIPay.module.scss';
import classNames from "classnames/bind";
import ItemProductFakeApi from "./ItemProductFakeApi";
import {formatPrice} from "../../../unitl";
import {useDispatch, useSelector} from "react-redux";
import {
    actionCreateFlashOrder, actionDonePay, actionGetAllSkuById,
    actionGetAllSpu,
    actionGetAllUser
} from "../../../redux-store/action/actionFakeApi";
import moment from "moment";
import {
    actionGetAllCityGoShip,
    actionGetAllDistrictsById,
    actionGetAllWardsById, actionGetRate
} from "../../../redux-store/action/actionPay";

const cx = classNames.bind(styles);

function FakeAPIPay(props) {

    const listUser = useSelector(state => state.reducerFakeApi.listAllUser);
    const listDataProduct = useSelector(state => state.reducerFakeApi.listDataProduct);
    const donePay = useSelector(state => state.reducerFakeApi.donePay);

    const dispatch = useDispatch();
    const token = useSelector(state => state.reducerAuth.token);
    const decoded = useSelector(state => state.reducerAuth.decoded);

    const tokenGoShip = useSelector(state => state.reducerPay.tokenGoShip);
    const listCity = useSelector(state => state.reducerPay.listCity);
    const listDistricts = useSelector(state => state.reducerPay.listDistricts);
    const listWards = useSelector(state => state.reducerPay.listWards);
    const ListOfShippingUnits = useSelector(state => state.reducerPay.ListOfShippingUnits);

    const [userCurrent, setUserCurrent] = useState(listUser[0]?.username);
    const [sdtClient, setSdtClient] = useState('');
    const [listProduct, setListProduct] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [dateCreateBill, setDateCreateBill] = useState(Date.now());
    const [paymentId, setPaymentId] = useState(1);

    const [selectCity, setSelectCity] = useState('');
    const [selectDistricts, setSelectDistricts] = useState('');
    const [selectWards, setSelectWards] = useState('');
    const [shippingUnits, setShippingUnits] = useState();

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

    const addProduct = (Product) => {
        const listTmp = listProduct || [];
        let check = true;
        listTmp?.map((item, index) => {
            if(item.idSku === Product.idSku && item.idSpu === Product.idSpu){
                item.quantity += parseInt(Product.quantity);
                check = false;
            }
        })

        if(check) listTmp?.push(Product);

        let total = 0;
        listTmp?.map(item => {
            total += item.price * item.quantity;
        })

        setTotalPrice(total);
        setListProduct(listTmp);
    }

    const handleDateCreateBill = (e) => {
        setDateCreateBill(e.target.value);
    }

    const handlePay = () => {
        const dataPay = {
            "username" : userCurrent,
            "createdAt": moment(dateCreateBill).format("hh:mm DD/MM/yyyy"),
            "total" : totalPrice,
            "payment_id" : paymentId,
            "ordercode" : shippingUnits.id + Date.now().toString(),
            "carts" : listProduct,
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

        console.log(dataPay)
        dispatch(actionCreateFlashOrder(token, decoded.sub, dataPay))
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

    useEffect(() => {
        dispatch(actionGetAllCityGoShip(tokenGoShip, decoded))
    }, [])

    useEffect(() => {
        setDateCreateBill(moment(Date.now()).format("yyyy-MM-DDTHH:mm"))
    }, [])

    useEffect(() => {
        dispatch(actionGetAllUser(token, decoded.sub))
        dispatch(actionGetAllSpu(token, decoded.sub));
        dispatch(actionGetAllSkuById(token, decoded.sub, 1))
    }, [])

    useEffect(() => {
        if(donePay) {
            setListProduct([]);
            setTotalPrice(0);
            dispatch(actionGetAllUser(token, decoded.sub))
            dispatch(actionGetAllSpu(token, decoded.sub))
            dispatch(actionGetAllSkuById(token, decoded.sub, 1))
            dispatch(actionDonePay());
        }
    }, [donePay]);

    return (
        <div className={cx('FakeAPIPay')}>
            <div className={cx('flex', 'center')}>
                <div className={cx('bold')}>Khách hàng: </div>

                <select
                    className={cx('userName')}
                    value={userCurrent}
                    onChange={(e) => setUserCurrent(e.target.value)}
                >
                    {listUser?.map(item => (
                        <option>{item?.username}</option>
                    ))}
                </select>

                <div className={cx('itemClient')}>
                    <div>Số điện thoại *</div>
                    <input value={sdtClient} onChange={e => setSdtClient(e.target.value)} className={cx('selectAddress', 'inputClient')}/>
                </div>
            </div>

            <div>
                <div className={cx('bold')}>Danh sách sản phẩm</div>

                <ItemProductFakeApi
                    addProduct={addProduct}
                    listDataProduct={listDataProduct}
                    listProduct={listProduct}
                />
            </div>

            <div className={cx('listProductTmp')}>
                <table className={cx('table')} >
                    <thead>
                    <tr>
                        <th className={cx('nameProductH')}>Tên sản phẩm</th>
                        <th>Màu</th>
                        <th>Giá sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Thành tiền</th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        listProduct?.map(item => (
                            <tr>
                                <td className={cx('nameProduct')}>
                                    <div>{item.productSpu_name}</div>
                                </td>
                                <td>{item.productSku_name}</td>
                                <td>{formatPrice(item.price)}</td>
                                <td>{item.quantity}</td>
                                <td>{formatPrice(item.quantity * item.price)}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>

            <div className={cx('flex', 'center')}>
                <div className={cx('w50pt')}>
                    <div className={cx('flex', 'bold', 'mt10px')}>
                        <div className={cx('w30pt')}>Phương thức thanh toán:</div>
                        <div className={cx('green')}>
                            <select
                                value={paymentId}
                                onChange={e => setPaymentId(e.target.value)}
                            >
                                {payment_id.map(item => (
                                    <option value={item.id}>{item.paymentName}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div>
                        <div>Địa chỉ nhận hàng</div>
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

                        <div className={cx('flex', 'center')}>
                            <div>Đơn vị vận chuyển</div>
                            <select value={shippingUnits?.id || "Chọn đơn vị vận chuyển"} onChange={handleShippingUnits} className={cx('selectAdd')}>
                                {ListOfShippingUnits.map(item => (
                                    <option label={item.carrier_name}>{item.id}</option>
                                ))}
                            </select>

                            <div className={cx('mt10px')}>{formatPrice(shippingUnits?.total_fee || 0)}</div>
                        </div>
                    </div>

                    <div className={cx('flex', 'bold', 'mt10px')}>
                        <div className={cx('w30pt')}>Tổng thanh toán:</div>
                        <div className={cx('red')}>{formatPrice(totalPrice + (shippingUnits?.total_fee || 0))}</div>
                    </div>
                </div>

                <div className={cx('flex', 'center', 'bold', 'mt10px')}>
                    <div>Ngày mua hàng: </div>
                    <input
                        value={dateCreateBill}
                        className={cx('inputDate')}
                        type={"datetime-local"}
                        onChange={handleDateCreateBill}
                    />
                </div>
            </div>


            <div className={cx('summit')} onClick={handlePay}>Thanh toán</div>
        </div>
    )
}

export default FakeAPIPay;
