import React, {useEffect, useState} from "react";
import styles from './FakeAPIPay.module.scss';
import classNames from "classnames/bind";
import listProduct from "../../ListProduct/ListProduct";
import {useDispatch, useSelector} from "react-redux";
import {actionGetAllSkuById} from "../../../redux-store/action/actionFakeApi";

const cx = classNames.bind(styles);

function ItemProductFakeApi(props) {

    const dispatch = useDispatch();
    const token = useSelector(state => state.reducerAuth.token);
    const decoded = useSelector(state => state.reducerAuth.decoded);

    const listDataProductColor = useSelector(state => state.reducerFakeApi.listDataProductColor);

    const [product, setProduct] = useState(listDataProductColor[0]);
    const [nameProduct, setNameProduct] = useState();
    const [colorProduct, setColorProduct] = useState();
    const [quantityProduct, setQuantityProduct] = useState(1);
    const [idProduct, setIdProduct] = useState(null);

    useEffect(() => {
        if(idProduct) dispatch(actionGetAllSkuById(token, decoded.sub, idProduct))
    }, [idProduct]);

    const handleAddProduct = () => {
        // Spu : san pham
        // Sku : mau

        console.log(listDataProductColor);

        const listTmp = props.listProduct || [];
        let check = false;
        listTmp?.map((item, index) => {
            if(item.idSku === product.id && item.idSpu === idProduct){
                check = item.quantity + quantityProduct > product.quantity;
            }
        })

        if(check) {
            alert("Số lượng không đủ!")
            setQuantityProduct(1);
        } else {
            props.addProduct({
                "idSku": product.id || 1,
                "idSpu": idProduct,
                "productSpu_name": product.productSpu.name,
                "productSku_name": product.color,
                "quantity": quantityProduct,
                "price": product.price
            })
        }
    }

    const handleSelectProduct = (e) => {
        setIdProduct(props.listDataProduct[e.target.value].id);
        setNameProduct(e.target.label);
    }

    const handleSelectProductColor = (e) => {
        setColorProduct(e.target.label);
        setProduct(listDataProductColor[e.target.value]);
    }

    const handleQuantityProduct = (e) => {
        setQuantityProduct(e.target.value);
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
                        <option label={item.name}>{index}</option>
                    ))}
                </select>
            </div>

            <div className={cx('w20pt')}>
                <div>Màu sản phẩm</div>
                <select
                    className={cx('selectOption', 'w100pt')}
                    value={colorProduct}
                    onChange={handleSelectProductColor}
                >
                    {listDataProductColor.map((item, index) => (
                        <option label={item.color}>{index}</option>
                    ))}
                </select>
            </div>

            <div className={cx('w20pt')}>
                <div>Số lượng</div>
                <input
                    className={cx('selectOption', 'w100pt')}
                    value={quantityProduct}
                    type={'number'}
                    onChange={handleQuantityProduct}
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
