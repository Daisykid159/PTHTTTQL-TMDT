import React, {useState} from "react";
import styles from './QLKhoHangScreen.module.scss';
import classNames from "classnames/bind";
import {formatDay, formatPrice} from "../../../unitl";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {actionGetAllSkuById} from "../../../redux-store/action/actionFakeApi";

const cx = classNames.bind(styles);

function QLKhoHangScreen (props) {

    const dataListTypeProductKho = useSelector(state => state.reducerFakeApi.listDataProduct);

    const dataListProduct = useSelector(state => state.reducerFakeApi.listDataProductColor);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector(state => state.reducerAuth.token);
    const decoded = useSelector(state => state.reducerAuth.decoded);

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
        if(item) {
            navigate(`/admin/EditProductKhoHangAdminScreen`, {
                state: {
                    editSanPham: false,
                    data: item
                },
            });
        } else {
            navigate(`/admin/EditProductKhoHangAdminScreen`, {
                state: {
                    editSanPham: false,
                    data: null
                },
            });
        }
    }

    return (
        <div className={cx('QLKhoHangScreen')}>
            <div className={cx('fixed')}>
                <div className={cx('headerQl', 'flex')}>
                    <i className={cx('bx bx-menu', 'iconMenu')}></i>
                    <div>QUẢN LÝ TỒN KHO</div>
                </div>

                <div className={cx('flex', 'searchUser')}>
                    <div className={cx('borderSearch', 'flex')}>
                        <input className={cx('searchInput')} onChange={handleSearch} placeholder={'Nhập nội dung tìm kiếm'} value={textSearch}/>
                        <i className={cx('bx bx-search', 'iconSearch')}></i>
                    </div>
                </div>

                <div>
                    <select value={selectedOption} onChange={handleOptionChange} className={cx('selectListProduct')}>
                        {dataListTypeProductKho.map(item => (
                            <option label={item.name} >{item.id}</option>
                        ))}
                    </select>
                </div>

                <div
                    className={cx('btn', 'addSp')}
                    onClick={() => handleToEditProductKhoHangAdminScreen()}
                >Thêm sản phẩm</div>
            </div>

            <div className={cx('body')}>
                <div className={cx('relative')}>

                    <table border="1" cellPadding="1" cellSpacing="1" className={cx('tableKH')}>
                        <thead>
                        <tr>
                            <th>Mã SP</th>
                            <th width={'35ss%'}>Tên sản phẩm</th>
                            <th>Màu</th>
                            <th>Giá nhập</th>
                            <th>Loại</th>
                            <th>Ngày nhập</th>
                            <th>Số lượng còn lại</th>

                            <th></th>
                        </tr>
                        </thead>

                        <tbody>
                            {dataListProduct.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td className={cx('nameProduct')} onClick={() => handleToEditProductKhoHangAdminScreen(item)}>
                                        <div>{item.productSpu.name} {item.productSpu.description}</div>
                                    </td>
                                    <td>{item.color}</td>
                                    <td>{formatPrice(item.price)}</td>
                                    <td>{item.productSpu.type}</td>
                                    <td>{formatDay(item.dayNhap || Date.now())}</td>
                                    <td>{item.quantity} chiếc</td>

                                    <td className={cx('iconList')}>
                                        <i className={cx('bx bx-show-alt', 'iconShow')} onClick={() => handleToEditProductKhoHangAdminScreen(item)}></i>
                                        <i className={cx('bx bxs-pencil', 'iconEdit')} onClick={() => handleToEditProductKhoHangAdminScreen(item)}></i>
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

export default QLKhoHangScreen;
