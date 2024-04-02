import React from "react";
import styles from './UserInformationScreen.module.scss';
import classNames from "classnames/bind";
import {useNavigate} from "react-router-dom";

const cx = classNames.bind(styles);

function UserInformationScreen (props) {

    const userName = "Vũ Dũng";

    const navigate = useNavigate();

    const handleToAddressInformationScreen = () => {
        navigate('/screen/UserInformationScreen/AddressInformationScreen')
    }

    return (
        <div className={cx('UserInformationScreen', 'flex')}>
            <div className={cx('UserInformation')}>
                <h3>THÔNG TIN ĐỊA CHỈ</h3>

                <div>
                    <h4>Xin chào, {userName}!</h4>

                    <p>Cập nhật thông tin tài khoản của bạn để hưởng các chính sách của cửa hàng vào chế độ bảo mật tốt nhất</p>
                </div>

                <div className={cx('relative')}>
                    <h4>Thông tin đơn hàng</h4>

                    <table className={cx('tableOrder')}>
                        <thead>
                        <tr>
                            <th className={cx('order')}>Đơn hàng</th>
                            <th className={cx('time')}>Thời gian</th>
                            <th className={cx('transport')}>Vận chuyển</th>
                            <th className={cx('sumPrice')}>Tổng tiền</th>
                            <th className={cx('cmt')}>Ghi chú</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>Không có đơn hàng nào</td>
                        </tr>
                        </tbody>
                    </table>

                    <div className={cx('btnTTDC')} onClick={handleToAddressInformationScreen}>Thông tin địa chỉ</div>
                </div>
            </div>

            <div className={cx('bannerUser')}>
                <h3 className={cx('bannerUserH')}>TÀI KHOẢN CỦA TÔI</h3>

                <div className={cx('bannerUserB')}>
                    <div className={cx('flex', 'center', 'borderB')}>
                        <i className={cx('bx bx-chevron-right', 'iconArrowR')} />
                        <h3 className={cx('nameTK')} >Tên tài khoản: {userName}</h3>
                    </div>

                    <div className={cx('flex', 'center')}>
                        <i className={cx('bx bx-chevron-right', 'iconArrowR')} />
                        <p className={cx('addTk')}>Sổ địa chỉ (0)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInformationScreen;
