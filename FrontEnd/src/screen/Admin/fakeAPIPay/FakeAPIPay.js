import React, {useEffect, useState} from "react";
import styles from './FakeAPIPay.module.scss';
import classNames from "classnames/bind";
import ItemProductFakeApi from "./ItemProductFakeApi";
import {formatPrice} from "../../../unitl";

const cx = classNames.bind(styles);

function FakeAPIPay(props) {

    const listUser = [
        {
            idUser: 1,
            userName: 'user1',
        },
        {
            idUser: 2,
            userName: 'user2',
        },
        {
            idUser: 3,
            userName: 'user3',
        },
        {
            idUser: 4,
            userName: 'user4',
        }
    ]
    const listDataProduct = [
        {
            "productSpu_name": "IPhone 15",
            "productSku_name": "Đen",
            "src": "https://bizweb.dktcdn.net/100/112/815/products/ryd…3-2d74-4ada-932f-9ec5b5652486.jpg?v=1703477620890",
            "quantity": 1,
            "price": 22100000
        },
        {
            "productSpu_name": "IPhone 15 Plus",
            "productSku_name": "Đen",
            "src": "https://bizweb.dktcdn.net/100/112/815/products/ryd…3-2d74-4ada-932f-9ec5b5652486.jpg?v=1703477620890",
            "quantity": 1,
            "price": 22200000
        },
        {
            "productSpu_name": "IPhone 15 Pro",
            "productSku_name": "Đen",
            "src": "https://bizweb.dktcdn.net/100/112/815/products/ryd…3-2d74-4ada-932f-9ec5b5652486.jpg?v=1703477620890",
            "quantity": 1,
            "price": 22300000
        },
        {
            "productSpu_name": "IPhone 15 Pro Max",
            "productSku_name": "Đen",
            "src": "https://bizweb.dktcdn.net/100/112/815/products/ryd…3-2d74-4ada-932f-9ec5b5652486.jpg?v=1703477620890",
            "quantity": 1,
            "price": 22400000
        }
    ]

    const [userCurrent, setUserCurrent] = useState(null);
    const [listProduct, setListProduct] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const payment_id = 1;

    const addProduct = (Product) => {
        const listTmp = listProduct || [];
        listTmp?.push(Product);

        let total = 0;
        listTmp?.map(item => {
            total += item.price * item.quantity;
        })

        setTotalPrice(total);
        setListProduct(listTmp);
    }

    const handlePay = () => {
        alert("thanh toan");
        console.log(listProduct, totalPrice, payment_id)
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
                        <option>{item.userName}</option>
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
                                    <img src={item.src} className={cx('imgProduct')} alt={'ảnh sản phẩm'} />
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

            <div className={cx('flex', 'bold', 'mt10px')}>
                <div className={cx('w25pt')}>Tổng thanh toán:</div>
                <div className={cx('red')}>{formatPrice(totalPrice)}</div>
            </div>

            <div className={cx('flex', 'bold', 'mt10px')}>
                <div className={cx('w25pt')}>Phương thức thanh toán:</div>
                <div className={cx('green')}>VNPay</div>
            </div>

            <div className={cx('summit')} onClick={handlePay}>Thanh toán</div>
        </div>
    )
}

export default FakeAPIPay;
