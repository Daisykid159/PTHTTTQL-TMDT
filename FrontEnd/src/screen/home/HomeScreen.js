import React, {useEffect} from "react";
import classNames from "classnames/bind";
import styles from "./HomeScreen.modules.scss";
import CategoryHomeScreen from "../../component/categoryHomeScreen/CategoryHomeScreen";
import {useDispatch, useSelector} from "react-redux";
import {actionLoginGoShip} from "../../redux-store/action/actionPay";
import {actionGetListProducts} from "../../redux-store/action/actionProducts";
import {actionGetListCart} from "../../redux-store/action/actionCart";

const cx = classNames.bind(styles);

function HomeScreen(params) {

    const listCategory = [
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
    const listProducts1 = useSelector(state => state.reducerProducts.listProducts1);
    const listProducts2 = useSelector(state => state.reducerProducts.listProducts3);
    const listProducts3 = useSelector(state => state.reducerProducts.listProducts3);
    const dispatch = useDispatch();
    const token = useSelector(state => state.reducerAuth.token);
    const decoded = useSelector(state => state.reducerAuth.decoded);

    useEffect(() => {
        dispatch(actionGetListProducts(0, 'name', null, 1));
        dispatch(actionGetListProducts(0, 'name', null, 2));
        dispatch(actionGetListProducts(0, 'name', null, 3));
    }, [])

    useEffect(() => {
        dispatch(actionLoginGoShip());
    }, []);

    useEffect(() => {
        if(token && decoded.sub) dispatch(actionGetListCart(token, decoded.sub))
    }, [])

    return (
        <div className={cx('home')}>
            <div>
                <img src={require('../../assets/img/banner_1.png')} alt="Logo" className={cx('imgBanner')} />
            </div>

            <div className={cx('category')}>
                {listCategory.map((item, index) => {
                    switch (index + 1) {
                        case 1:
                            return (
                                <div className={cx('category')}>
                                    <CategoryHomeScreen data={item} dataListProduct={listProducts1} categoryId={index} />
                                </div>
                            )

                        case 2:
                            return (
                                <div className={cx('category')}>
                                    <CategoryHomeScreen data={item} dataListProduct={listProducts2} categoryId={index} />
                                </div>
                            )

                        case 3:
                            return (
                                <div className={cx('category')}>
                                    <CategoryHomeScreen data={item} dataListProduct={listProducts3} categoryId={index} />
                                </div>
                            )
                    }
                })}
            </div>
        </div>
    )
}

export default HomeScreen;
