import React, {useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import styles from './CategoryHomeScreen.module.scss';
import ItemProduct from "../itemProduct/ItemProduct";
import SellingProducts from "../sellingProducts/SellingProducts";
import classNames from "classnames/bind";
import {useDispatch, useSelector} from "react-redux";
import {actionGetListProducts} from "../../redux-store/action/actionProducts";

const cx = classNames.bind(styles);

function CategoryHomeScreen (props) {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleList = () => {
        navigate('/screen/ListProduct/ListProduct');
    }

    const listProducts = props.dataListProduct;

    return (
        <div className={cx('phone')}>
            <div className={cx('phoneHeader', 'flex')} >
                <div className={cx('titleH')} onClick={handleList} >
                    <h3 className={cx('titleP')}>{props.data.nameListProduct}</h3>
                    <div className={cx('titleA')} />
                </div>

                <ul className={cx('listItem', 'flex')}>
                    {props.data.listType?.map(item => (
                        <li className={cx('itemL')} onClick={handleList} >{item.name}</li>
                    ))}
                </ul>
            </div>

            <div className={cx('phoneList')}>
                <div style={{ width: '75%' }}>
                    <div onClick={handleList}>
                        <img src={require(`../../assets/img/home_banner-${props.categoryId + 1}.png`)} alt="imgBannerItem" className={cx('imgBannerItem')} />
                    </div>

                    <div className={cx('listScroll')}>
                        <div className={cx('ListProduct')}>
                            {listProducts?.map(item => (
                                <div className={cx('itemItem')} >
                                    <ItemProduct data={item}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div style={{ width: '24%' }}>
                    <SellingProducts data={listProducts} />
                </div>
            </div>
        </div>
    )
}

export default React.memo(CategoryHomeScreen);
