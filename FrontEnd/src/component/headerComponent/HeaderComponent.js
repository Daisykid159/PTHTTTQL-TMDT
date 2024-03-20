import React from "react";

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomeScreen from "../../screen/home/HomeScreen";
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import NoPage from "../../screen/noPage/NoPage";
import LoginScreen from "../../screen/authen/LoginScreen";
import FooterComponent from "../footerComponent/FooterComponent";
import RegisterScreen from "../../screen/authen/RegisterScreen";

const cx = classNames.bind(styles);

function HeaderComponent () {

    return (
        <Router>
            <div id='header' className={cx('header')} >
                <ul className={cx('headerList')} >
                    <li className={cx('item')} >
                        <Link to="/" className='link'>Trang chủ</Link>
                    </li>

                    <li className={cx('item')} >
                        <Link to="/screen/authen/LoginScreen" className='link'>Đăng nhập</Link>
                    </li>

                    <li className={cx('item')} >
                        <Link to="pages/ThanhToan" className='link'>Thanh Toán</Link>
                    </li>
                </ul>
            </div>

            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/screen/authen/LoginScreen" element={<LoginScreen />} />
                <Route path="/screen/authen/RegisterScreen" element={<RegisterScreen />} />
                <Route path="*" element={<NoPage />} />
            </Routes>

            <div className={cx('footer')}>
                <FooterComponent />
            </div>
        </Router>
    )
}

export default HeaderComponent;
