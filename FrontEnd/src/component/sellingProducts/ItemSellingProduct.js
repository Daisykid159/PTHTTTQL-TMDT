import React from "react";
import classNames from "classnames/bind";
import styles from './SellingProducts.module.scss';
import {formatPrice} from "../../unitl";
import {useNavigate} from "react-router-dom";

const cx = classNames.bind(styles)

function ItemSellingProduct (props) {

    const navigate = useNavigate();

    const handleDetailProduct = () => {
        navigate('/screen/productDetail/DetailProduct');
    }

    return (
        <div className={cx('ItemSellingProduct', 'flex')} onClick={handleDetailProduct} >
            <img src={require(`../../assets/img/${props.data.img}`)} alt="Logo" className={cx('imgItem')} />
            <div className={cx('itemText')}>
                <p className={cx('itemName')}>{props.data.name}</p>
                <p className={cx('itemPrice')}>{formatPrice(props.data.price)}</p>
            </div>
        </div>
    )
}

export default React.memo(ItemSellingProduct)
