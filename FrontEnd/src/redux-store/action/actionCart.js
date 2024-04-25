import Api from "../../api";

export function updateData(data) {
    return {
        type: 'UPDATE_DATA',
        data
    }
}

export function actionAddProduct (listCart) {
    return async (dispatch, getState) => {
        try {
            dispatch(updateData({
                listCart: listCart,
                quantityCart: listCart.length,
            }))
        } catch (error) {
            alert("Lỗi mạng Xin vui lòng kiểm tra lại kết nối internet");
        }
    };
}

export function actionDeleteProduct (listCart) {
    return async (dispatch, getState) => {
        try {
            dispatch(updateData({
                listCart: listCart,
                quantityCart: listCart.length,
            }))
        } catch (error) {
            alert("Lỗi mạng Xin vui lòng kiểm tra lại kết nối internet");
        }
    };
}


export default {
    actionAddProduct,
    actionDeleteProduct,
};
