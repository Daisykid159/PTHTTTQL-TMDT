import React, {useState} from "react";
import styles from './QLKhoHangScreen.module.scss';
import classNames from "classnames/bind";
import {formatDay, formatPrice} from "../../../unitl";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

const cx = classNames.bind(styles);

function QLKhoHangScreen (props) {

    const dataListTypeProductKho = [
        {
            id: 1,
            name: 'iPhone XS',
        },
        {
            id: 2,
            name: 'iPhone 12',
        }
    ]

    const dataListProduct = [
        {
            idProduct: 123,
            nameProduct: 'Apple iPhone 15 Pro Max - 256GB - 99% Like New',
            quantitySold: 12,
            remainingAmount: 22,
            typeProduct: 'Iphone 15',
            colorProduct: 'Titan',
            imgProduct: 'https://bizweb.dktcdn.net/100/112/815/products/3qu436-compressed-151f18c2-3346-4113-a925-0b8876c26d1e.jpg?v=1703477493057',
            priceBuy: 24000000,
            priceSell: 24500000,
            dayNhap: '2024-12-02T00:00:00',
        }
    ]

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [textSearch, setTextSearch] = useState('');
    const [selectedOption, setSelectedOption] = useState('');

    const handleSearch = (e) => {
        setTextSearch(e.target.value)
    }

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleToEditProductKhoHangAdminScreen = (item) => {
        navigate(`/admin/EditProductKhoHangAdminScreen/${item.idProduct}`);
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
                            <th width={'35ss%'}>Tên sản phẩm</th>
                            <th>Màu</th>
                            <th>Giá nhập</th>
                            <th>Loại</th>
                            <th>Ngày nhập</th>
                            <th>Số lượng đã bán</th>
                            <th>Số lượng còn lại</th>

                            <th></th>
                        </tr>
                        </thead>

                        <tbody>
                            {dataListProduct.map(item => (
                                <tr>
                                    <td>{item.idProduct}</td>
                                    <td className={cx('nameProduct')}>
                                        <img src={item.imgProduct} className={cx('imgProduct')} alt={'ảnh sản phẩm'} />
                                        <div>{item.nameProduct}</div>
                                    </td>
                                    <td>{item.colorProduct}</td>
                                    <td>{formatPrice(item.priceBuy)}</td>
                                    <td>{item.typeProduct}</td>
                                    <td>{formatDay(item.dayNhap)}</td>
                                    <td>{item.quantitySold} chiếc</td>
                                    <td>{item.remainingAmount} chiếc</td>

                                    <td className={cx('iconList')}>
                                        <i className={cx('bx bx-show-alt', 'iconShow')}></i>
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
