import Api from "../../api";

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
            console.log(response.data);
            if (response && response.data){
                nextToScreen("/screen/UserInformationScreen/UserInformationScreen");
                dispatch(updateData({
                    token: response.data.accessToken,
                }))

                alert("Đăng nhập thành công!");
            } else {
                dispatch(updateData({
                    token: '',
                }))
                alert("Đăng nhập thất bại!");
            }
        } catch (error) {
            alert("Lỗi mạng Xin vui lòng kiểm tra lại kết nối internet");
            dispatch(updateData({
                token: '',
            }))
        }
    };
}

export function actionRegister (username, password, date) {
    return async (dispatch, getState) => {
        try {
            const response = await Api().getTokenLogin(username, password, date);
            console.log(response.data);
            if (response && response.data){
                alert("Đăng ký thành công!");
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
