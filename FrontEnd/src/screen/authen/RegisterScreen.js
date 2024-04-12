import React, {useState} from "react";

import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import {actionRegister} from "../../redux-store/action/actionAuthen";

const cx = classNames.bind(styles)

function RegisterScreen(props) {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [sdt, setSdt] = useState('');
    const [password, setPassword] = useState('');
    const [reenterPassword, setReenterPassword] = useState('');

    const handleBack = () => {
        navigate('/screen/authen/LoginScreen');
    };

    const handleFullName = (e) => {
        setFullName(e.target.value);
    }

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleSDT = (e) => {
        setSdt(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleReenterPassword = (e) => {
        setReenterPassword(e.target.value);
    }
    const handleRegister = () => {
        dispatch(actionRegister(username, email, password, sdt))
    }

    return (
        <div className={cx('mt130')}>
            <div className={cx('register')} >
                <h3>ĐĂNG KÝ TÀI KHOẢN</h3>
                <p>Nếu bạn có một tài khoản, xin vui lòng chuyển qua trang đăng nhập</p>
                <h4>Thông tin cá nhân</h4>
                <div>
                    <h4>Tên người dùng</h4>
                    <input className={cx('input', 'w98')} placeholder={'Nhập tên người dùng'} value={fullName} onChange={handleFullName} />
                </div>

                <div>
                    <h4>Tên đăng nhập</h4>
                    <input className={cx('input', 'w98')} placeholder={'Nhập tên đăng nhập'} value={username} onChange={handleUsername} />
                </div>

                <div>
                    <h4>E-mail</h4>
                    <input className={cx('input', 'w98')} placeholder={'Nhập E-mail'} value={email} onChange={handleEmail} />
                </div>

                <div>
                    <h4>Số điện thoại</h4>
                    <input className={cx('input', 'w98')} placeholder={'Nhập số điện thoại'} value={sdt} onChange={handleSDT} />
                </div>

                <div>
                    <h4>Password</h4>
                    <input className={cx('input', 'w98')} placeholder={'Nhập Password'} type={'password'} value={password} onChange={handlePassword} />
                </div>

                <div>
                    <h4>Nhập lại Password</h4>
                    <input className={cx('input', 'w98')} placeholder={'Nhập lại Password'} type={'password'} value={reenterPassword} onChange={handleReenterPassword}/>
                </div>

                <div className={cx('btnList')} >
                    <div className={cx('btn', 'w10')} onClick={handleRegister} >Đăng kí</div>

                    <div className={cx('btn', 'w10')} onClick={handleBack} >Quay lại</div>
                </div>
            </div>
        </div>
    )
}

export default RegisterScreen;
