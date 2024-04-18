import React, {useState} from "react";
import { useParams } from 'react-router-dom';
import styles from './DetailBillAdminScreen.module.scss';
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {formatDay, formatPrice} from "../../../unitl";
import moment from "moment";

const cx = classNames.bind(styles);

function DetailBillAdminScreen ({ route, props }) {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const dataDetail = {
        idBill: "1345",
        statusBill: 'new',
        userName: 'Jhon Michle',
        emailUser: 'jhon@_78@example.com',
        phoneUser: '+91-9910XXXXXX',
        listProductBill: [
            {
                idProduct: 'IP15',
                nameProduct: 'Apple iPhone 15 Pro Max - 256GB - 99% Like New',
                imgProduct: 'https://bizweb.dktcdn.net/100/112/815/products/3qu436-compressed-151f18c2-3346-4113-a925-0b8876c26d1e.jpg?v=1703477493057',
                colorProduct: 'Titan',
                quantityProduct: 2,
                priceSell: 27500000,
                type: 'Iphone 15',
            },
            {
                idProduct: 'IP15',
                nameProduct: 'Apple iPhone 15 Pro Max - 256GB - 99% Like New',
                imgProduct: 'https://bizweb.dktcdn.net/100/112/815/products/3qu436-compressed-151f18c2-3346-4113-a925-0b8876c26d1e.jpg?v=1703477493057',
                colorProduct: 'Titan',
                quantityProduct: 2,
                priceSell: 27500000,
                type: 'Iphone 15',
            },
            {
                idProduct: 'IP15',
                nameProduct: 'Apple iPhone 15 Pro Max - 256GB - 99% Like New',
                imgProduct: 'https://bizweb.dktcdn.net/100/112/815/products/3qu436-compressed-151f18c2-3346-4113-a925-0b8876c26d1e.jpg?v=1703477493057',
                colorProduct: 'Titan',
                quantityProduct: 2,
                priceSell: 27500000,
                type: 'Iphone 15',
            },
            {
                idProduct: 'IP15',
                nameProduct: 'Apple iPhone 15 Pro Max - 256GB - 99% Like New',
                imgProduct: 'https://bizweb.dktcdn.net/100/112/815/products/3qu436-compressed-151f18c2-3346-4113-a925-0b8876c26d1e.jpg?v=1703477493057',
                colorProduct: 'Titan',
                quantityProduct: 2,
                priceSell: 27500000,
                type: 'Iphone 15',
            }
        ],
    }
    const opstionStatusBill = [
        {
            value: 'done',
            label: 'Hoàn thành',
        },
        {
            value: 'shiping',
            label: 'Đang giao',
        },
        {
            value: 'new',
            label: 'Mới tạo',
        }
    ]

    const dateNow = new Date();
    const formattedDate = moment(dateNow).format('dddd DD/MM/YYYY HH:mm');

    const [selectStatusBill, setSelectStatusBill] = useState();

    const params = useParams();

    const handleOptionChange = (e) => {
        setSelectStatusBill(e.target.value);
    };

    return (
        <div className={cx('DetailBillAdminScreen')}>
            <div className={cx('bold', 'textHeader')}>CHI TIẾT HÓA ĐƠN</div>

            <div className={cx('flex', 'center', 'spaceBetween', 'statusBill')}>
                <div className={cx('bold')}>{formattedDate}</div>

                <div className={cx('flex', 'center', 'spaceBetween', 'selectStatusBill')}>
                    <div className={cx('bold', 'flex', 'center')}>
                        <div className={cx('textStatus')}>Trạng thái đơn hàng:</div>

                        <select
                            className={cx('selectStatus')}
                            value={selectStatusBill || dataDetail.statusBill}
                            onChange={handleOptionChange}
                        >
                            {opstionStatusBill.map(item => (
                                <option value={item.value}>{item.label}</option>
                            ))}
                        </select>
                    </div>

                    <div className={cx('updateStatusBull')}>Cập nhật</div>
                </div>

            </div>

            <div className={cx('flex', 'spaceBetween')}>
                <div className={cx('itemH', 'flex', 'center')}>
                    <div className={cx('icon')}>
                        <i className={cx('bx bxs-user', 'iconUser')}></i>
                    </div>

                    <div className={cx('itemB')}>
                        <div className={cx('textH', 'bold')}>Thông tin người mua</div>
                        <div className={cx('bold')}>{dataDetail.userName}</div>
                        <div>{dataDetail.emailUser}</div>
                        <div>{dataDetail.phoneUser}</div>
                    </div>
                </div>

                <div className={cx('itemH', 'flex', 'center')}>
                    <div className={cx('icon')}>
                        <i className={cx('bx bxs-truck', 'iconTrack')}></i>
                    </div>

                    <div className={cx('itemB')}>
                        <div className={cx('textH', 'bold')}>Trạng thái đơn hàng</div>
                        <div className={cx('flex')}>
                            <div className={cx('bold')}>
                                Đơn vị vận chuyển:
                                <span className={cx('textAfter')}>Red Express</span>
                            </div>
                        </div>

                        <div className={cx('flex')}>
                            <div className={cx('bold')}>
                                Hình thức thanh toán:
                                <span className={cx('textAfter')}>Master Card</span>
                            </div>
                        </div>

                        <div className={cx('flex')}>
                            <div className={cx('bold')}>
                                Trạng thái:
                                <span className={cx('textAfter')}>Đơn hàng mới</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('itemH', 'flex', 'center')}>
                    <div className={cx('icon')}>
                        <i className={cx('bx bx-map', 'iconMap')}></i>
                    </div>

                    <div className={cx('itemB')}>
                        <div className={cx('textH', 'bold')}>Địa chỉ giao hàng</div>
                        <div className={cx('flex')}>
                            <div className={cx('bold')}>
                                Địa chỉ:
                                <span className={cx('textAfter')}>Số 9, ngõ 313 Quan Nhân, Nhân Hoà, Nhân Chính, Thanh Xuân, Hà Nội</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className={cx('flex', 'spaceBetween', 'mT20')} style={{ alignItems: 'self-start' }}>
                <div className={cx('listProduct')}>
                    <table className={cx('table')} >
                        <thead>
                            <tr>
                                <th className={cx('nameProductH')}>Tên sản phẩm</th>
                                <th>Màu</th>
                                <th>Giá sản phẩm</th>
                                <th>Số lượng</th>
                                <th>Thành tiền</th>
                            </tr>
                        </thead>

                        <tbody>
                        {
                            dataDetail.listProductBill.map(item => (
                                <tr>
                                    <td className={cx('nameProduct')}>
                                        <img src={item.imgProduct} className={cx('imgProduct')} alt={'ảnh sản phẩm'} />
                                        <div>{item.nameProduct}</div>
                                    </td>
                                    <td>{item.colorProduct}</td>
                                    <td>{formatPrice(item.priceSell)}</td>
                                    <td>{item.quantityProduct}</td>
                                    <td>{formatPrice(item.priceSell)}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>

                <div className={cx('pay')}>
                    <div className={cx('flex', 'center', 'spaceBetween', 't4h')}>
                        <div className={cx('textH', 'bold')}>Thông tin thanh toán</div>
                        <div className={cx('summit', 'bold')}>Đã thanh toán</div>
                    </div>

                    <div className={cx('flex', 'spaceBetween')}>
                        <div className={cx('bold')}>Tổng tiền</div>
                        <div>{formatPrice(200000000)}</div>
                    </div>

                    <div className={cx('flex', 'spaceBetween')}>
                        <div className={cx('bold')}>Phí vận chuyển</div>
                        <div>{formatPrice(40000)}</div>
                    </div>

                    <div className={cx('flex', 'spaceBetween')}>
                        <div className={cx('bold')}>Thếu</div>
                        <div>{formatPrice(200000)}</div>
                    </div>

                    <div className={cx('flex', 'spaceBetween', 'mT20', 'textH')}>
                        <div className={cx('bold')}>Tổng thanh toán</div>
                        <div className={cx('bold', 'red')}>- {formatPrice(200000000)}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailBillAdminScreen;
