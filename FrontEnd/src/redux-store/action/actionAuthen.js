import Api from "../../api";
import {jwtDecode} from "jwt-decode";

export function updateData(data) {
    return {
        type: 'UPDATE_DATA',
        data
    }
}

export function actionLogin (username, password, nextToScreen) {
    return async (dispatch, getState) => {
        try {
            const response = await Api().getTokenLogin(username, password);
            if (response && response.data){
                const decoded = jwtDecode(response.data.accessToken);

                dispatch(updateData({
                    isLogin: true,
                    decoded: decoded,
                    token: response.data.accessToken,
                    admin: decoded?.authorities[0] === "ADMIN",
                }))

                alert("Đăng nhập thành công!");
                if(decoded?.authorities[0] === "ADMIN") {
                    nextToScreen("/");
                } else {
                    nextToScreen("/screen/UserInformationScreen/UserInformationScreen");
                }
            } else {
                dispatch(updateData({
                    isLogin: false,
                    token: '',
                }))
                alert("Đăng nhập thất bại!");
            }
        } catch (error) {
            alert("Đăng nhập thất bại!");
            dispatch(updateData({
                isLogin: false,
                token: '',
            }))
        }
    };
}

export function actionRegister (username, email, password, handleBack) {
    return async (dispatch, getState) => {
        try {
            const response = await Api().register(username, email, password);

            if (response && response.data){
                alert("Đăng ký thành công!");
                handleBack();
            } else {
                alert("Đăng ký thất bại!");
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
                isLogin: false,
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
    actionLogout,
    actionRegister,
};
