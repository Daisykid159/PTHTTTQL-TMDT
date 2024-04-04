import React, {useState} from "react";
import styles from './QLUserScreen.module.scss';
import classNames from "classnames/bind";
import {formatPrice} from "../../../unitl";

const cx = classNames.bind(styles);

function QLUserScreen () {

    const [textSearch, setTextSearch] = useState('');

    const handleSearch = (e) => {
        setTextSearch(e.target.value)
    }

    return (
        <div className={cx('QLUserScreen')}>
            <div className={cx('fixed')}>
                <div className={cx('headerQlUser', 'flex')}>
                    <i className={cx('bx bx-menu', 'iconMenu')}></i>
                    <div>QUẢN LÝ KHÁCH HÀNG</div>
                </div>

                <div className={cx('flex', 'searchUser')}>
                    <div className={cx('borderSearch', 'flex')}>
                        <input className={cx('searchInput')} onChange={handleSearch} placeholder={'Nhập nội dung tìm kiếm'} value={textSearch}/>
                        <i className={cx('bx bx-search', 'iconSearch')}></i>
                    </div>
                </div>
            </div>

            <div className={cx('body')}>
                <table border="1" cellPadding="1" cellSpacing="1" className={cx('tableKH')}>
                    <thead>
                    <tr>
                        <th>Mã KH</th>
                        <th>Tên khách hàng</th>
                        <th>Địa chỉ</th>
                        <th>SĐT</th>
                        <th>E-mail</th>
                        <th>Ngày tạo</th>
                        <th>Tổng chi tiêu</th>
                        <th></th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td>Admin</td>
                        <td>Vũ Dũng</td>
                        <td>Thanh Xuân, Hà Nội</td>
                        <td>03288855361</td>
                        <td>daisyss159@gmail.com</td>
                        <td>29/06/2023</td>
                        <td>{formatPrice(5000000)}</td>
                        <td className={cx('iconTrash')}>
                            <i className='bx bx-trash'></i>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default QLUserScreen;
