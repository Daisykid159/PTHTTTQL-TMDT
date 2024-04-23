import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';

import classNames from "classnames/bind";
import styles from "./style.module.scss";
import {useDispatch} from "react-redux";
import {actionLogin} from "../../redux-store/action/actionAuthen";

const cx = classNames.bind(styles)

function LoginScreen ( props ) {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [showLogin, setShowLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleForget = () => {
        setShowLogin(!showLogin);
    }

    const nextToScreen = (url) => {
        navigate(url);
    };

    const handleRegister = () => {
        navigate('/screen/authen/RegisterScreen');
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const loginAction = async () => {
        await dispatch(actionLogin(email, password, nextToScreen));
    }

    const Login = () => (
        <div className={cx('w40', 'item')} >
            <h4>ĐĂNG NHẬP</h4>
            <p>Nếu bạn có một tài khoản, xin vui lòng đăng nhập.</p>
            <h4>Tên đăng nhập</h4>
            <input className={cx('input', 'w70')} placeholder={'Nhập tên đăng nhập'} onChange={handleEmail} />
            <h4>Password</h4>
            <input className={cx('input', 'w70')} placeholder={'Nhập Password'} onChange={handlePassword} type={'password'}/>
            <p onClick={handleForget} className={cx('cursorP')} >Quên mật khẩu ?</p>

            <div className={cx('btn', 'w20')} onClick={loginAction} >ĐĂNG NHẬP</div>
        </div>
    )

    const ForgotPassword = () => (
        <div className={cx('w40', 'item')} >
            <h4>ĐĂNG NHẬP</h4>
            <p>Nếu bạn có một tài khoản, xin vui lòng đăng nhập.</p>

            <h4>Đặt lại mật khẩu</h4>
            <p>Chúng tôi sẽ gửi cho bạn một email để kích hoạt việc đặt lại mật khẩu.</p>

            <p>E-mail</p>
            <input className={cx('input', 'w70')} placeholder={'Nhập E-mail'} />

            <div className={cx('flex')} >
                <p className={cx('w10', 'btnForget')} >Gửi</p>
                <p className={cx('w10')} >hoặc</p>
                <p className={cx('w10', 'cldis', 'cursorP')} onClick={handleForget} >Huỷ</p>
            </div>
        </div>
    )

    const Register = () => (
        <div className={cx('w40', 'item')} >
            <h4>KHÁCH HÀNG MỚI</h4>
            <p>Đăng ký tài khoản để mua hàng nhanh hơn. Theo dõi đơn đặt hàng, vận chuyển. Cập nhật các tin tức sự kiện và các chương trình giảm giá của chúng tôi.</p>

            <div onClick={handleRegister} className={cx('btn', 'w20')} >
                ĐĂNG KÝ
            </div>
        </div>
    )

    return (
        <div className={cx('login')} >

            { showLogin ? Login() : ForgotPassword() }
            {Register()}

        </div>
    )
}

export default LoginScreen;
