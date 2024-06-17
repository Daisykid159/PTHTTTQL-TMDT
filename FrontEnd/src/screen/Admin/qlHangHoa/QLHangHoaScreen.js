import React, {useEffect, useState} from "react";
import styles from './QLHangHoaScreen.module.scss';
import classNames from "classnames/bind";
import {formatPrice} from "../../../unitl";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {actionGetAllSkuById, actionGetAllSpu, actionGetAllUser} from "../../../redux-store/action/actionFakeApi";

const cx = classNames.bind(styles);

function QLHangHoaScreen (props) {

    const token = useSelector(state => state.reducerAuth.token);
    const decoded = useSelector(state => state.reducerAuth.decoded);
    const dataListTypeProduct = useSelector(state => state.reducerFakeApi.listDataProduct);
    const listDataProductColor = useSelector(state => state.reducerFakeApi.listDataProductColor);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [textSearch, setTextSearch] = useState('');
    const [selectedOption, setSelectedOption] = useState('');

    const handleSearch = (e) => {
        setTextSearch(e.target.value)
    }

    const handleOptionChange = (event) => {
        dispatch(actionGetAllSkuById(token, decoded.sub, event.target.value));
        setSelectedOption(event.target.value);
    };

    const handleToEditProductKhoHangAdminScreen = (item) => {
        navigate(`/admin/EditProductKhoHangAdminScreen`, {
            state: {
                editSanPham: true,
                data: item || null,
            },
        });
    }

    useEffect(() => {
        dispatch(actionGetAllSpu(token, decoded.sub));
        dispatch(actionGetAllSkuById(token, decoded.sub, 1))
    }, [])

    return (
        <div className={cx('QLHangHoaScreen')}>
            <div className={cx('fixed')}>
                <div className={cx('headerQl', 'flex')}>
                    <i className={cx('bx bx-menu', 'iconMenu')}></i>
                    <div>QUẢN LÝ SẢN PHẨM</div>
                </div>

                <div className={cx('flex', 'searchUser')}>
                    <div className={cx('borderSearch', 'flex')}>
                        <input className={cx('searchInput')} onChange={handleSearch} placeholder={'Nhập nội dung tìm kiếm'} value={textSearch}/>
                        <i className={cx('bx bx-search', 'iconSearch')}></i>
                    </div>
                </div>

                <div>
                    <select value={selectedOption} onChange={handleOptionChange} className={cx('selectListProduct')}>
                        {dataListTypeProduct.map(item => (
                            <option value={item.id} >{item.name}</option>
                        ))}
                    </select>
                </div>

                <div className={cx('btn', 'addSp')}>Thêm sản phẩm</div>
            </div>

            <div className={cx('body')}>
                <div className={cx('relative')}>
                    <table border="1" cellPadding="1" cellSpacing="1" className={cx('tableKH')}>
                        <thead>
                        <tr>
                            <th>Mã SP</th>
                            <th style={{ width: '40%' }}>Tên sản phẩm</th>
                            <th>Đơn vị tính</th>
                            <th>Màu</th>
                            <th>Giá bán</th>
                            <th>Loại</th>

                            <th></th>
                        </tr>
                        </thead>

                        <tbody>
                        {
                            listDataProductColor?.map(item => (
                                <tr onClick={() => handleToEditProductKhoHangAdminScreen(item)}>
                                    <td>{item.id}</td>
                                    <td className={cx('nameProduct')}>
                                        <div>{item.productSpu.name} {item.productSpu.description}</div>
                                    </td>
                                    <td>{item.color}</td>
                                    <td>{formatPrice(item.price)}</td>
                                    <td>{item.quantity}</td>
                                    <td>{formatPrice(item.quantity * item.price)}</td>

                                    <td className={cx('iconList')}>
                                        <i className={cx('bx bxs-pencil', 'iconEdit')} onClick={() => handleToEditProductKhoHangAdminScreen(item)}></i>
                                        <i className={cx('bx bx-trash', 'iconTrash')}></i>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    )
}

export default QLHangHoaScreen;
