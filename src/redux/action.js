import * as types from "./actionTypes";
import * as API from '../config/apiUrls'
import axios from "axios";

// const getProducts = () => ({
//     type: types.GET_PRODUCTS,
//     payload: 
// });

const productAdd = () => ({
    type: types.ADD_PRODUCT,
});

const loginStart = () => ({
    type: types.LOGIN_START,
});

const loginSuccess = (user) => ({
    type: types.LOGIN_SUCCESS,
    payload: user,
});

const loginFail = (error) => ({
    type: types.LOGIN_FAIL,
    payload: error,
});

const getUserList = (users) => ({
    type: types.GET_USERS,
    payload: users,
});

// export const listProducts = () => {
//     return function (dispatch) {
//         axios
//             .get(`${API.listOfAllProducts}`)
//             .then((resp) => {
//                 console.log(resp, "resp");
//                 dispatch(getProducts(resp.data))
//             }).catch((error) => console.log(error));
//     };
// };

export const addProduct = (state) => {
    return function (dispatch) {
        return axios({
            method: 'POST',
            url: API.addProduct,
            data: {
                "product": {
                    "productName": state.productName,
                    "productType": state.productType,
                    "company_id": state.company_id,
                    "created_by": state.created_by
                },
                "supplier": {
                    "quantity": state.quantity,
                    "sypplierName": state.sypplierName,
                    "supplyDate": state.supplyDate,
                    "rate": state.rate,
                    "tax": state.tax,
                    "totalCost": state.totalCost,
                    "invoice_no": state.invoice_no
                }
            }
        })
            .then((resp) => {
                console.log(resp, "resp");
                dispatch(productAdd());
                // dispatch(listProducts());
            }).catch((error) => console.log(error));
    };
};


export const loginInitiate = (email, password) => {
    return function (dispatch) {
        dispatch(loginStart());
        return axios({
            method: 'POST',
            url: API.login,
            data: {
                email,
                password
            }
        })
            .then(({ user }) => {
                dispatch(loginSuccess(user));
            })
            .catch((error) => dispatch(loginFail(error.message)));
    };
};

export const getcompanyUsers = (id) => {
    return function (dispatch) {
        dispatch(loginStart());
        return axios({
            method: 'GET',
            url: API.userList(1),
        })
            .then((res) => {
                console.log(res)
                dispatch(getUserList(res.data));
            })
            .catch((error) => dispatch(loginFail(error.message)));
    };
};
