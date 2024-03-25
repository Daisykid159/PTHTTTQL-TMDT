import React from "react";
import classNames from "classnames/bind";
import styles from './CategoryHomeScreen.module.scss';
import ItemProduct from "../itemProduct/ItemProduct";
import SellingProducts from "../sellingProducts /SellingProducts";

const cx = classNames.bind(styles);

function CategoryHomeScreen (props) {
    return (
        <div className={cx('phone')}>
            <div className={cx('phoneHeader', 'flex')}>
                <div className={cx('titleH')}>
                    <h3 className={cx('titleP')}>{props.data.name}</h3>
                    <div className={cx('titleA')} />
                </div>

                <ul className={cx('listItem', 'flex')}>
                    {props.data.listType.map(item => (
                        <li className={cx('itemL')}>{item.name}</li>
                    ))}
                </ul>
            </div>

            <div className={cx('phoneList')}>
                <div style={{ width: '75%' }}>
                    <img src={require('../../assets/img/home_banner_phone.png')} alt="Logo" className={cx('imgBannerItem')} />
                    <div className={cx('listScroll')}>
                        <div className={cx('ListProduct')}>
                            {props.data.listProducts.map(item => (<ItemProduct data={item}/>))}
                        </div>
                    </div>
                </div>

                <div style={{ width: '24%' }}>
                    <SellingProducts data={props.data.listSellingProducts} />
                </div>
            </div>
        </div>
    )
}

export default React.memo(CategoryHomeScreen);
