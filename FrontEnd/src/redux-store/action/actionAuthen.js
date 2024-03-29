import Api from "../../api";
import reducerCart from "../reducer/reducerCart";

export function updateData(data) {
    return {
        type: 'UPDATE_DATA',
        data
    }
}

export function actionLogin (email, password) {
    return (dispatch, getState) => {
        try {
            if(email === 'admin') {
                dispatch(updateData({
                    admin: true,
                    userName: email,
                }))
                alert(`Đăng nhập thành công!`);
            } else {
                dispatch(updateData({
                    token: '',
                }))
                alert("Vui lòng kiểm tra lại tài khoản và mật khẩu!");
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
