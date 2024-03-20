import React from "react";

import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles)

function RegisterScreen(props) {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/screen/authen/LoginScreen');
    };

    return (
        <div className={cx('register')}>
            <h3>ĐĂNG KÝ TÀI KHOẢN</h3>
            <p>Nếu bạn có một tài khoản, xin vui lòng chuyển qua trang đăng nhập</p>
            <h4>Thông tin cá nhân</h4>
            <div>
                <h4>Tên người dùng</h4>
                <input className={cx('input', 'w98')} placeholder={'Nhập tên người dùng'} />
            </div>

            <div>
                <h4>E-mail</h4>
                <input className={cx('input', 'w98')} placeholder={'Nhập E-mail'} />
            </div>

            <div>
                <h4>Password</h4>
                <input className={cx('input', 'w98')} placeholder={'Nhập Password'} />
            </div>

            <div>
                <h4>Nhập lại Password</h4>
                <input className={cx('input', 'w98')} placeholder={'Nhập lại Password'} />
            </div>

            <div className={cx('btnList')} >
                <div className={cx('btn', 'w10')} >Đăng kí</div>

                <div className={cx('btn', 'w10')} onClick={handleBack} >Quay lại</div>
            </div>
        </div>
    )
}

export default RegisterScreen;
