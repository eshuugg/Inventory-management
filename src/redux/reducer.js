import * as types from "./actionTypes";

const initialState = {
    users: [],
    user: {},
    loading: false,
    error: null
}


const usersReducers = (state = initialState, action) => {
    switch (action.type) {
        // case types.GET_PRODUCTS:
        //     return {
        //         ...state,
        //         users: action.payload,
        //         loading: false,
        //     };

        case types.ADD_PRODUCT:
            return {
                ...state,
                loading: false
            };
        case types.LOGIN_START:
            return {
                ...state,
                loading: true
            };
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                currentUser: action.payload,
            };
        case types.LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case types.GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            };
        default:
            return state
    }
};

export default usersReducers;