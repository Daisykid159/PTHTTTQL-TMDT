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

    const register = (fullName, username, password, email, sdt, date ) => {
        return api.post('/account/register', {
            "fullName": fullName,
            "username": username,
            "password": password,
            "email": email,
            "sdt": sdt,
            "role": "USER",
            "date": date,
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

    return {
        getTokenLogin,
        register,
        getListTypeProducts,

        getAllUser,
        getAllSpu,
        getAllSkuById,
        createFlashOrder,
    };
};

export default Api;
