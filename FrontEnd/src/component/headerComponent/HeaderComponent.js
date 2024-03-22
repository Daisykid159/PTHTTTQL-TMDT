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
                    <li className={cx('logoItem')} >
                        <Link to="/" className={cx('link')}>
                            <img src={require('../../assets/img/logoWeb.png')} alt="Logo" className={cx('logo')} />
                        </Link>

                        <div className={cx('listProduct')} >
                            <i className={cx('bx bx-menu', 'iconMenu')}></i>
                            <div className={cx('textList')}>TẤT CẢ DANH MỤC</div>
                        </div>
                    </li>

                    <li className={cx('search')} >
                        <input placeholder={'Tìm kiếm...'} className={cx('searchInput')} />
                        <div className={cx('searchIcon')} >
                            <i className={cx('bx bx-search', 'iconSearch')}></i>
                        </div>
                    </li>

                    <li className={cx('item')} >
                        <Link to="/screen/authen/LoginScreen" className={cx('login')}>
                            <div>
                                <p className={cx('textLogin', 'bold')} >Đăng nhâp</p>
                                <p className={cx('textLogin')} >Tài khoản & Đơn hàng</p>
                            </div>
                            <i className={cx('bx bxs-down-arrow', 'iconArrow')}></i>
                        </Link>
                    </li>

                    <li className={cx('header')} >
                        <Link to="pages/ThanhToan" className={cx('Cart')}>
                            <i className={cx('bx bx-cart', 'iconCart')}></i>
                            <p className={cx('numberCart')}>9</p>
                        </Link>
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
