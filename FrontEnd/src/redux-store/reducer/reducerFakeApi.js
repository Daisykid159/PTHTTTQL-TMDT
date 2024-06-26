const INITIAL_STATE = {
    listAllUser: [],
    listDataProduct: [],
    listDataProductColor: [],
    donePay: true,
    doneImport: true,
};

const reducerFakeApi = (state = INITIAL_STATE, action) => {
    let newState = { ...state };
    switch (action.type) {
        case 'UPDATE_DATA': {
            let data = action.data || {};
            return { ...newState, ...data };
        }
        case 'RESET_AUTH':{
            return INITIAL_STATE;
        }
        default:
            return state
    }
};

export default reducerFakeApi;
