import Api from "../../api";
import reducerCart from "../reducer/reducerCart";

export function updateData(data) {
    return {
        type: 'UPDATE_DATA',
        data
    }
}

export function actionLogin (email, password, nextToHome) {
    return (dispatch, getState) => {
        try {
            if(email === 'admin') {
                nextToHome('/');
                dispatch(updateData({
                    admin: true,
                    userName: email,
                }))
                alert(`Đăng nhập thành công!`);
            } else {
                nextToHome('/screen/UserInformationScreen/UserInformationScreen');
                dispatch(updateData({
                    token: '',
                }))
                alert("Đăng nhập thành công!");
            }
        } catch (error) {
            alert("Lỗi mạng Xin vui lòng kiểm tra lại kết nối internet");
            dispatch(updateData({
                token: '',
            }))
        }
    };
}

export function actionLogout () {
    return (dispatch, getState) => {
        try {
            dispatch(updateData({
                admin: false,
                userName: '',
                token: '',
            }))
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
