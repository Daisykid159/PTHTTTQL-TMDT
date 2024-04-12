import React, {useState} from "react";
import styles from './QLKhoHangScreen.module.scss';
import classNames from "classnames/bind";
import {formatPrice} from "../../../unitl";

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

    const [textSearch, setTextSearch] = useState('');
    const [selectedOption, setSelectedOption] = useState('');

    const handleSearch = (e) => {
        setTextSearch(e.target.value)
    }

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

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
                            <th>Tên sản phẩm</th>
                            <th>Đơn vị tính</th>
                            <th>Màu</th>
                            <th>Giá mua</th>
                            <th>Giá bán</th>
                            <th>Loại</th>
                            <th>Ngày nhập</th>
                            <th>Số lượng đã bán</th>
                            <th>Số lượng còn lại</th>

                            <th></th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>IP15</td>
                            <td>Apple iPhone 15 Pro Max - 256GB - 99% Like New</td>
                            <td>Cái</td>
                            <td>Titan</td>
                            <td>{formatPrice(27000000)}</td>
                            <td>{formatPrice(28000000)}</td>
                            <td>Iphone 15</td>
                            <td>29/06/2023</td>
                            <td>500</td>
                            <td>100</td>

                            <td className={cx('iconList')}>
                                <i className={cx('bx bx-show-alt', 'iconShow')}></i>
                                <i className={cx('bx bxs-pencil', 'iconEdit')}></i>
                                <i className={cx('bx bx-trash', 'iconTrash')}></i>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default QLKhoHangScreen;
