import axios from 'axios';

const Api = (token, username, role) => {
    let api

    switch (role) {
        case 'goship':
            api = axios.create({
                baseURL: 'http://sandbox.goship.io/api/v2',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token || ''}`,
                },
                timeout: 20000,
            });
            break;

        case 'user':
            api = axios.create({
                baseURL: 'http://localhost:8080/api/v1',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token || ''}`,
                    'x-client-username': username,
                },
                timeout: 20000,
            });
            break;

        case 'admin':
            api = axios.create({
                baseURL: 'http://localhost:8080/api/v1',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token || ''}`,
                    'x-admin-username': username,
                },
                timeout: 20000,
            });
            break;

        default:
            api = axios.create({
                baseURL: 'http://localhost:8080/api/v1',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token || ''}`,
                },
                timeout: 20000,
            });
    }

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
        return api.get(`/product/allProductSpu?pageNumber=${pageNumber}&pageSize=8&sortBy=${sortBy}&type=${type || ''}&categoryId=${categoryId}`)
    }

    const getDetailProduct = (id) => {
        return api.get(`/product/detailProduct/${id}`)
    }

    const getAllUser = () => {
        return api.get(`/admin/getAllUser`);
    }

    const getAllBill = () => {
        return api.get(`/admin/allOrderDetails`)
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

    const loginGoship = () => {
        return axios.post('https://sandbox.goship.io/api/v2/login', {
            "username": "daisyss159@gmail.com",
            "password": "Dieulinh29.",
            "client_id": 93,
            "client_secret": "ElGPVYyAQsrEpc2uDMG5sirzGT8tpcbn32cnXaya"
        });
    }

    const getAllCity = () => {
        return api.get('/cities');
    }

    const getAllDistrictsById = (idCity) => {
        return api.get(`/cities/${idCity}/districts`);
    }

    const getAllWardsById = (idDistricts) => {
        return api.get(`districts/${idDistricts}/wards`);
    }

    const getRate = (data) => {
        return api.post(`/rates`, data)
    }

    const postAddCart = (data) => {
        return api.post(`/cart/add`, data)
    }

    const postRemoveItemCart = (idSku, idSpu) => {
        return api.post(`/cart/removeItem?sku=${idSku}&spu=${idSpu}`)
    }

    const getCart = () => {
        return api.get(`/cart/getCart`)
    }

    const getDetailOrder = (id) => {
        return api.get(`order/getDetailOrder?ordercode=${id}`);
    }

    const postOrderNew = (data) => {
        return api.post(`/order/new`, data)
    }

    const postUpdateOrder = (code, status) => {
        return api.post(`/admin/changOrderStatus?orderCode=${code}&status=${status}`)
    }

    const postInfoDetailUser = (username) => {
        return api.post(`user/info?username=${username}`)
    }

    const getDataDashboardMonth = (month, year) => {
        return api.post(`/dashboard/forMonth?month=${month}&year=${year}`)
    }

    const getDataDayStartToEnd = (dayFrom, dayTo) => {
        return api.post(`/dashboard/forDay?start=${dayFrom}&end=${dayTo}`)
    }

    const getForAllMonth = () => {
        return api.post(`/dashboard/forAllMonth`)
    }

    return {
        getTokenLogin,
        register,
        getListTypeProducts,
        getDetailProduct,
        loginGoship,
        getAllCity,
        getAllDistrictsById,
        getAllWardsById,
        getRate,

        getAllBill,
        postUpdateOrder,
        getAllUser,
        getAllSpu,
        getAllSkuById,
        productImportBill,
        createFlashOrder,
        getDetailOrder,
        postInfoDetailUser,

        getCart,
        postAddCart,
        postRemoveItemCart,
        postOrderNew,

        getForAllMonth,
        getDataDashboardMonth,
        getDataDayStartToEnd,
    };
};

export default Api;
