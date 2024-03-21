import Api from "../../api";

export function updateData(data) {
    return {
        type: 'UPDATE_DATA',
        data
    }
}

export function actionLogin(userName) {
    return async (dispatch, getState) => {
        try {
            const response = await Api().getTokenLogin(userName);
            if (response && response.data){
                dispatch(updateData({
                    token: response.data,
                    userName: userName,
                }))

                alert(`Đăng nhập thành công ${response.data}`);
            } else {
                dispatch(updateData({
                    token: '',
                }))
                alert("Đăng nhập thất bại");
            }
        } catch (error) {
            alert("Lỗi mạng Xin vui lòng kiểm tra lại kết nối internet");
            dispatch(updateData({
                token: '',
            }))
        }


    };
}


export default {
    actionLogin,
};
