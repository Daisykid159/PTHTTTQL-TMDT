import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import styles from './DetailBillUserScreen.module.scss';
import classNames from "classnames/bind";
import {useDispatch, useSelector} from "react-redux";
import {formatDay, formatPrice} from "../../unitl";
import moment from "moment";

const cx = classNames.bind(styles);

function DetailBillUserScreen () {

    const detailOrder = useSelector(state => state.reducerUserInformation.detailOrder1);

    const dateNow = new Date();
    const formattedDate = moment(dateNow).format('dddd DD/MM/YYYY HH:mm');

    const [selectStatusBill, setSelectStatusBill] = useState(detailOrder.status);
    let totalOrder = 0;

    const handleOptionChange = (e) => {
        setSelectStatusBill(e.target.value);
    };

    return (
        <div className={cx('DetailBillUserScreen')}>
            <div className={cx('bold', 'textHeader')}>CHI TIẾT HÓA ĐƠN</div>

            <div className={cx('flex', 'center', 'spaceBetween', 'statusBill')}>
                <div className={cx('bold')}>{formattedDate}</div>

                <div className={cx('flex', 'center', 'spaceBetween', 'selectStatusBill')}>
                    <div className={cx('bold', 'flex', 'center')}>
                        <div className={cx('textStatus')}>Trạng thái đơn hàng: {detailOrder?.status}</div>
                    </div>
                </div>

            </div>

            <div className={cx('flex', 'spaceBetween')}>
                <div className={cx('itemH', 'flex', 'center')}>
                    <div className={cx('icon')}>
                        <i className={cx('bx bxs-user', 'iconUser')}></i>
                    </div>

                    <div className={cx('itemB')}>
                        <div className={cx('textH', 'bold')}>Thông tin người mua</div>
                        <div className={cx('bold')}>{detailOrder?.userDetailResponse?.username}</div>
                        <div>{detailOrder?.userDetailResponse?.phone}</div>
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
                                <span className={cx('textAfter')}>{detailOrder?.status}</span>
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
                                <span className={cx('textAfter')}>
                                    {detailOrder?.userDetailResponse?.district}, {detailOrder?.userDetailResponse?.street}, {detailOrder?.userDetailResponse?.city}
                                </span>
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
                            detailOrder?.cartResponseList?.map(item => {
                                totalOrder += item.price * item.quantity;
                                return (
                                    <tr>
                                        <td className={cx('nameProduct')}>
                                            <img src={item.src} className={cx('imgProduct')} alt={'ảnh sản phẩm'}/>
                                            <div>{item.productSpu_name}</div>
                                        </td>
                                        <td>{item.productSku_name}</td>
                                        <td>{formatPrice(item.price)}</td>
                                        <td>{item.quantity}</td>
                                        <td>{formatPrice(item.price * item.quantity)}</td>
                                    </tr>
                                )
                            })
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
                        <div>{formatPrice(totalOrder)}</div>
                    </div>

                    <div className={cx('flex', 'spaceBetween')}>
                        <div className={cx('bold')}>Phí vận chuyển</div>
                        <div>{formatPrice(40000)}</div>
                    </div>

                    <div className={cx('flex', 'spaceBetween', 'mT20', 'textH')}>
                        <div className={cx('bold')}>Tổng thanh toán</div>
                        <div className={cx('bold', 'red')}>{formatPrice(totalOrder + 40000)}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailBillUserScreen;
