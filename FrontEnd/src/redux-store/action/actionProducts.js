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
                switch (categoryId) {
                    case 1:
                        dispatch(updateData({
                            listProducts1: response.data.responses,
                            totalElements1: response.data.totalElements,
                        }))
                        break;

                    case 2:
                        dispatch(updateData({
                            listProducts2: response.data.responses,
                            totalElements2: response.data.totalElements,
                        }))
                        break;

                    case 3:
                        dispatch(updateData({
                            listProducts3: response.data.responses,
                            totalElements3: response.data.totalElements,
                        }))
                        break;

                    default:
                }

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
