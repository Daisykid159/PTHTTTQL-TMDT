import React from "react";
import styles from './CategoryList.modules.scss';
import classNames from "classnames/bind";
import {useNavigate} from "react-router-dom";

const cx = classNames.bind(styles);

function CategoryList(props) {

    const navigate = useNavigate();

    const handleToCategoryScreen = (urlScreen) => {
        navigate(urlScreen)
    }

    return (
        <div className={cx('CategoryList')}>
            <div className={cx('categoryHeader')}>DANH MỤC</div>

            <div className={cx('categoryList')} >
                <div className={cx('categoryItem', 'categoryItemH')} >
                    BẢO HÀNH 12 THÁNG 1 ĐỔI 1
                </div>

                <div
                    className={cx('categoryItem', 'active')}
                    onClick={() => handleToCategoryScreen('/screen/categoryLists/ShoppingGuideScreen')}
                >
                    <i className={cx('bx bx-cart-add', 'icon')}></i>
                    Hướng dẫn mua hàng
                </div>

                <div
                    className={cx('categoryItem', 'active')}
                    onClick={() => handleToCategoryScreen('/screen/categoryLists/ShippingPolicyScreen')}
                >
                    <i className={cx('bx bxs-car', 'icon')}></i>
                    Chính sách vận chuyển
                </div>

                <div
                    className={cx('categoryItem', 'active')}
                    onClick={() => handleToCategoryScreen('/screen/categoryLists/WarrantyPolicyScreen')}
                >
                    <i className={cx('bx bxs-cog', 'icon')}></i>
                    Chính sách bảo hành
                </div>

                <div
                    className={cx('categoryItem', 'active')}
                    onClick={() => handleToCategoryScreen('/screen/categoryLists/ExchangePolicyScreen')}
                >
                    <i className={cx('bx bx-refresh', 'icon')}></i>
                    Chính sách đổi hàng
                </div>

                <div
                    className={cx('categoryItem', 'active')}
                    onClick={() => handleToCategoryScreen('/screen/categoryLists/CommitmentToQualityScreen')}
                >
                    <i className={cx('bx bx-check-shield', 'icon')}></i>
                    Cam kết chết lượng
                </div>
            </div>
        </div>
    )
}

export default CategoryList;
