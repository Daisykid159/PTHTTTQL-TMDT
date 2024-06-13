import Api from "../../api";

export function updateData(data) {
    return {
        type: 'UPDATE_DATA',
        data
    }
}

export function actionGetAllOrder (token, user) {
    return async (dispatch, getState) => {
        try {
            const response = await Api(token, user, 'admin').getAllBill();

            if (response && response.data){
                dispatch(updateData({
                    listAllOrders: response.data,
                }))
            } else {
                alert("Lấy dữ liệu thất bại!");
            }
        } catch (error) {
            alert("Lỗi mạng Xin vui lòng kiểm tra lại kết nối internet");
        }
    };
}

export function actionGetDetailOrder (token, user, codeOrder) {
    return async (dispatch, getState) => {
        try {
            const response = await Api(token, user, 'admin').getDetailOrder(codeOrder);

            if (response && response.data){
                dispatch(updateData({
                    detailOrder: response.data,
                }))
            } else {
                alert("Lấy dữ liệu thất bại!");
            }
        } catch (error) {
            alert("Lỗi mạng Xin vui lòng kiểm tra lại kết nối internet");
        }
    };
}

export function actionUpdateOrder (token, user, code, status) {
    return async (dispatch, getState) => {
        try {
            const response = await Api(token, user, 'admin').postUpdateOrder(code, status);

            if (response && response.data){
                dispatch(updateData({
                    listAllOrders: response.data,
                }))
            } else {
                alert("Lấy dữ liệu thất bại!");
            }
        } catch (error) {
            alert("Lỗi mạng Xin vui lòng kiểm tra lại kết nối internet");
        }
    };
}

export default {
    updateData,
    actionGetAllOrder,
    actionGetDetailOrder,
    actionUpdateOrder,
};
