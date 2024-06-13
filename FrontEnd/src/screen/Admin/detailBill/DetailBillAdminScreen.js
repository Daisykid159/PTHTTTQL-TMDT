import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import styles from './DetailBillAdminScreen.module.scss';
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {formatDay, formatPrice} from "../../../unitl";
import moment from "moment";
import {actionGetDetailOrder, actionUpdateOrder} from "../../../redux-store/action/actionAdminOrder";

const cx = classNames.bind(styles);

function DetailBillAdminScreen ({ route, props }) {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const detailOrder = useSelector(state => state.reducerAdminOrder.detailOrder);
    const opstionStatusBill = [
        "PROCESSING",
        "DONE",
        "CACELED",
        "WAITING",
        "SHIPPING"
    ]

    const dateNow = new Date();
    const formattedDate = moment(dateNow).format('dddd DD/MM/YYYY HH:mm');

    const token = useSelector(state => state.reducerAuth.token);
    const decoded = useSelector(state => state.reducerAuth.decoded);

    const [selectStatusBill, setSelectStatusBill] = useState(detailOrder.status);
    let totalOrder = 0;

    const params = useParams();

    const handleOptionChange = (e) => {
        setSelectStatusBill(e.target.value);
    };

    const handleUpdateOrder = () => {
        dispatch(actionUpdateOrder(token, decoded.sub, params.id, selectStatusBill))
    }

    useEffect(() => {
        dispatch(actionGetDetailOrder(token, decoded.sub, params.id))
    }, [])

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
                            value={ selectStatusBill }
                            onChange={handleOptionChange}
                        >
                            {opstionStatusBill.map(item => (
                                <option value={item}>{item}</option>
                            ))}
                        </select>
                    </div>

                    <div className={cx('updateStatusBull')} onClick={handleUpdateOrder}>Cập nhật</div>
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
                                <span className={cx('textAfter')}>{detailOrder.status}</span>
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

export default DetailBillAdminScreen;
