import React, {useEffect, useState} from "react";
import styles from './ListProduct.modules.scss';
import classNames from "classnames/bind";
import CategoryList from "../../component/categoryList/CategoryList";
import ItemProduct from "../../component/itemProduct/ItemProduct";
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {actionGetListProducts} from "../../redux-store/action/actionProducts";

const cx = classNames.bind(styles);

function ListProduct(props) {
    const listProducts= useSelector(state => state.reducerProducts.listProducts);;

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    const [currentPageNumber, setCurrentPageNumber] = useState('0');
    const sortBy = 'name';
    const type = location.state?.type;
    const categoryId = location.state?.categoryId;

    useEffect(() => {
        console.log(type, categoryId)
        dispatch(actionGetListProducts(currentPageNumber, sortBy, type, categoryId))
    }, [type, categoryId]);

    return (
        <div className={cx('listProduct')}>
            <div className={cx('categoryLists')}>
                <CategoryList />
            </div>

            <div className={cx('listCategoryProduct')}>
                <div className={cx('categoryProductH')}>
                    <div className={cx('categoryProductHT')}>Điện thoại</div>
                </div>

                <div className={cx('flex')}>
                    {listProducts?.responses?.map((item, index) => (
                        <div className={cx('itemPro', (index % 3 !== 0 || index === 0) ? 'mr5pt' : null )}>
                            <ItemProduct data={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ListProduct;
