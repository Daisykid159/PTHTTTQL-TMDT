import Api from "../../api";
import actionCart from "./actionCart";

export function updateData(data) {
    return {
        type: 'UPDATE_DATA',
        data
    }
}

export function actionLoginGoShip () {
    return async (dispatch, getState) => {
        try {
            const response = await Api().loginGoship();

            if (response && response.data){
                if(response.data.code === 200) {
                    dispatch(updateData({
                        tokenGoShip: response.data.access_token,
                    }));
                } else {
                    alert(response.data.message);
                }
            } else {
                alert("Lấy dữ liệu thất bại!");
            }
        } catch (error) {

        }
    };
}

export function actionGetAllCityGoShip (token, user) {
    return async (dispatch, getState) => {
        try {
            const response = await Api(token, user, 'goship').getAllCity();

            if (response && response.data){
                if(response.data.code === 200) {
                    dispatch(updateData({
                        listCity: response.data.data,
                    }));
                } else {
                    alert(response.data.message);
                }
            } else {
                alert("Lấy dữ liệu thất bại!");
            }
        } catch (error) {
            alert("Lỗi mạng Xin vui lòng kiểm tra lại kết nối internet");
        }
    };
}

export function actionGetAllDistrictsById (token, user, idCity) {
    return async (dispatch, getState) => {
        try {
            const response = await Api(token, user, 'goship').getAllDistrictsById(idCity);

            if (response && response.data){
                if(response.data.code === 200) {
                    dispatch(updateData({
                        listDistricts: response.data.data,
                    }));
                } else {
                    alert(response.data.message);
                }
            } else {
                alert("Lấy dữ liệu thất bại!");
            }
        } catch (error) {
            alert("Lỗi mạng Xin vui lòng kiểm tra lại kết nối internet");
        }
    };
}

export function actionGetAllWardsById (token, user, idDistricts) {
    return async (dispatch, getState) => {
        try {
            const response = await Api(token, user, 'goship').getAllWardsById(idDistricts);

            if (response && response.data){
                if(response.data.code === 200) {
                    dispatch(updateData({
                        listWards: response.data.data,
                    }));
                } else {
                    alert(response.data.message);
                }
            } else {
                alert("Lấy dữ liệu thất bại!");
            }
        } catch (error) {
            alert("Lỗi mạng Xin vui lòng kiểm tra lại kết nối internet");
        }
    };
}

export function actionGetRate (token, user, data) {
    return async (dispatch, getState) => {
        try {
            const response = await Api(token, user, 'goship').getRate(data);

            if (response && response.data){
                if(response.data.code === 200) {
                    dispatch(updateData({
                        ListOfShippingUnits: response.data.data,
                    }));
                } else {
                    alert(response.data.message);
                }
            } else {
                alert("Lấy dữ liệu thất bại!");
            }
        } catch (error) {
            alert("Lỗi mạng Xin vui lòng kiểm tra lại kết nối internet");
        }
    };
}

export function actionCreateOrderNew (token, username, data, navigate) {
    return async (dispatch, getState) => {
        try {
            const response = await Api(token, username, 'user').postOrderNew(data);

            if (response && response.data){
                if(data.payment_id === '2') {
                    window.open(response.data.message, '_blank');
                } else {
                    alert("Đặt đơn hàng thành công!")
                    dispatch(actionCart.actionGetListCart(token, username));
                    navigate("/");
                }
            } else {
                alert("Lấy dữ liệu thất bại!");
            }
        } catch (error) {

        }
    };
}

export default {
    actionLoginGoShip,
    actionGetAllCityGoShip,
    actionGetAllDistrictsById,
    actionGetAllWardsById,
    actionGetRate,
    actionCreateOrderNew,
};
