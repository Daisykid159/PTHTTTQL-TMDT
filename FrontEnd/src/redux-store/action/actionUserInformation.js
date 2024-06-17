import Api from "../../api";

export function updateData(data) {
    return {
        type: 'UPDATE_DATA',
        data
    }
}

export function actionUpdateAddress (UserInformations) {
    return async (dispatch, getState) => {
        try {
            dispatch(updateData({
                UserInformations: UserInformations,
            }))
        } catch (error) {
            alert("Lỗi mạng Xin vui lòng kiểm tra lại kết nối internet");
        }
    };
}

export function actionGetInfoUser (token, user, username) {
    return async (dispatch, getState) => {
        try {
            const response = await Api(token, user, 'admin').postInfoDetailUser(username);

            if (response && response.data){
                dispatch(updateData({
                    detailUser: response.data,
                }))
            } else {
                alert("Lấy dữ liệu thất bại!");
            }
        } catch (error) {
            alert("Lỗi mạng Xin vui lòng kiểm tra lại kết nối internet");
        }
    };
}

export function actionGetInfoUser1 (token, user, username) {
    return async (dispatch, getState) => {
        try {
            const response = await Api(token, user, 'user').postInfoDetailUser(username);

            if (response && response.data){
                dispatch(updateData({
                    detailUser1: response.data,
                }))
            } else {
                alert("Lấy dữ liệu thất bại!");
            }
        } catch (error) {
            alert("Lỗi mạng Xin vui lòng kiểm tra lại kết nối internet");
        }
    };
}

export function actionGetDetailOrder1 (token, user, codeOrder) {
    return async (dispatch, getState) => {
        try {
            const response = await Api(token, user, 'user').getDetailOrder(codeOrder);

            if (response && response.data){
                dispatch(updateData({
                    detailOrder1: response.data,
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
    actionUpdateAddress,
    actionGetInfoUser,
    actionGetInfoUser1,
    actionGetDetailOrder1,
};
