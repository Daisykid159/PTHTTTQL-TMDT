const INITIAL_STATE = {
    UserInformations: [{
        name: null,
        sdt: null,
        address: 'Địa chỉ khác',
        default: false,
        notView: true,
    }],
};

const reducerUserInformation = (state = INITIAL_STATE, action) => {
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

export default reducerUserInformation;
