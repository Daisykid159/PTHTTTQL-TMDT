import { combineReducers } from 'redux';
import reducerAuth from "./reducerAuth";
import reducerCart from "./reducerCart";

const rootReducer = combineReducers({
    reducerAuth: reducerAuth,
    reducerCart: reducerCart,
});

export default rootReducer;
