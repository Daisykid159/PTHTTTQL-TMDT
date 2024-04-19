import React from "react";
import styles from './DetailUserAdminScreen.module.scss';
import classNames from "classnames/bind";
import {formatDay, formatPrice} from "../../../unitl";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

const cx = classNames.bind(styles);

function DetailUserAdminScreen (props) {

    const data = {
        id: 1,
        role: 'ADMIN',
        nameUser: 'Vũ Văn Dũng',
        phoneUser: '01216048012',
        emailUser: 'daisyss159@gmail.com',
        dateCreate: '2024-04-05T00:00:00',
        totalPrice: 700000000,
        addresses: [
            {
                id: 1,
                address: 'Thanh Xuân, Hà Nội',
                default: true,
            },
            {
                id: 2,
                address: 'Thanh Xuân, Hà Nội',
                default: false,
            },
            {
                id: 3,
                address: 'Thanh Xuân, Hà Nội',
                default: false,
            }
        ],
        bills: [
            {
                id: '872',
                userBuy: 'Thomas Hardy',
                priceBuy: 250000,
                status: 'Hoàn thành',
                dateBuy: '2024-03-19T10:55:40',
            },
            {
                id: '873',
                userBuy: 'Victoria Hardy',
                priceBuy: 240000,
                status: 'Hoàn thành',
                dateBuy: '2024-03-19T10:55:40',
            },
            {
                id: '874',
                userBuy: 'Maria Anders',
                priceBuy: 290000,
                status: 'Hoàn thành',
                dateBuy: '2024-03-19T10:55:40',
            },
            {
                id: '875',
                userBuy: 'Thomas Hardy',
                priceBuy: 260000,
                status: 'Hoàn thành',
                dateBuy: '2024-03-19T10:55:40',
            }
        ],
    }

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleDetailBill = (bill) => {
        navigate(`/admin/DetailBillAdminScreen/${bill.id}`);
    }

    return (
        <div className={cx('DetailUserAdminScreen')}>
            <div className={cx('bold', 'textHeader')}>THÔNG TIN KHÁCH HÀNG</div>

            <div>
                <div className={cx('flex', 'flexStart')}>
                    <div className={cx('w45pt')}>
                        <p className={cx('flex', 'center')}>
                            <div className={cx('bold', 'textT')}>Tên khách hàng:</div>
                            <div>{data.nameUser}</div></p>
                        <p className={cx('flex', 'center')}>
                            <div className={cx('bold', 'textT')}>Loại tài khoản:</div>
                            <div>{data.role}</div>
                        </p>
                        <p className={cx('bold', 'flex', 'center')}>
                            <div className={cx('bold', 'textT')}>Tổng chi tiêu:</div>
                            <div>{formatPrice(data.totalPrice)}</div>
                        </p>
                    </div>

                    <div className={cx('w45pt')}>
                        <p className={cx('flex', 'center')}>
                            <div   className={cx('bold', 'textT')}>Mã khách hàng:</div>
                            <div>{data.id}</div>
                        </p>
                        <p className={cx('flex', 'center')}>
                            <div   className={cx('bold', 'textT')}>Số điện thoại:</div>
                            <div>{data.phoneUser}</div>
                        </p>
                        <p className={cx('flex', 'center')}>
                            <div className={cx('bold', 'textT')}> E-mail:</div>
                            <div>{data.emailUser}</div>
                        </p>
                    </div>
                </div>

                <div className={cx('flex', 'flexStart')}>
                    <div className={cx('w8pt', 'bold')}>Địa chỉ:</div>

                    <div>
                        {data.addresses.map((item, index) => (
                            <div className={cx('itemAddress')}>{index + 1}: {item.address}</div>
                        ))}
                    </div>
                </div>

                <div className={cx('listBill')}>
                    <div className={cx('bold')}>Danh sách đơn hàng</div>

                    <table border="1" cellPadding="1" cellSpacing="1" className={cx('tableBill')}>
                        <thead>
                            <tr>
                                <th>Mã ĐH</th>
                                <th style={{ width: '40%' }}>Tên người mua</th>
                                <th>Giá tiền</th>
                                <th>Trạng thái</th>
                                <th>Ngày mua</th>

                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                        {data.bills.map(itemBill => (
                            <tr onClick={() => handleDetailBill(itemBill)}>
                                <td>{itemBill.id}</td>
                                <td>{itemBill.userBuy}</td>
                                <td>{formatPrice(itemBill.priceBuy)}</td>
                                <td>{itemBill.status}</td>
                                <td>{formatDay(itemBill.dateBuy)}</td>
                                <td className={cx('iconList')}>
                                    <i className={cx('bx bxs-pencil', 'iconEdit')}></i>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default DetailUserAdminScreen;
