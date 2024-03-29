import React from "react";
import styles from './CartScreen.module.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function CartScreen (props) {
    return (
        <div className={cx('cart')}>
            Gio
        </div>
    )
}

export default CartScreen;
