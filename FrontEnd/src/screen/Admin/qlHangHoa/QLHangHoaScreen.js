import React, {useState} from "react";
import styles from './QLHangHoaScreen.module.scss';
import classNames from "classnames/bind";
import {formatPrice} from "../../../unitl";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

const cx = classNames.bind(styles);

function QLHangHoaScreen (props) {

    const dataListTypeProduct = [
        {
            id: 1,
            name: 'iPhone XS',
        },
        {
            id: 2,
            name: 'iPhone 12',
        }
    ]
    const dataListProducts = [
        {
            idProduct: 'IP15',
            nameProduct: 'Apple iPhone 15 Pro Max - 256GB - 99% Like New',
            imgProduct: 'https://bizweb.dktcdn.net/100/112/815/products/3qu436-compressed-151f18c2-3346-4113-a925-0b8876c26d1e.jpg?v=1703477493057',
            colorProduct: 'Titan',
            priceBuy: 27000000,
            priceSell: 27500000,
            type: 'Iphone 15',
        },
        {
            idProduct: 'IP14',
            nameProduct: 'Apple iPhone 14 Pro Max - 256GB - 99% Like New',
            imgProduct: 'https://bizweb.dktcdn.net/100/112/815/products/3qu436-compressed-151f18c2-3346-4113-a925-0b8876c26d1e.jpg?v=1703477493057',
            colorProduct: 'Titan',
            priceBuy: 26000000,
            priceSell: 26500000,
            type: 'Iphone 14',
        },
        {
            idProduct: 'IP13',
            nameProduct: 'Apple iPhone 13Pro Max - 256GB - 99% Like New',
            imgProduct: 'https://bizweb.dktcdn.net/100/112/815/products/3qu436-compressed-151f18c2-3346-4113-a925-0b8876c26d1e.jpg?v=1703477493057',
            colorProduct: 'Titan',
            priceBuy: 25000000,
            priceSell: 25500000,
            type: 'Iphone 13',
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
        const editSanPham = true;

        navigate(`/admin/EditProductKhoHangAdminScreen/${item.idProduct}`, {
            state: { editSanPham },
        });
    }

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
                            <th style={{ width: '45%' }}>Tên sản phẩm</th>
                            <th>Đơn vị tính</th>
                            <th>Màu</th>
                            <th>Giá bán</th>
                            <th>Loại</th>

                            <th></th>
                        </tr>
                        </thead>

                        <tbody>
                        {dataListProducts.map(item => (
                            <tr>
                                <td onClick={() => handleToEditProductKhoHangAdminScreen(item)}>{item.idProduct}</td>
                                <td className={cx('nameProduct')} onClick={() => handleToEditProductKhoHangAdminScreen(item)}>
                                    <img src={item.imgProduct} className={cx('imgProduct')} alt={'ảnh sản phẩm'} />
                                    <div>{item.nameProduct}</div>
                                </td>
                                <td>Cái</td>
                                <td>{item.colorProduct}</td>
                                <td onClick={() => handleToEditProductKhoHangAdminScreen(item)}>{formatPrice(item.priceSell)}</td>
                                <td>{item.type}</td>

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

export default QLHangHoaScreen;
