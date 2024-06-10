import Api from "../../api";

export function updateData(data) {
    return {
        type: 'UPDATE_DATA',
        data
    }
}

export function actionGetListCart (token, username) {
    return async (dispatch, getState) => {
        try {
            const response = await Api(token, username, 'user').getCart();

            if (response && response.data){
                if(!response.data.code) {
                    dispatch(updateData({
                        listCart: response.data,
                        quantityCart: response.data.length || 0,
                    }))
                } else {
                    dispatch(updateData({
                        listCart: [],
                        quantityCart: 0,
                    }))
                }
            } else {
                alert("Lấy danh sách giỏ hàng thất bại!");
            }
        } catch (error) {
            alert("Lỗi mạng Xin vui lòng kiểm tra lại kết nối internet");
        }
    };
}

export function actionAddProduct (token, username, listCart) {
    return async (dispatch, getState) => {
        try {
            const response = await Api(token, username, 'user').postAddCart(listCart);

            if (response && response.data){
                dispatch(updateData({
                    listCart: response.data,
                    quantityCart: response.data.length,
                }))
            } else {
                alert("Thêm sản phẩm thất bại!");
            }
        } catch (error) {
            alert("Lỗi mạng Xin vui lòng kiểm tra lại kết nối internet");
        }
    };
}

export function actionDeleteProduct (token, username, data) {
    return async (dispatch, getState) => {
        try {
            const response = await Api(token, username, 'user').postRemoveItemCart(data.idSku, data.idSpu);

            if (response && response.data){
                dispatch(updateData({
                    listCart: response.data,
                    quantityCart: response.data.length,
                }))
            } else {
                alert("Thêm sản phẩm thất bại!");
            }
        } catch (error) {
            alert("Lỗi mạng Xin vui lòng kiểm tra lại kết nối internet");
        }
    };
}


export default {
    updateData,
    actionGetListCart,
    actionAddProduct,
    actionDeleteProduct,
};
