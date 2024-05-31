import { combineReducers } from 'redux';
import reducerAuth from "./reducerAuth";
import reducerCart from "./reducerCart";
import reducerUserInformation from "./reducerUserInformation";
import reducerProducts from "./reducerProducts";
import reducerFakeApi from "./reducerFakeApi";
import reducerPay from "./reducerPay";

const rootReducer = combineReducers({
    reducerAuth: reducerAuth,
    reducerCart: reducerCart,
    reducerProducts: reducerProducts,
    reducerUserInformation: reducerUserInformation,
    reducerPay: reducerPay,

    reducerFakeApi: reducerFakeApi,
});

export default rootReducer;
