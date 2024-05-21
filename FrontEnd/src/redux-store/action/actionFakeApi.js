import Api from "../../api";

export function updateData(data) {
    return {
        type: 'UPDATE_DATA',
        data
    }
}

export function actionGetAllUser (token, username) {
    return async (dispatch, getState) => {
        try {
            const response = await Api(token, username).getAllUser();

            if (response && response.data){
                dispatch(updateData({
                    listAllUser: response.data,
                }))

            } else {
                alert("Lấy danh sách user thất bại!");
            }
        } catch (error) {
            alert("Lỗi mạng Xin vui lòng kiểm tra lại kết nối internet");
        }
    };
}

export function actionGetAllSpu (token, username) {
    return async (dispatch, getState) => {
        try {
            const response = await Api(token, username).getAllSpu();

            if (response && response.data){
                dispatch(updateData({
                    listDataProduct: response.data,
                }))

            } else {
                alert("ActionGetAllSpu thất bại!");
            }
        } catch (error) {
            alert("Lỗi mạng Xin vui lòng kiểm tra lại kết nối internet");
        }
    };
}

export function actionGetAllSkuById (token, username, id) {
    return async (dispatch, getState) => {
        try {
            const response = await Api(token, username).getAllSkuById(id);

            if (response && response.data){
                dispatch(updateData({
                    listDataProductColor: response.data,
                }))

            } else {
                alert("ActionGetAllSkuBy thất bại!");
            }
        } catch (error) {
            alert("Lỗi mạng Xin vui lòng kiểm tra lại kết nối internet");
        }
    };
}

export function actionCreateFlashOrder (token, username, data) {
    return async (dispatch, getState) => {
        try {
            const response = await Api(token, username).createFlashOrder(data);

            if (response && response.data){
                if(response.data === "done") {
                    alert("Thanh toán thành công!");
                } else {
                    alert(response.data.message);
                }

                dispatch(updateData({
                    donePay: true,
                }));
            } else {
                alert("Thanh toán thất bại!");
            }
        } catch (error) {
            alert("Lỗi mạng Xin vui lòng kiểm tra lại kết nối internet");
        }
    };
}

export function actionDonePay () {
    return async (dispatch, getState) => {
        dispatch(updateData({
            donePay: false,
        }))
    };
}

export default {
    actionGetAllUser,
    actionGetAllSpu,
    actionGetAllSkuById,
    actionCreateFlashOrder,
    actionDonePay,
};
