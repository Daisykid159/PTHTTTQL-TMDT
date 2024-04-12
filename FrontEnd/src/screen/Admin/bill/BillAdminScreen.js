import React, {useState} from "react";
import styles from './BillAdminScreen.module.scss';
import classNames from "classnames/bind";
import {formatDay, formatPrice} from "../../../unitl";

const cx = classNames.bind(styles);

function BillAdminScreen (props) {

    const dataListBill = [
        {
            id: '#872',
            userBuy: 'Thomas Hardy',
            priceBuy: 250000,
            status: 'Hoàn thành',
            dateBuy: '2024-03-19T10:55:40',
        }
    ]

    const [textSearch, setTextSearch] = useState('');

    const handleSearch = (e) => {
        setTextSearch(e.target.value)
    }

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
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.userBuy}</td>
                                <td>{formatPrice(item.priceBuy)}</td>
                                <td>{item.status}</td>
                                <td>{formatDay(item.dateBuy)}</td>
                                <td className={cx('iconList')}>
                                    <i className={cx('bx bx-show-alt', 'iconShow')}></i>
                                    <i className={cx('bx bxs-pencil', 'iconEdit')}></i>
                                    <i className={cx('bx bx-trash', 'iconTrash')}></i>
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
