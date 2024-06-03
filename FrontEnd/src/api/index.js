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
                    'x-user-username': username,
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

    return {
        getTokenLogin,
        register,
        getListTypeProducts,
        loginGoship,
        getAllCity,
        getAllDistrictsById,
        getAllWardsById,
        getRate,

        getAllUser,
        getAllSpu,
        getAllSkuById,
        createFlashOrder,
        productImportBill,
    };
};

export default Api;
