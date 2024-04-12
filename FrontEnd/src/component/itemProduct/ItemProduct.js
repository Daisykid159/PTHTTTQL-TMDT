import React from "react";
import classNames from "classnames/bind";
import styles from './ItemProduct.module.scss';
import { useNavigate } from "react-router-dom";
import {formatPrice} from "../../unitl";

const cx = classNames.bind(styles);

function ItemProduct (props) {

    const navigate = useNavigate();

    const handleDetailProduct = () => {
        navigate('/screen/productDetail/DetailProduct');
    }

    return (
        <div className={cx('itemProduct')} onClick={handleDetailProduct} >
            <img src={require(`../../assets/img/${props.data.img}`)} className={cx('imgItem')} alt={'ảnh sản phẩm'}/>

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
