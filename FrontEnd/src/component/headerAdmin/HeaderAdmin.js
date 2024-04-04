import React from "react";
import styles from './HeaderAdmin.module.scss';
import classNames from "classnames/bind";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import NoPage from "../../screen/noPage/NoPage";
import HomeAdminScreen from "../../screen/Admin/home/HomeAdminScreen";
import {useDispatch} from "react-redux";
import {actionLogout} from "../../redux-store/action/actionAuthen";
import QLUserScreen from "../../screen/Admin/qlUser/QLUserScreen";
import QLHangHoaScreen from "../../screen/Admin/qlHangHoa/QLHangHoaScreen";
import QLKhoHangScreen from "../../screen/Admin/qlKhoHang/QLKhoHangScreen";

const cx = classNames.bind(styles);

function HeaderAdmin () {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(actionLogout());
    }

    return (
        <Router>
            <div id='headerAdmin' className={cx('headerAdmin')} >
                <ul className={cx('headerAdminList')} >
                    <Link to="/" className={cx('link')}>
                        <img src={require('../../assets/img/logoWeb.png')} alt="Logo" className={cx('logo')} />
                    </Link>

                    <li className={cx('item')} >
                        <Link to="/" className={cx('flex')}>
                            <i className={cx('bx bx-line-chart', 'iconArrowR')}></i>
                            <div className={cx('colorW')}>Tổng quan</div>
                        </Link>
                    </li>

                    <li className={cx('item')} >
                        <Link to="/screen/authen/LoginScreen" className={cx('flex')}>
                            <i className={cx('bx bx-cart-alt', 'iconArrowR')}></i>
                            <div className={cx('colorW')}>Đơn hàng</div>
                            <i className={cx('bx bx-chevron-right', 'iconArrowR')} />
                        </Link>
                    </li>

                    <li className={cx('item')} >
                        <Link to="/screen/authen/LoginScreen" className={cx('flex')}>
                            <i className={cx('bx bxs-truck', 'iconArrowR')}></i>
                            <div className={cx('colorW')}>Vận chuyển</div>
                            <i className={cx('bx bx-chevron-right', 'iconArrowR')} />
                        </Link>
                    </li>

                    <li className={cx('item')} >
                        <Link to="/admin/QLHangHoaScreen" className={cx('flex')}>
                            <i className={cx('bx bx-purchase-tag', 'iconArrowR')}></i>
                            <div className={cx('colorW')}>Sản phẩm</div>
                            <i className={cx('bx bx-chevron-right', 'iconArrowR')} />
                        </Link>
                    </li>

                    <li className={cx('item')} >
                        <Link to="/admin/QLUserScreen" className={cx('flex')}>
                            <i className={cx('bx bx-user-circle', 'iconArrowR')}></i>
                            <div className={cx('colorW')}>Khách hàng</div>
                            <i className={cx('bx bx-chevron-right', 'iconArrowR')} />
                        </Link>
                    </li>

                    <li className={cx('item')} >
                        <Link to="/admin/QLKhoHangScreen" className={cx('flex')}>
                            <i className={cx('bx bx-archive-out', 'iconArrowR')}></i>
                            <div className={cx('colorW')}>Quản lý tồn kho</div>
                            <i className={cx('bx bx-chevron-right', 'iconArrowR')} />
                        </Link>
                    </li>

                    <li className={cx('item')} >
                        <Link to="/screen/authen/LoginScreen" className={cx('flex')}>
                            <i className={cx('bx bx-pie-chart-alt-2', 'iconArrowR')}></i>
                            <div className={cx('colorW')}>Báo cáo</div>
                        </Link>
                    </li>

                    <li className={cx('item')} onClick={handleLogout}>
                        <Link to="/" className={cx('flex')}>
                            <i className={cx('bx bx-log-out', 'iconArrowR')}></i>
                            <div className={cx('colorW')}>Thoát</div>
                        </Link>
                    </li>
                </ul>
            </div>

            <Routes>
                <Route path="/" element={<HomeAdminScreen />} />
                <Route path="/admin/QLUserScreen" element={<QLUserScreen />} />
                <Route path="/admin/QLHangHoaScreen" element={<QLHangHoaScreen />} />
                <Route path="/admin/QLKhoHangScreen" element={<QLKhoHangScreen />} />
                <Route path="*" element={<NoPage />} />
            </Routes>

        </Router>
    )
}

export default HeaderAdmin;
