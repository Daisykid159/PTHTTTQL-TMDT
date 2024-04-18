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
import NotificationAdminScreen from "../../screen/Admin/notificationAdmin/NotificationAdminScreen";
import BillAdminScreen from "../../screen/Admin/bill/BillAdminScreen";
import DetailBillAdminScreen from "../../screen/Admin/detailBill/DetailBillAdminScreen";
import EditProductKhoHangAdminScreen from "../../screen/Admin/editProductKhoHang/EditProductKhoHangAdminScreen";
import DetailUserAdminScreen from "../../screen/Admin/detailUserAdmin/DetailUserAdminScreen";

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
                        <Link to="/admin/BillAdminScreen" className={cx('flex')}>
                            <i className={cx('bx bx-cart-alt', 'iconArrowR')}></i>
                            <div className={cx('colorW')}>Đơn hàng</div>
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
                        <Link to="/admin/NotificationAdminScreen" className={cx('flex')}>
                            <i className={cx('bx bx-bell', 'iconArrowR')}></i>
                            <div className={cx('colorW')}>Thông báo</div>
                            <div className={cx('numberNotification')}>( 10 )</div>
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
                <Route path="/admin/NotificationAdminScreen" element={<NotificationAdminScreen />} />
                <Route path="/admin/BillAdminScreen" element={<BillAdminScreen />} />
                <Route path="/admin/DetailBillAdminScreen/:id" element={<DetailBillAdminScreen />} />
                <Route path="/admin/EditProductKhoHangAdminScreen/:id" element={<EditProductKhoHangAdminScreen />} />
                <Route path="/admin/DetailUserAdminScreen/:id" element={<DetailUserAdminScreen />} />
                <Route path="*" element={<NoPage />} />
            </Routes>

        </Router>
    )
}

export default HeaderAdmin;
