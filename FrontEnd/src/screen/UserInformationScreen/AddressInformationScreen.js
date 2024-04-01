import React, {useState} from "react";
import styles from './UserInformationScreen.module.scss';
import classNames from "classnames/bind";
import {useNavigate} from "react-router-dom";

const cx = classNames.bind(styles);

function AddressInformationScreen (props) {

    const userName = 'Vũ Dũng';

    const navigate = useNavigate();
    const [showAdd, setShowAdd] = useState(false);
    const [nameNew, setNameNew] = useState('');
    const [sdt, setSdt] = useState('');
    const [address, setAddress] = useState('');

    const handleToUserInformationScreen = () => {
        navigate('/screen/UserInformationScreen/UserInformationScreen')
    }

    const renderAddAddress = () => (
        <div className={cx('addAddress')}>
            <div className={cx('headerAddAddress')}>Thêm địa chỉ mới</div>

            <div className={cx('itemAddAddress')}>
                <h4 className={cx('addHeader')}>Tên *</h4>
                <input className={cx('input')} />
            </div>

            <div className={cx('itemAddAddress')}>
                <h4 className={cx('addHeader')}>Số điện thoại *</h4>
                <input className={cx('input')} />
            </div>

            <div className={cx('itemAddAddress')}>
                <h4 className={cx('addHeader')}>Địa chỉ *</h4>
                <input className={cx('input')} />
            </div>

            <div className={cx('flex', 'center')}>
                <input type={'checkbox'} className={cx('inputCheck')} />
                <p>Đặt làm mặc định ?</p>
            </div>

            <div className={cx('flex', 'center')}>
                <p className={cx('btn', 'btnAddAddress')}>Cập nhât</p>
                <p className={cx('space')}>hoặc</p>
                <p className={cx('btn', 'cancel')} onClick={() => setShowAdd(false)}>Huỷ</p>
            </div>
        </div>
    )

    return (
        <div className={cx('UserInformationScreen', 'flex')}>
            <div className={cx('UserInformation', 'relative')}>
                <h3>THÔNG TIN ĐỊA CHỈ</h3>

                <div>
                    <h4>Xin chào, {userName}!</h4>

                    <p>Cập nhật thông tin tài khoản của bạn để hưởng các chính sách của cửa hàng vào chế độ bảo mật tốt nhất</p>
                </div>

                <table className={cx('tableOrder')}>
                    <thead>
                    <tr>
                        <th className={cx('nameAdd')}>Tên</th>
                        <th className={cx('sdtAdd')}>Số điện thoại</th>
                        <th className={cx('address')}>Địa chỉ</th>
                        <th className={cx('editAddress')}></th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td>Vũ Dũng</td>
                        <td>Vũ Dũng</td>
                        <td>Vũ Dũng</td>
                        <td>Xoá</td>
                    </tr>
                    </tbody>
                </table>

                <div className={cx('flex', 'center')} style={{ justifyContent: 'space-between', width: '90%' }}>
                    <div className={cx('btn', 'btnAddAddress')} onClick={() => setShowAdd(true)} >Thêm địa chỉ mới</div>

                    <div className={cx('btn')} onClick={handleToUserInformationScreen} style={{ color: '#1184a8' }}>Quay lại thông tin tài khoản</div>
                </div>

                {showAdd && (renderAddAddress())}
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

export default AddressInformationScreen;
