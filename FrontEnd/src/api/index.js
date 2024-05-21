import axios from 'axios';

const Api = (token, username) => {
    const api = axios.create({
        baseURL: 'http://localhost:8080/api/v1',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token || ''}`,
            'x-admin-username': username,
        },
        timeout: 20000,
    });

    // api get token
    const getTokenLogin =(username, password) => {
        return api.post('/account/login', {
            "username": username,
            "password": password
        });
    }

    const register = (username, email, password) => {
        return api.post('/account/register', {
            "username": username,
            "password": password,
            "email": email,
            "role": "USER",
            "date": "01/05/2024",
            "gender": "male"
        })
    }

    const getListTypeProducts = (pageNumber, sortBy, type, categoryId) => {
        return api.get(`/product/allProductSpu?pageNumber=${pageNumber}&pageSize=8&sortBy=${sortBy}&type=${type}&categoryId=${categoryId}`)
    }

    const getAllUser = () => {
        return api.get(`/admin/getAllUser`);
    }

    const getAllSpu = () => {
        return api.get(`/admin/getAllSpu`);
    }

    const getAllSkuById = (id) => {
        return api.get(`/admin/getAllSkuBy/${id}`);
    }

    const createFlashOrder = (data) => {
        return api.post(`/admin/createFlashOrder`, {...data});
    }

    const productImportBill = (data) => {
        return api.post(`/import/productImportBill`, {...data});
    }

    return {
        getTokenLogin,
        register,
        getListTypeProducts,

        getAllUser,
        getAllSpu,
        getAllSkuById,
        createFlashOrder,
        productImportBill,
    };
};

export default Api;
