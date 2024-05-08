import React from "react";
import classNames from "classnames/bind";
import styles from "./HomeScreen.modules.scss";
import CategoryHomeScreen from "../../component/categoryHomeScreen/CategoryHomeScreen";

const cx = classNames.bind(styles);

function HomeScreen(params) {

    const listCategory = [
        {
            id: 1,
            name: 'Điện thoại',
            banner: 'home_banner_phone.png',
            listType: [
                {
                    id: 1,
                    name: "15 Series",
                },
                {
                    id: 2,
                    name: "14 Series",
                },
                {
                    id: 3,
                    name: "13 Series",
                },
                {
                    id: 4,
                    name: "12 Series",
                },
                {
                    id: 5,
                    name: "11 Series",
                }
            ],
            listProducts: [
                {
                    id: 1,
                    img: 'imgItemH.png',
                    name: 'Apple iPhone 15 Pro - 256GB - 99% Likenew',
                    price: 253000001,
                },
                {
                    id: 2,
                    img: 'imgItemH.png',
                    name: 'Apple iPhone 15 Pro - 256GB - 99% Likenew',
                    price: 253000002,
                },
                {
                    id: 3,
                    img: 'imgItemH.png',
                    name: 'Apple iPhone 15 Pro - 256GB - 99% Likenew',
                    price: 253000003,
                },
                {
                    id: 4,
                    img: 'imgItemH.png',
                    name: 'Apple iPhone 15 Pro - 256GB - 99% Likenew',
                    price: 253000004,
                },
                {
                    id: 5,
                    img: 'imgItemH.png',
                    name: 'Apple iPhone 15 Pro - 256GB - 99% Likenew',
                    price: 253000005,
                },
                {
                    id: 6,
                    img: 'imgItemH.png',
                    name: 'Apple iPhone 15 Pro - 256GB - 99% Likenew',
                    price: 253000006,
                },
            ],
            listSellingProducts: [
                {
                    id: 1,
                    img: 'imgItemH.png',
                    name: 'Apple iPhone 15 Pro - 256GB - 99% Likenew',
                    price: 25300000,
                },
                {
                    id: 2,
                    img: 'imgItemH.png',
                    name: 'Apple iPhone 15 Pro - 256GB - 99% Likenew',
                    price: 25300000,
                },
                {
                    id: 3,
                    img: 'imgItemH.png',
                    name: 'Apple iPhone 15 Pro - 256GB - 99% Likenew',
                    price: 25300000,
                },
                {
                    id: 4,
                    img: 'imgItemH.png',
                    name: 'Apple iPhone 15 Pro - 256GB - 99% Likenew',
                    price: 25300000,
                },
                {
                    id: 5,
                    img: 'imgItemH.png',
                    name: 'Apple iPhone 15 Pro - 256GB - 99% Likenew',
                    price: 25300000,
                },
                {
                    id: 6,
                    img: 'imgItemH.png',
                    name: 'Apple iPhone 15 Pro - 256GB - 99% Likenew',
                    price: 25300000,
                },
            ]
        },
        {
            id: 2,
            name: 'Điện thoại',
            banner: 'home_banner_phone.png',
            listType: [
                {
                    id: 1,
                    name: "15 Series",
                },
                {
                    id: 2,
                    name: "14 Series",
                },
                {
                    id: 3,
                    name: "13 Series",
                },
                {
                    id: 4,
                    name: "12 Series",
                },
                {
                    id: 5,
                    name: "11 Series",
                }
            ],
            listProducts: [
                {
                    id: 1,
                    img: 'imgItemH.png',
                    name: 'Apple iPhone 15 Pro - 256GB - 99% Likenew',
                    price: 25300000,
                },
                {
                    id: 2,
                    img: 'imgItemH.png',
                    name: 'Apple iPhone 15 Pro - 256GB - 99% Likenew',
                    price: 25300000,
                },
                {
                    id: 3,
                    img: 'imgItemH.png',
                    name: 'Apple iPhone 15 Pro - 256GB - 99% Likenew',
                    price: 25300000,
                },
                {
                    id: 4,
                    img: 'imgItemH.png',
                    name: 'Apple iPhone 15 Pro - 256GB - 99% Likenew',
                    price: 25300000,
                },
                {
                    id: 5,
                    img: 'imgItemH.png',
                    name: 'Apple iPhone 15 Pro - 256GB - 99% Likenew',
                    price: 25300000,
                },
                {
                    id: 6,
                    img: 'imgItemH.png',
                    name: 'Apple iPhone 15 Pro - 256GB - 99% Likenew',
                    price: 25300000,
                },
            ],
            listSellingProducts: [
                {
                    id: 1,
                    img: 'imgItemH.png',
                    name: 'Apple iPhone 15 Pro - 256GB - 99% Likenew',
                    price: 25300000,
                },
                {
                    id: 2,
                    img: 'imgItemH.png',
                    name: 'Apple iPhone 15 Pro - 256GB - 99% Likenew',
                    price: 25300000,
                },
                {
                    id: 3,
                    img: 'imgItemH.png',
                    name: 'Apple iPhone 15 Pro - 256GB - 99% Likenew',
                    price: 25300000,
                },
                {
                    id: 4,
                    img: 'imgItemH.png',
                    name: 'Apple iPhone 15 Pro - 256GB - 99% Likenew',
                    price: 25300000,
                },
                {
                    id: 5,
                    img: 'imgItemH.png',
                    name: 'Apple iPhone 15 Pro - 256GB - 99% Likenew',
                    price: 25300000,
                },
                {
                    id: 6,
                    img: 'imgItemH.png',
                    name: 'Apple iPhone 15 Pro - 256GB - 99% Likenew',
                    price: 25300000,
                },
            ]
        },
        {
            id: 3,
            name: 'Điện thoại',
            banner: 'home_banner_phone.png',
            listType: [
                {
                    id: 1,
                    name: "15 Series",
                },
                {
                    id: 2,
                    name: "14 Series",
                },
                {
                    id: 3,
                    name: "13 Series",
                },
                {
                    id: 4,
                    name: "12 Series",
                },
                {
                    id: 5,
                    name: "11 Series",
                }
            ],
            listProducts: [
                {
                    id: 1,
                    img: 'imgItemH.png',
                    name: 'Apple iPhone 15 Pro - 256GB - 99% Likenew',
                    price: 25300000,
                },
                {
                    id: 2,
                    img: 'imgItemH.png',
                    name: 'Apple iPhone 15 Pro - 256GB - 99% Likenew',
                    price: 25300000,
                },
                {
                    id: 3,
                    img: 'imgItemH.png',
                    name: 'Apple iPhone 15 Pro - 256GB - 99% Likenew',
                    price: 25300000,
                },
                {
                    id: 4,
                    img: 'imgItemH.png',
                    name: 'Apple iPhone 15 Pro - 256GB - 99% Likenew',
                    price: 25300000,
                },
                {
                    id: 5,
                    img: 'imgItemH.png',
                    name: 'Apple iPhone 15 Pro - 256GB - 99% Likenew',
                    price: 25300000,
                },
                {
                    id: 6,
                    img: 'imgItemH.png',
                    name: 'Apple iPhone 15 Pro - 256GB - 99% Likenew',
                    price: 25300000,
                },
            ],
            listSellingProducts: [
                {
                    id: 1,
                    img: 'imgItemH.png',
                    name: 'Apple iPhone 15 Pro - 256GB - 99% Likenew',
                    price: 25300000,
                },
                {
                    id: 2,
                    img: 'imgItemH.png',
                    name: 'Apple iPhone 15 Pro - 256GB - 99% Likenew',
                    price: 25300000,
                },
                {
                    id: 3,
                    img: 'imgItemH.png',
                    name: 'Apple iPhone 15 Pro - 256GB - 99% Likenew',
                    price: 25300000,
                },
                {
                    id: 4,
                    img: 'imgItemH.png',
                    name: 'Apple iPhone 15 Pro - 256GB - 99% Likenew',
                    price: 25300000,
                },
                {
                    id: 5,
                    img: 'imgItemH.png',
                    name: 'Apple iPhone 15 Pro - 256GB - 99% Likenew',
                    price: 25300000,
                },
                {
                    id: 6,
                    img: 'imgItemH.png',
                    name: 'Apple iPhone 15 Pro - 256GB - 99% Likenew',
                    price: 25300000,
                },
            ]
        }
    ]

    return (
        <div className={cx('home')}>
            <div>
                <img src={require('../../assets/img/banner_1.png')} alt="Logo" className={cx('imgBanner')} />
            </div>

            <div className={cx('category')}>
                {listCategory.map(item => (
                    <div className={cx('category')}>
                        <CategoryHomeScreen data={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomeScreen;
