import React, {useState} from "react";
import styles from './QLUserScreen.module.scss';
import classNames from "classnames/bind";
import {formatDay, formatPrice} from "../../../unitl";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

const cx = classNames.bind(styles);

function QLUserScreen () {

    const data = [
        {
            id: 1,
            role: 'ADMIN',
            nameUser: 'Vũ Văn Dũng',
            phoneUser: '01216048012',
            emailUser: 'daisyss159@gmail.com',
            dateCreate: '2024-04-05T00:00:00',
            totalPrice: 700000000,
        },
        {
            id: 2,
            role: 'ADMIN',
            nameUser: 'Vũ Văn Dũng',
            phoneUser: '01216048012',
            emailUser: 'daisyss159@gmail.com',
            dateCreate: '2024-04-05T00:00:00',
            totalPrice: 700000000,
        },
        {
            id: 3,
            role: 'ADMIN',
            nameUser: 'Vũ Văn Dũng',
            phoneUser: '01216048012',
            emailUser: 'daisyss159@gmail.com',
            dateCreate: '2024-04-05T00:00:00',
            totalPrice: 700000000,
        },
        {
            id: 4,
            role: 'ADMIN',
            nameUser: 'Vũ Văn Dũng',
            phoneUser: '01216048012',
            emailUser: 'daisyss159@gmail.com',
            dateCreate: '2024-04-05T00:00:00',
            totalPrice: 700000000,
        }
    ]

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [textSearch, setTextSearch] = useState('');

    const handleSearch = (e) => {
        setTextSearch(e.target.value)
    }

    const handleToDetailUserAdminScreen = (item) => {
        navigate(`/admin/DetailUserAdminScreen/${item.id}`);
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
                        <th>Loại TK</th>
                        <th>Tên khách hàng</th>
                        <th>SĐT</th>
                        <th>E-mail</th>
                        <th>Ngày tạo</th>
                        <th>Tổng chi tiêu</th>
                        <th></th>
                    </tr>
                    </thead>

                    <tbody>
                    {data.map(item => (
                        <tr>
                            <td onClick={handleToDetailUserAdminScreen}>{item.id}</td>
                            <td onClick={handleToDetailUserAdminScreen}>{item.role}</td>
                            <td onClick={handleToDetailUserAdminScreen}>{item.nameUser}</td>
                            <td onClick={handleToDetailUserAdminScreen}>{item.phoneUser}</td>
                            <td onClick={handleToDetailUserAdminScreen}>{item.emailUser}</td>
                            <td onClick={handleToDetailUserAdminScreen}>{formatDay(item.dateCreate)}</td>
                            <td onClick={handleToDetailUserAdminScreen}>{formatPrice(item.totalPrice)}</td>
                            <td className={cx('iconTrash')}>
                                <i className='bx bx-trash'></i>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default QLUserScreen;
