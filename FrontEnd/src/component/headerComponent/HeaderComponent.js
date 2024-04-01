import React, {useState} from "react";

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
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
import {useSelector} from "react-redux";
import UserInformationScreen from "../../screen/UserInformationScreen/UserInformationScreen";
import AddressInformationScreen from "../../screen/UserInformationScreen/AddressInformationScreen";

const cx = classNames.bind(styles);

function HeaderComponent () {

    const dataListAll = [
        {
            id: 1,
            icon: 'bx bx-mobile-alt',
            nameListProduct: 'Điện thoại',
            listItem: [
                {
                    id: 1,
                    nameItem: 'Iphone 15',
                },
                {
                    id: 2,
                    nameItem: 'Iphone 14',
                },
                {
                    id: 3,
                    nameItem: 'Iphone 13',
                },
                {
                    id: 4,
                    nameItem: 'Iphone 12',
                }
            ]
        },
        {
            id: 1,
            icon: 'bx bx-mobile-alt',
            nameListProduct: 'Điện thoại',
            listItem: [
                {
                    id: 1,
                    nameItem: 'Iphone 15',
                },
                {
                    id: 2,
                    nameItem: 'Iphone 14',
                },
                {
                    id: 3,
                    nameItem: 'Iphone 13',
                },
                {
                    id: 4,
                    nameItem: 'Iphone 12',
                }
            ]
        },
        {
            id: 1,
            icon: 'bx bx-mobile-alt',
            nameListProduct: 'Điện thoại',
            listItem: [
                {
                    id: 1,
                    nameItem: 'Iphone 15',
                },
                {
                    id: 2,
                    nameItem: 'Iphone 14',
                },
                {
                    id: 3,
                    nameItem: 'Iphone 13',
                },
                {
                    id: 4,
                    nameItem: 'Iphone 12',
                }
            ]
        },
    ];

    const [showListProduct, setShowListProduct] = useState(false);
    const [login, setLogin] = useState(false);
    const listCart = useSelector(state => state.reducerCart.listCart);

    const handleLogout = () => {
        setLogin(false);
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
                                        {dataListAll.map(item => (<DropDownTree item={item} />))}
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

                    {login ? (
                        <li className={cx('item')} >
                            <div className={cx('login')}>
                                <div className={cx('mr10')}>
                                    <p className={cx('textLogin', 'bold')} >Tài khoản của tôi</p>
                                    <p className={cx('textLogin')} onClick={handleLogout}>Thoát</p>
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
                            <p className={cx('numberCart')}>{listCart.length}</p>
                        </Link>
                    </li>
                </ul>
            </div>

            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/screen/authen/LoginScreen" element={<LoginScreen />} />
                <Route path="/screen/authen/RegisterScreen" element={<RegisterScreen />} />
                <Route path="/screen/ListProduct/ListProduct" element={<ListProduct />} />
                <Route path="/screen/productDetail/DetailProduct" element={<DetailProduct />} />
                <Route path="/screen/cart/CartScreen" element={<CartScreen />} />
                <Route path="/screen/UserInformationScreen/UserInformationScreen" element={<UserInformationScreen />} />
                <Route path="/screen/UserInformationScreen/AddressInformationScreen" element={<AddressInformationScreen />} />
                <Route path="*" element={<NoPage />} />
            </Routes>

            <div className={cx('footer')}>
                <FooterComponent />
            </div>
        </Router>
    )
}

export default HeaderComponent;
