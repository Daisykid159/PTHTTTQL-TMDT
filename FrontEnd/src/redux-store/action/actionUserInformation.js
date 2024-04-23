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


export default {
    actionUpdateAddress,
};
