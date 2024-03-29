import React from "react";
import styles from './HeaderAdmin.module.scss';
import classNames from "classnames/bind";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import DropDownTree from "../droDownTreeH/DropDownTree";
import HomeScreen from "../../screen/home/HomeScreen";
import LoginScreen from "../../screen/authen/LoginScreen";
import RegisterScreen from "../../screen/authen/RegisterScreen";
import ListProduct from "../../screen/ListProduct/ListProduct";
import DetailProduct from "../../screen/productDetail/DetailProduct";
import CartScreen from "../../screen/cart/CartScreen";
import NoPage from "../../screen/noPage/NoPage";
import FooterComponent from "../footerComponent/FooterComponent";
import HomeAdminScreen from "../../screen/Admin/home/HomeAdminScreen";

const cx = classNames.bind(styles);

function HeaderAdmin () {
    return (
        <Router>
            <div id='headerAdmin' className={cx('headerAdmin')} >
                <ul className={cx('headerAdminList')} >
                    <li className={cx('item')} >
                        <Link to="/screen/authen/LoginScreen" className={cx('login')}>
                            <div className={cx('colorW')}>Tổng quan</div>
                        </Link>
                    </li>

                    <li className={cx('item')} >
                        <Link to="/screen/authen/LoginScreen" className={cx('login')}>
                            <div className={cx('colorW')}>Đơn hàng</div>
                        </Link>
                    </li>

                    <li className={cx('item')} >
                        <Link to="/screen/authen/LoginScreen" className={cx('login')}>
                            <div className={cx('colorW')}>Đăng nhâp</div>
                        </Link>
                    </li>

                    <li className={cx('item')} >
                        <Link to="/screen/authen/LoginScreen" className={cx('login')}>
                            <div className={cx('colorW')}>Đăng nhâp</div>
                        </Link>
                    </li>

                    <li className={cx('item')} >
                        <Link to="/screen/authen/LoginScreen" className={cx('login')}>
                            <div className={cx('colorW')}>Đăng nhâp</div>
                        </Link>
                    </li>

                    <li className={cx('item')} >
                        <Link to="/screen/authen/LoginScreen" className={cx('login')}>
                            <div className={cx('colorW')}>Đăng nhâp</div>
                        </Link>
                    </li>

                    <li className={cx('item')} >
                        <Link to="/screen/authen/LoginScreen" className={cx('login')}>
                            <div className={cx('colorW')}>Đăng nhâp</div>
                        </Link>
                    </li>

                    <li className={cx('item')} >
                        <Link to="/screen/authen/LoginScreen" className={cx('login')}>
                            <div className={cx('colorW')}>Đăng nhâp</div>
                        </Link>
                    </li>

                    <li className={cx('item')} >
                        <Link to="/screen/authen/LoginScreen" className={cx('login')}>
                            <div className={cx('colorW')}>Đăng nhâp</div>
                        </Link>
                    </li>

                </ul>
            </div>

            <Routes>
                <Route path="/" element={<HomeAdminScreen />} />
                <Route path="*" element={<NoPage />} />
            </Routes>

        </Router>
    )
}

export default HeaderAdmin;
