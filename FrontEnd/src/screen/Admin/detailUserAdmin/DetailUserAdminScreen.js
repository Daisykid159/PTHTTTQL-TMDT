import React, {useEffect} from "react";
import styles from './DetailUserAdminScreen.module.scss';
import classNames from "classnames/bind";
import {formatDay, formatPrice} from "../../../unitl";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const cx = classNames.bind(styles);

function DetailUserAdminScreen (props) {

    const detailUser = useSelector(state => state.reducerUserInformation.detailUser);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleDetailBill = (bill) => {
        navigate(`/admin/DetailBillAdminScreen/${bill.code}`);
    }

    return (
        <div className={cx('DetailUserAdminScreen')}>
            <div className={cx('bold', 'textHeader')}>THÔNG TIN KHÁCH HÀNG</div>

            <div>
                <div className={cx('flex', 'flexStart')}>
                    <div className={cx('w45pt')}>
                        <p className={cx('flex', 'center')}>
                            <div className={cx('bold', 'textT')}>Tên khách hàng:</div>
                            <div>{detailUser.username}</div></p>
                        <p className={cx('flex', 'center')}>
                            <div className={cx('bold', 'textT')}>Loại tài khoản:</div>
                            <div>USER</div>
                        </p>
                        <p className={cx('bold', 'flex', 'center')}>
                            <div className={cx('bold', 'textT')}>Tổng chi tiêu:</div>
                            <div>{formatPrice(detailUser.total_all)}</div>
                        </p>
                    </div>

                    <div className={cx('w45pt')}>
                        <p className={cx('flex', 'center')}>
                            <div   className={cx('bold', 'textT')}>Mã khách hàng:</div>
                            <div>{detailUser.userId}</div>
                        </p>
                        <p className={cx('flex', 'center')}>
                            <div   className={cx('bold', 'textT')}>Số điện thoại:</div>
                            <div>{detailUser.sdt || 'Chưa cập nhật số điện thoại'}</div>
                        </p>
                        <p className={cx('flex', 'center')}>
                            <div className={cx('bold', 'textT')}> E-mail:</div>
                            <div>{detailUser.email}</div>
                        </p>
                    </div>
                </div>

                <div className={cx('flex', 'flexStart')}>
                    <div className={cx('w8pt', 'bold')}>Địa chỉ:</div>

                    <div>
                        {detailUser?.addressResponseList.map((item, index) => (
                            <div className={cx('itemAddress')}>{index + 1}: {item.street}, {item.district}, {item.city}</div>
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
                        {detailUser?.orderDetailResponses.map(itemBill => (
                            <tr onClick={() => handleDetailBill(itemBill)}>
                                <td>{itemBill.code}</td>
                                <td>{itemBill.username}</td>
                                <td>{formatPrice(itemBill.total || 0)}</td>
                                <td>{itemBill.status}</td>
                                <td>{formatDay(itemBill.createdAt || "")}</td>
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
