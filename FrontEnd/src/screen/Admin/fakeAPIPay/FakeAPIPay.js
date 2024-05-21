import React, {useEffect, useState} from "react";
import styles from './FakeAPIPay.module.scss';
import classNames from "classnames/bind";
import ItemProductFakeApi from "./ItemProductFakeApi";
import {formatPrice} from "../../../unitl";
import {useDispatch, useSelector} from "react-redux";
import {
    actionCreateFlashOrder,
    ActionGetAllSkuById,
    actionGetAllSpu,
    actionGetAllUser
} from "../../../redux-store/action/actionFakeApi";
import moment from "moment";

const cx = classNames.bind(styles);

function FakeAPIPay(props) {

    const listUser = useSelector(state => state.reducerFakeApi.listAllUser);
    const listDataProduct = useSelector(state => state.reducerFakeApi.listDataProduct);

    const dispatch = useDispatch();
    const token = useSelector(state => state.reducerAuth.token);
    const decoded = useSelector(state => state.reducerAuth.decoded);

    const [userCurrent, setUserCurrent] = useState(listUser[0].username);
    const [listProduct, setListProduct] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [dateCreateBill, setDateCreateBill] = useState(Date.now());
    const payment_id = 1;

    const addProduct = (Product) => {
        const listTmp = listProduct || [];
        let check = true;
        listTmp?.map((item, index) => {
            if(item.idSku === Product.idSku && item.idSpu === Product.idSpu){
                item.quantity += Product.quantity;
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
        alert("thanh toan");
        const dataPay = {
            "username": userCurrent,
            "createdAt": moment(dateCreateBill).format("HH:mm DD/MM/yyyy"),
            "total": totalPrice,
            "payment_id": payment_id,
            "carts": listProduct,
        }
        console.log(dataPay)
        dispatch(actionCreateFlashOrder(token, decoded.sub, dataPay))
    }

    return (
        <div className={cx('FakeAPIPay')}>
            <div className={cx('flex', 'center')}>
                <div className={cx('bold')}>Khách hàng: </div>

                <select
                    className={cx('userName')}
                    value={userCurrent}
                    onChange={(e) => setUserCurrent(e.target.value)}
                >
                    {listUser.map(item => (
                        <option>{item.username}</option>
                    ))}
                </select>
            </div>

            <div>
                <div className={cx('bold')}>Danh sách sản phẩm</div>

                <ItemProductFakeApi
                    addProduct={addProduct}
                    listDataProduct={listDataProduct}
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
                        <div className={cx('w30pt')}>Tổng thanh toán:</div>
                        <div className={cx('red')}>{formatPrice(totalPrice)}</div>
                    </div>

                    <div className={cx('flex', 'bold', 'mt10px')}>
                        <div className={cx('w30pt')}>Phương thức thanh toán:</div>
                        <div className={cx('green')}>VNPay</div>
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
