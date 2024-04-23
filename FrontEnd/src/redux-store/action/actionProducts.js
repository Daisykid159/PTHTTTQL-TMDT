import Api from "../../api";

export function updateData(data) {
    return {
        type: 'UPDATE_DATA',
        data
    }
}

export function actionGetListProducts (typeProduct, quantity) {
    return async (dispatch, getState) => {
        try {
            const response = await Api().getListTypeProducts();
            console.log(response.data);

            if (response && response.data){
                dispatch(updateData({
                    listProducts: response.data,
                }))

            } else {
                alert("Lấy danh sách sản phẩm thất bại!");
            }
        } catch (error) {
            alert("Lỗi mạng Xin vui lòng kiểm tra lại kết nối internet");
        }
    };
}

export function actionGetDetailProducts (product) {
    return async (dispatch, getState) => {
        try {
            dispatch(updateData({
                productDetail: product,
            }))
        } catch (error) {
            alert("Lỗi mạng Xin vui lòng kiểm tra lại kết nối internet");
        }
    };
}


export default {
    actionGetListProducts,
    actionGetDetailProducts,
};
