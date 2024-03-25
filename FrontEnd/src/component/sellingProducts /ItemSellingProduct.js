import React from "react";
import classNames from "classnames/bind";
import styles from './SellingProducts.module.scss';

const cx = classNames.bind(styles)

function ItemSellingProduct (props) {

    const formatPrice = (price) => {
        const formattedNumber = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return `${formattedNumber} đ`;
    }

    return (
        <div className={cx('ItemSellingProduct', 'flex')}>
            <img src={require(`../../assets/img/${props.data.img}`)} alt="Logo" className={cx('imgItem')} />
            <div className={cx('itemText')}>
                <p className={cx('itemName')}>{props.data.name}</p>
                <p className={cx('itemPrice')}>{formatPrice(props.data.price)}</p>
            </div>
        </div>
    )
}

export default React.memo(ItemSellingProduct)
