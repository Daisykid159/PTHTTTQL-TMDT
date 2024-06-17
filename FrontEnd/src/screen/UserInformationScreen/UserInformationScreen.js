import React, {useEffect} from "react";
import styles from './UserInformationScreen.module.scss';
import classNames from "classnames/bind";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {actionGetDetailOrder1, actionGetInfoUser1} from "../../redux-store/action/actionUserInformation";
import {formatDay} from "../../unitl";

const cx = classNames.bind(styles);

function UserInformationScreen (props) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector(state => state.reducerAuth.token);
    const decoded = useSelector(state => state.reducerAuth.decoded);
    const detailUser = useSelector(state => state.reducerUserInformation.detailUser1);

    const handleToAddressInformationScreen = () => {
        navigate('/screen/UserInformationScreen/AddressInformationScreen')
    }

    const handleDetailBill = (item) => {
        dispatch(actionGetDetailOrder1(token, decoded.sub, item.code))
        navigate(`/screen/UserInformationScreen/DetailBillUserScreen/${item.code}`)
    }

    useEffect(() => {
        dispatch(actionGetInfoUser1(token, decoded.sub, decoded.sub));
    }, [])

    return (
        <div className={cx('UserInformationScreen', 'flex')}>
            <div className={cx('UserInformation')}>
                <h3>THÔNG TIN ĐỊA CHỈ</h3>

                <div>
                    <h4>Xin chào, {detailUser?.username}!</h4>

                    <p>Cập nhật thông tin tài khoản của bạn để hưởng các chính sách của cửa hàng vào chế độ bảo mật tốt nhất</p>
                </div>

                <div className={cx('relative')}>
                    <h4>Thông tin đơn hàng</h4>

                    <table className={cx('tableOrder')}>
                        <thead>
                        <tr>
                            <th className={cx('order')}>Mã đơn hàng</th>
                            <th className={cx('time')}>Thời gian</th>
                            <th className={cx('transport')}>Trạng thái</th>
                            <th className={cx('transport')}>Trạng thái thanh toán</th>
                            <th className={cx('sumPrice')}>Tổng tiền</th>
                        </tr>
                        </thead>

                        <tbody>
                        {
                            detailUser?.orderDetailResponses?.map(item => (
                                <tr onClick={() => handleDetailBill(item)}>
                                    <td>{item.code}</td>
                                    <td>{formatDay(item.createdAt)}</td>
                                    <td>{item.status}</td>
                                    <td>{item?.payment_status}</td>
                                    <td>{item.total}</td>
                                </tr>
                            ))
                        }
                        <tr>
                        </tr>
                        </tbody>
                    </table>

                </div>
            </div>

            <div className={cx('bannerUser')}>
                <h3 className={cx('bannerUserH')}>TÀI KHOẢN CỦA TÔI</h3>

                <div className={cx('bannerUserB')}>
                    <div className={cx('flex', 'center', 'borderB')}>
                        <i className={cx('bx bx-chevron-right', 'iconArrowR')} />
                        <h3 className={cx('nameTK')} >Tên tài khoản: {detailUser?.username}</h3>
                    </div>

                    <div >
                        <div className={cx('flex', 'center')}>
                            <i className={cx('bx bx-chevron-right', 'iconArrowR')} />
                            <p className={cx('addTk')}>Sổ địa chỉ ({detailUser?.addressResponseList?.length})</p>
                        </div>

                        {
                            detailUser?.addressResponseList?.map((item, index) => (
                                <div className={cx('itemAddress')}>
                                    {index+1}: {item?.street}, {item?.district}, {item?.city}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInformationScreen;
