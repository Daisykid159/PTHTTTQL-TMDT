import {actionGetDataDayStartToEnd} from "../action/actionAdminDashbord";

const INITIAL_STATE = {
    dataDashboardMonth: [],
    status1: false,
    status2: false,
    status3: false,
    roundedNumber3: 0,
    dataDayStartToEnd1: [],
    dataDayStartToEnd2: [],
    status_order_by_day1: [],
    status_order_by_day2: [],
    revenue_by_day1: [],
    revenue_by_day2: [],
    profit_by_day1: [],
    profit_by_day2: [],
    most_user1: [],
    most_user2: [],
    most_product1: [],
    most_product2: [],
};

const reducerAdminDashboard = (state = INITIAL_STATE, action) => {
    let newState = { ...state };
    switch (action.type) {
        case 'UPDATE_DATA': {
            let data = action.data || {};
            return { ...newState, ...data };
        }
        case 'RESET_DATA':{
            return INITIAL_STATE;
        }
        default:
            return state
    }
};

export default reducerAdminDashboard;
