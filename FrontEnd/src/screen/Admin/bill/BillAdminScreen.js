import React, {useEffect, useState} from "react";
import styles from './BillAdminScreen.module.scss';
import classNames from "classnames/bind";
import {formatDay, formatPrice} from "../../../unitl";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {actionGetAllOrder} from "../../../redux-store/action/actionAdminOrder";

const cx = classNames.bind(styles);

function BillAdminScreen (props) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector(state => state.reducerAuth.token);
    const decoded = useSelector(state => state.reducerAuth.decoded);
    const dataListBill = useSelector(state => state.reducerAdminOrder.listAllOrders);

    const [textSearch, setTextSearch] = useState('');

    const handleSearch = (e) => {
        setTextSearch(e.target.value)
    }

    const handleDetailBill = (bill) => {
        navigate(`/admin/DetailBillAdminScreen/${bill.code}`);
    }

    useEffect(() => {
        dispatch(actionGetAllOrder(token, decoded.sub));
    }, []);

    return (
        <div className={cx('BillAdminScreen')}>
            <div className={cx('Header')}>
                <h2>Đơn hàng</h2>

                <div className={cx('flex', 'searchUser')}>
                    <div className={cx('borderSearch', 'flex')}>
                        <input className={cx('searchInput')} onChange={handleSearch} placeholder={'Nhập nội dung tìm kiếm'} value={textSearch}/>
                        <i className={cx('bx bx-search', 'iconSearch')}></i>
                    </div>
                </div>
            </div>

            <div className={cx('body')}>
                <div>
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
                        {dataListBill.map(item => (
                            <tr onClick={() => handleDetailBill(item)}>
                                <td>{item.code}</td>
                                <td>{item.username}</td>
                                <td>{formatPrice(item.total || 0)}</td>
                                <td>{item.orderStatus}</td>
                                <td>{formatDay(item.dateBuy || '')}</td>
                                <td className={cx('iconList')}>
                                    <i className={cx('bx bx-show-alt', 'iconShow')}></i>
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

export default BillAdminScreen;
