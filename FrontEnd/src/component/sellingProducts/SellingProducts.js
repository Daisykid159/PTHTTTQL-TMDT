import React from "react";
import styles from './SellingProducts.module.scss';
import classNames from "classnames/bind";
import ItemSellingProduct from "./ItemSellingProduct";

const cx = classNames.bind(styles);

function SellingProducts (props) {

    return (
        <div className={cx('sellingProducts')}>
            <h2 className={cx('textHeader')}>SẢN PHẨM BÁN CHẠY</h2>

            <div className={cx('listItem')}>
                {props.data.map(item => (
                    <ItemSellingProduct data={item}/>
                ))}
            </div>
        </div>
    )
}

export default React.memo(SellingProducts)
