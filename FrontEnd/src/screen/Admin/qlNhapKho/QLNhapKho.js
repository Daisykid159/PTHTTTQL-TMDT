import React, {useEffect, useState} from "react";
import styles from './QLNhapKho.model.scss';
import classNames from "classnames/bind";
import {formatPrice} from "../../../unitl";
import {useDispatch, useSelector} from "react-redux";
import {
    actionCreateFlashOrder, actionDonePay, actionGetAllSkuById,
    actionGetAllSpu,
    actionGetAllUser, actionImportProduct
} from "../../../redux-store/action/actionFakeApi";
import moment from "moment";
import ItemImportProduct from "./ItemImportProduct";

const cx = classNames.bind(styles);

function QLNhapKho(props) {

    const listDataProduct = useSelector(state => state.reducerFakeApi.listDataProduct);
    const doneImport = useSelector(state => state.reducerFakeApi.doneImport);

    const dispatch = useDispatch();
    const token = useSelector(state => state.reducerAuth.token);
    const decoded = useSelector(state => state.reducerAuth.decoded);

    const [listImportProduct, setListImportProduct] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [dateImpotProduct, setDateImpotProduct] = useState(Date.now());

    const importProductList = (Product) => {
        const listTmp = listImportProduct || [];
        let checkImport = true;
        listTmp?.map((item, index) => {
            if(item.skuId === Product.skuId && item.spuId === Product.spuId){
                item.price = Product.price
                item.quantity += parseInt(Product.quantity);
                checkImport = false;
            }
        })

        if(checkImport) listTmp?.push(Product);

        let total = 0;
        listTmp?.map(item => {
            total += item.price * item.quantity;
        })

        setTotalPrice(total);
        setListImportProduct(listTmp);
    }

    const handleDateImpotProduct = (e) => {
        setDateImpotProduct(e.target.value);
    }

    const handlePay = () => {
        const dataImportProduct = {
            "total_price": totalPrice,
            "importAt": moment(dateImpotProduct).format("HH:mm DD/MM/yyyy"),
            "importList": listImportProduct,
        }
        console.log(dataImportProduct)
        dispatch(actionImportProduct(token, decoded.sub, dataImportProduct))
    }

    useEffect(() => {
        setDateImpotProduct(moment(Date.now()).format("yyyy-MM-DDTHH:mm"))
    }, [])

    useEffect(() => {
        if(doneImport) {
            setListImportProduct([]);
            setTotalPrice(0);
            dispatch(actionGetAllUser(token, decoded.sub))
            dispatch(actionGetAllSpu(token, decoded.sub))
            dispatch(actionGetAllSkuById(token, decoded.sub, 1))
            dispatch(actionDonePay());
        }
    }, [doneImport]);

    return (
        <div className={cx('QLNhapKho')}>
            <div className={cx('headerQl', 'flex')}>
                <i className={cx('bx bx-menu', 'iconMenu')}></i>
                <div>QUẢN LÝ NHẬP KHO</div>
            </div>

            <div>
                <div className={cx('bold')}>Danh sách sản phẩm</div>

                <ItemImportProduct
                    addProduct={importProductList}
                    listDataProduct={listDataProduct}
                    listProduct={listImportProduct}
                />
            </div>

            <div className={cx('listProductTmp')}>
                <table className={cx('table')} >
                    <thead>
                    <tr>
                        <th className={cx('nameProductH')}>Tên sản phẩm</th>
                        <th>Màu</th>
                        <th>Giá sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Thành tiền</th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        listImportProduct?.map(item => (
                            <tr>
                                <td className={cx('nameProduct')}>
                                    <div>{item.productSpu_name}</div>
                                </td>
                                <td>{item.productSku_name}</td>
                                <td>{formatPrice(item.price)}</td>
                                <td>{item.quantity}</td>
                                <td>{formatPrice(item.quantity * item.price)}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>

            <div className={cx('flex', 'center')}>
                <div className={cx('w50pt')}>
                    <div className={cx('flex', 'bold', 'mt10px')}>
                        <div className={cx('w30pt')}>Tổng thanh toán:</div>
                        <div className={cx('red')}>{formatPrice(totalPrice)}</div>
                    </div>
                </div>

                <div className={cx('flex', 'center', 'bold', 'mt10px')}>
                    <div>Ngày nhập hàng: </div>
                    <input
                        value={dateImpotProduct}
                        className={cx('inputDate')}
                        type={"datetime-local"}
                        onChange={handleDateImpotProduct}
                    />
                </div>
            </div>


            <div className={cx('summit')} onClick={handlePay}>Nhập kho</div>
        </div>
    )
}

export default QLNhapKho;
