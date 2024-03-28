import React from "react";
import classNames from "classnames/bind";
import styles from './ItemProduct.module.scss';

const cx = classNames.bind(styles);

function ItemProduct (props) {

    const formatPrice = (price) => {
        const formattedNumber = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return `${formattedNumber} đ`;
    }

    return (
        <div className={cx('itemProduct')} >
            <img src={require(`../../assets/img/${props.data.img}`)} className={cx('imgItem')} />

            <p className={cx('itemName')}>{props.data.name}</p>
            <p className={cx('itemPrice')}>{formatPrice(props.data.price)}</p>

            <div className={cx('active', 'selectSp')}>
                <i className={cx('bx bx-cart-alt', 'cartIcon')}></i>
                <p className={cx('textSelectSp')}>Chọn sản phẩm</p>
            </div>
        </div>
    )
}

export default React.memo(ItemProduct);
