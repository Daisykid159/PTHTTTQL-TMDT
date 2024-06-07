import React, {useEffect, useState} from "react";

import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import HomeScreen from "../../screen/home/HomeScreen";
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import NoPage from "../../screen/noPage/NoPage";
import LoginScreen from "../../screen/authen/LoginScreen";
import FooterComponent from "../footerComponent/FooterComponent";
import RegisterScreen from "../../screen/authen/RegisterScreen";
import DropDownTree from "../droDownTreeH/DropDownTree";
import ListProduct from "../../screen/ListProduct/ListProduct";
import DetailProduct from "../../screen/productDetail/DetailProduct";
import CartScreen from "../../screen/cart/CartScreen";
import {useDispatch, useSelector} from "react-redux";
import UserInformationScreen from "../../screen/UserInformationScreen/UserInformationScreen";
import AddressInformationScreen from "../../screen/UserInformationScreen/AddressInformationScreen";
import {actionLogout} from "../../redux-store/action/actionAuthen";
import PayScreen from "../../screen/pay/PayScreen";
import ShoppingGuideScreen from "../../screen/categoryLists/ShoppingGuideScreen";
import CommitmentToQualityScreen from "../../screen/categoryLists/CommitmentToQualityScreen";
import ExchangePolicyScreen from "../../screen/categoryLists/ExchangePolicyScreen";
import WarrantyPolicyScreen from "../../screen/categoryLists/WarrantyPolicyScreen";
import ShippingPolicyScreen from "../../screen/categoryLists/ShippingPolicyScreen";

const cx = classNames.bind(styles);

function HeaderComponent () {

    const dataListAll = [
        {
            id: 1,
            nameListProduct: 'Điện thoại',
            listItem: [
                {
                    "type": "IPhone 11",
                    "categories": 1,
                    "spuCustom": "IPhone 11|IPhone 11 Pro|IPhone 11 ProMax"
                },
                {
                    "type": "IPhone 12",
                    "categories": 1,
                    "spuCustom": "IPhone 12 Mini|IPhone 12 |IPhone 12 Pro|IPhone 12 ProMax"
                },
                {
                    "type": "IPhone 13",
                    "categories": 1,
                    "spuCustom": "IPhone 13|IPhone 13 Pro|IPhone 13 Pro Max"
                },
                {
                    "type": "IPhone 14",
                    "categories": 1,
                    "spuCustom": "IPhone 14|IPhone 14 Plus|IPhone 14 Pro|IPhone 14 Pro Max"
                },
                {
                    "type": "IPhone 15",
                    "categories": 1,
                    "spuCustom": "IPhone 15|IPhone 15 Plus|IPhone 15 Pro|IPhone 15 Pro Max"
                },
                {
                    "type": "IPhone 5",
                    "categories": 1,
                    "spuCustom": "IPhone SE"
                },
                {
                    "type": "IPhone 8",
                    "categories": 1,
                    "spuCustom": "IPhone 8|IPhone 8 Plus"
                },
                {
                    "type": "IPhone 10",
                    "categories": 1,
                    "spuCustom": "IPhone XS|IPhone XR|IPhone XSMax"
                }
            ]
        },
        {
            id: 2,
            icon: 'bx bx-mobile-alt',
            nameListProduct: 'Linh kiện',
            listItem: []
        },
        {
            id: 3,
            icon: 'bx bx-mobile-alt',
            nameListProduct: 'Phụ kiện',
            listItem: [
                {
                    "type": "Củ sạc Iphone/Ipad",
                    "categories": 3,
                    "spuCustom": "Sạc nhanh IPhone 20W|Sạc IPhone 5W"
                },
                {
                    "type": "Tai nghe",
                    "categories": 3,
                    "spuCustom": "Tai nghe Lightning Iphone"
                },
                {
                    "type": "Cáp sạc Iphone/Ipad",
                    "categories": 3,
                    "spuCustom": "Cáp sạc nhanh Type-C PD|Cáp Type C - Type C 1m|Cap IPhone|Cáp dù sạc nhanh Type-C PD iMac"
                }
            ]
        },
    ];

    const [showListProduct, setShowListProduct] = useState(false);
    const isLogin = useSelector(state => state.reducerAuth.isLogin);
    const quantityCart = useSelector(state => state.reducerCart.quantityCart);

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(actionLogout());
    }

    const handleShowProduct = () => {
        setShowListProduct(!showListProduct);
    }

    return (
        <Router>
            <div id='header' className={cx('header')} >
                <ul className={cx('headerList')} >
                    <li className={cx('logoItem')} >
                        <Link to="/" className={cx('link')}>
                            <img src={require('../../assets/img/logoWeb.png')} alt="Logo" className={cx('logo')} />
                        </Link>

                        <div onMouseEnter={handleShowProduct} onMouseLeave={handleShowProduct} >
                            <div className={cx('listProduct')} >
                                <i className={cx('bx bx-menu', 'iconMenu')}></i>
                                <div className={cx('textList')}>TẤT CẢ DANH MỤC</div>
                            </div>


                            {showListProduct && (
                                <div>
                                    <div className={cx('space')}></div>
                                    <div className={cx('modalListItem')}>
                                        <DropDownTree dataListAll={dataListAll} />
                                    </div>
                                </div>
                            )}
                        </div>
                    </li>

                    <li className={cx('search')} >
                        <input placeholder={'Tìm kiếm...'} className={cx('searchInput')} />
                        <div className={cx('searchIcon')} >
                            <i className={cx('bx bx-search', 'iconSearch')}></i>
                        </div>
                    </li>

                    {isLogin ? (
                        <li className={cx('item')} >
                            <div className={cx('login')}>
                                <div className={cx('mr10')}>
                                    <Link to={'/screen/UserInformationScreen/UserInformationScreen'} className={cx('textLogin', 'bold')} >Tài khoản của tôi</Link>
                                    <div>
                                        <Link to={'/screen/authen/LoginScreen'} className={cx('textLogin')} onClick={handleLogout}>Thoát</Link>
                                    </div>
                                </div>
                                <i className={cx('bx bxs-down-arrow', 'iconArrow')}></i>
                            </div>
                        </li>
                    ) : (
                        <li className={cx('item')} >
                            <Link to="/screen/authen/LoginScreen" className={cx('login')}>
                                <div>
                                    <p className={cx('textLogin', 'bold')} >Đăng nhâp</p>
                                    <p className={cx('textLogin')} >Tài khoản & Đơn hàng</p>
                                </div>
                                <i className={cx('bx bxs-down-arrow', 'iconArrow')}></i>
                            </Link>
                        </li>
                    )}

                    <li className={cx('item')} >
                        <Link to="/screen/cart/CartScreen" className={cx('Cart')}>
                            <i className={cx('bx bx-cart', 'iconCart')}></i>
                            <p className={cx('numberCart')}>{quantityCart}</p>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className={cx('screen')}>
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/screen/authen/LoginScreen" element={<LoginScreen />} />
                    <Route path="/screen/authen/RegisterScreen" element={<RegisterScreen />} />
                    <Route path="/screen/ListProduct/ListProduct" element={<ListProduct />} />
                    <Route path="/screen/productDetail/DetailProduct" element={<DetailProduct />} />
                    <Route path="/screen/cart/CartScreen" element={<CartScreen />} />
                    <Route path="/screen/UserInformationScreen/UserInformationScreen" element={<UserInformationScreen />} />
                    <Route path="/screen/UserInformationScreen/AddressInformationScreen" element={<AddressInformationScreen />} />
                    <Route path="/screen/pay/PayScreen" element={<PayScreen />} />
                    <Route path="/screen/categoryLists/ShoppingGuideScreen" element={<ShoppingGuideScreen />} />
                    <Route path="/screen/categoryLists/CommitmentToQualityScreen" element={<CommitmentToQualityScreen />} />
                    <Route path="/screen/categoryLists/ExchangePolicyScreen" element={<ExchangePolicyScreen />} />
                    <Route path="/screen/categoryLists/WarrantyPolicyScreen" element={<WarrantyPolicyScreen />} />
                    <Route path="/screen/categoryLists/ShippingPolicyScreen" element={<ShippingPolicyScreen />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </div>

            <div className={cx('footer')}>
                <FooterComponent />
            </div>
        </Router>
    )
}

export default HeaderComponent;
