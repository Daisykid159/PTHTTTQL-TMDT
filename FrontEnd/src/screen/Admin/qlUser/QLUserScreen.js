import React, {useEffect, useState} from "react";
import styles from './QLUserScreen.module.scss';
import classNames from "classnames/bind";
import {formatDay, formatPrice} from "../../../unitl";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {actionGetAllSkuById, actionGetAllSpu, actionGetAllUser} from "../../../redux-store/action/actionFakeApi";
import {actionGetInfoUser} from "../../../redux-store/action/actionUserInformation";

const cx = classNames.bind(styles);

function QLUserScreen () {

    const listUser = useSelector(state => state.reducerFakeApi.listAllUser);
    const token = useSelector(state => state.reducerAuth.token);
    const decoded = useSelector(state => state.reducerAuth.decoded);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [textSearch, setTextSearch] = useState('');

    const handleSearch = (e) => {
        setTextSearch(e.target.value)
    }

    const handleToDetailUserAdminScreen = (username) => {
        dispatch(actionGetInfoUser(token, decoded.sub, username));
        navigate(`/admin/DetailUserAdminScreen/${username}`);
    }

    useEffect(() => {
        dispatch(actionGetAllUser(token, decoded.sub))
    }, [])

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
                        <th></th>
                    </tr>
                    </thead>

                    <tbody>
                    {listUser?.map(item => (
                        <tr>
                            <td onClick={() => handleToDetailUserAdminScreen(item.username)}>{item.id}</td>
                            <td onClick={() => handleToDetailUserAdminScreen(item.username)}>{item.roles[0].name}</td>
                            <td onClick={() => handleToDetailUserAdminScreen(item.username)}>{item.username}</td>
                            <td onClick={() => handleToDetailUserAdminScreen(item.username)}>{item?.phone}</td>
                            <td onClick={() => handleToDetailUserAdminScreen(item.username)}>{item.email}</td>
                            <td onClick={() => handleToDetailUserAdminScreen(item.username)}>{formatDay(item.createdAt)}</td>
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
