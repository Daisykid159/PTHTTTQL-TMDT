import React, {useEffect, useState} from "react";
import styles from './EditProductKhoHangAdminScreen.module.scss';
import classNames from "classnames/bind";
import {useParams} from "react-router-dom";
import moment from "moment";
import { useLocation } from 'react-router-dom';
import {formatPrice} from "../../../unitl";

const cx = classNames.bind(styles);

function EditProductKhoHangAdminScreen (props) {

    const params = useParams();

    const [selectedImg, setSelectedImg] = useState();
    const [nameProduct, setNameProduct] = useState();
    const [colorProduct, setColorProduct] = useState();
    const [typeProduct, setTypeProduct] = useState();
    const [priceImportProduct, setPriceImportProduct] = useState();
    const [priceSellProduct, setPriceSellProduct] = useState();
    const [quantityImportProduct, setQuantityImportProduct] = useState();
    const [dateImportProduct, setDateImportProduct] = useState();

    const location = useLocation();
    const editSanPham = location.state?.editSanPham;

    useEffect(() => {
        const dateNow = new Date();
        setDateImportProduct(moment(dateNow).format('YYYY-MM-DDTHH:mm:ss'));
    }, []);

    const handleNameProduct = (e) => {
        setNameProduct(e.target.value);
    }

    const handleColorProduct = (e) => {
        setColorProduct(e.target.value);
    }

    const handleTypeProduct = (e) => {
        setTypeProduct(e.target.value);
    }

    const handlePriceImportProduct = (e) => {
        setPriceImportProduct(e.target.value);
    }

    const handleQuantityImportProduct = (e) => {
        setQuantityImportProduct(e.target.value);
    }

    const handlePriceSellProduct = (e) => {
        setPriceSellProduct(e.target.value);
    }

    const handleDateImportProduct = (e) => {
        const date = new Date(e.target.value);
        setDateImportProduct(moment(date).format('YYYY-MM-DDTHH:mm:ss'));
    }

    console.log(dateImportProduct)

    const handleSelectImg = (e) => {
        setSelectedImg(e.target.files[0]);
    }

    return (
        <div className={cx('EditProductKhoHangAdminScreen')}>
            <div className={cx('textHeader', 'bold')}>CHỈNH SỬA THÔNG TIN SẢN PHẨM</div>

            <div className={cx('flex')}>
                <div className={cx('w50pt')}>
                    <div className={cx('itemInput')}>
                        <div className={cx('textInput')}>Tên sản phẩm</div>
                        <input className={cx('input')} onChange={handleNameProduct} value={nameProduct} />
                    </div>

                    <div className={cx('itemInput')}>
                        <div className={cx('textInput')}>Màu sản phẩm</div>
                        <input className={cx('input')} onChange={handleColorProduct} value={colorProduct} />
                    </div>

                    <div className={cx('itemInput')}>
                        <div className={cx('textInput')}>Loại sản phẩm</div>
                        <input className={cx('input')} onChange={handleTypeProduct} value={typeProduct} />
                    </div>

                    <div className={cx('select', 'selectImg', 'itemInput')}>
                        <div className={cx('selectInput')}>
                            <div className={cx('textInput')}>Ảnh sản phẩm</div>
                            <input className={cx('inputImg')} type={'file'} onChange={handleSelectImg} />
                        </div>

                        {selectedImg && (
                            <div>
                                <img className={cx('imgSelected')} src={URL.createObjectURL(selectedImg)} alt="Ảnh sản phẩm được chọn" />
                            </div>
                        )}
                    </div>
                </div>

                <div className={cx('w50pt')}>
                    {!editSanPham && (<div className={cx('itemInput')}>
                        <div className={cx('textInput')}>Giá nhập sản phẩm (đ)</div>
                        <input className={cx('input')} type={'number'} onChange={handlePriceImportProduct}
                               value={priceImportProduct}/>
                    </div>)}

                    {!editSanPham && (<div className={cx('itemInput')}>
                        <div className={cx('textInput')}>Số lượng nhập</div>
                        <input className={cx('input')} type={'number'} onChange={handleQuantityImportProduct}
                               value={quantityImportProduct}/>
                    </div>)}

                    {editSanPham && (
                        <div className={cx('itemInput')}>
                            <div className={cx('textInput')}>Giá bán sản phẩm (đ)</div>
                            <input className={cx('input')} type={'number'} onChange={handlePriceSellProduct} value={priceSellProduct} />
                        </div>
                    )}

                    <div className={cx('itemInput')}>
                        <div className={cx('textInput')}>Ngày nhập sản phẩm</div>
                        <input type={'datetime-local'} className={cx('input')} onChange={handleDateImportProduct} value={dateImportProduct} />
                    </div>
                </div>
            </div>

            {editSanPham && (
                <div>
                    <div className={cx('textDescribe', 'bold')}>Mô tả</div>
                </div>
            )}

        </div>
    )
}

export default EditProductKhoHangAdminScreen;
