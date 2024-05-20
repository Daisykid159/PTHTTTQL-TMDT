import React, {useEffect, useState} from "react";
import styles from './FakeAPIPay.module.scss';
import classNames from "classnames/bind";
import listProduct from "../../ListProduct/ListProduct";

const cx = classNames.bind(styles);

function ItemProductFakeApi(props) {

    const [product, setProduct] = useState(null);
    const [nameProduct, setNameProduct] = useState();
    const [colorProduct, setColorProduct] = useState();
    const [quantityProduct, setQuantityProduct] = useState(1);

    useEffect(() => {
        setNameProduct(props.listDataProduct[0].productSpu_name)
        setColorProduct(props.listDataProduct[0].productSku_name);
        setProduct(props.listDataProduct[0]);
    }, []);

    const handleAddProduct = () => {
        props.addProduct({
            "productSpu_name": product.productSpu_name,
            "productSku_name": colorProduct,
            "src": product.src,
            "quantity": quantityProduct,
            "price": product.price
        })
    }

    const handleSelectProduct = (e) => {
        setNameProduct(e.target.label);
        setProduct(props.listDataProduct[e.target.value])
    }

    return (
        <div className={cx('flex', 'center', 'spbw')}>
            <div className={cx('w20pt')}>
                <div>Tên sản phẩm</div>
                <select
                    className={cx('selectOption', 'w100pt')}
                    value={nameProduct}
                    onChange={handleSelectProduct}
                >
                    {props.listDataProduct.map((item, index) => (
                        <option label={item.productSpu_name}>{index}</option>
                    ))}
                </select>
            </div>

            <div className={cx('w20pt')}>
                <div>Màu sản phẩm</div>
                <select
                    className={cx('selectOption', 'w100pt')}
                    value={colorProduct}
                    onChange={(e) => setColorProduct(e.target.value)}
                >
                    {props.listDataProduct.map(item => (
                        <option>{item.productSku_name}</option>
                    ))}
                </select>
            </div>

            <div className={cx('w20pt')}>
                <div>Số lượng</div>
                <input
                    className={cx('selectOption', 'w100pt')}
                    value={quantityProduct}
                    type={'number'}
                    onChange={e => setQuantityProduct(e.target.value)}
                />
            </div>

            <div>
                <button
                    className={cx('btlAddProduct')}
                    onClick={handleAddProduct}
                >
                    Thêm sản phẩm
                </button>
            </div>
        </div>
    )
}

export default ItemProductFakeApi;
