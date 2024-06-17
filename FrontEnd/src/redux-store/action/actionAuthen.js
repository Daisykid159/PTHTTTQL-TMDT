import Api from "../../api";
import {jwtDecode} from "jwt-decode";
import actionCart, {actionGetListCart} from "./actionCart";

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

                localStorage.setItem('username', username);
                localStorage.setItem('password', password);

                dispatch(actionCart.actionGetListCart(response.data.accessToken, username));

                if(nextToScreen) {
                    alert("Đăng nhập thành công!");
                    if(decoded?.authorities[0] === "ADMIN") {
                        nextToScreen("/");
                    } else {
                        nextToScreen("/screen/UserInformationScreen/UserInformationScreen");
                    }
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
            localStorage.removeItem('username');
            localStorage.removeItem('password');
            dispatch(updateData({
                isLogin: false,
                admin: false,
                userName: '',
                token: '',
            }))

            dispatch(actionCart.updateData({
                listCart: [],
                quantityCart: 0,
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
