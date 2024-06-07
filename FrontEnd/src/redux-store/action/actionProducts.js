import Api from "../../api";

export function updateData(data) {
    return {
        type: 'UPDATE_DATA',
        data
    }
}

export function actionGetListProducts (pageNumber, sortBy, type, categoryId) {
    return async (dispatch, getState) => {
        try {
            const response = await Api().getListTypeProducts(pageNumber, sortBy, type, categoryId);

            if (response && response.data){
                dispatch(updateData({
                    listProducts: response.data.responses,
                    totalElements: response.data.totalElements,
                }))

            } else {
                alert("Lấy danh sách sản phẩm thất bại!");
            }
        } catch (error) {
            alert("Lỗi mạng Xin vui lòng kiểm tra lại kết nối internet");
        }
    };
}

export function actionGetDetailProducts (id) {
    return async (dispatch, getState) => {
        try {
            const response = await Api().getDetailProduct(id);

            if (response && response.data){
                dispatch(updateData({
                    productDetail: response.data,
                }))
            } else {
                alert("Lấy danh sách sản phẩm thất bại!");
            }
        } catch (error) {
            alert("Lỗi mạng Xin vui lòng kiểm tra lại kết nối internet");
        }
    };
}


export default {
    actionGetListProducts,
    actionGetDetailProducts,
};
