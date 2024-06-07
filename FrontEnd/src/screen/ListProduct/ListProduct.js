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
    const listProducts = useSelector(state => state.reducerProducts.listProducts);
    const totalElements = useSelector(state => state.reducerProducts.totalElements);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    const [currentPageNumber, setCurrentPageNumber] = useState(0);
    const sortBy = 'name';
    const type = location.state?.type;
    const categoryId = location.state?.categoryId;

    const typeNameProduct = [
        {
            id: 1,
            nameListProducts: "Điện thoại",
        },
        {
            id: 2,
            nameListProducts: "Linh kiện",
        },
        {
            id: 3,
            nameListProducts: "Phụ kiện",
        }
    ]

    const handlePageBefor = () => {
        if(currentPageNumber > 0) {
            setCurrentPageNumber(currentPageNumber - 1)
        } else {
            setCurrentPageNumber(0);
        }
    }

    const handlePageAfter = () => {
        if((currentPageNumber + 1) < totalElements) {
            setCurrentPageNumber(currentPageNumber + 1)
        } else {
            setCurrentPageNumber(totalElements - 1)
        }
    }

    const handlePageInput = (e) => {
        const tmp = parseInt(e.target.value, 10);
        if(tmp > 0) {
            if(tmp <= totalElements) {
                setCurrentPageNumber(tmp)
            } else {
                setCurrentPageNumber(totalElements - 1)
            }
        } else {
            setCurrentPageNumber(0)
        }
    }

    useEffect(() => {
        dispatch(actionGetListProducts(currentPageNumber, sortBy, type, categoryId))
    }, [currentPageNumber])

    useEffect(() => {
        setCurrentPageNumber(0)
        dispatch(actionGetListProducts(0, sortBy, type, categoryId))
    }, [type, categoryId]);

    return (
        <div className={cx('listProduct')}>
            <div className={cx('categoryLists')}>
                <CategoryList />
            </div>

            <div className={cx('listCategoryProduct')}>
                <div className={cx('categoryProductH')}>
                    <div className={cx('categoryProductHT')}>{typeNameProduct[categoryId - 1].nameListProducts}</div>
                </div>

                <div className={cx('flex')}>
                    {listProducts?.map((item, index) => (
                        <div className={cx('itemPro', ((index + +1) % 4 !== 0) ? 'mr5pt' : '' )}>
                            <ItemProduct data={item} />
                        </div>
                    ))}
                </div>

                { totalElements > 1 && (<div className={cx('flex', 'center', 'page')}>
                    <div className={cx("iconChevrons")} onClick={handlePageBefor}>
                        <i className='bx bx-chevrons-left'></i>
                    </div>
                    <div>
                        <input
                            className={cx('inputPage')}
                            value={currentPageNumber + 1}
                            onChange={handlePageInput}
                        />
                        / {totalElements}
                    </div>
                    <div className={cx("iconChevrons")} onClick={handlePageAfter}>
                        <i className='bx bx-chevrons-right'></i>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default ListProduct;
