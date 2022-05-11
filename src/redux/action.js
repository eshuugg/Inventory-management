import * as types from "./actionTypes";
import * as API from '../config/apiUrls'
import axios from "axios";

const getProducts = (product) => ({
    type: types.GET_PRODUCTS,
    payload: product,
});

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
const getProductDetails = (product) => ({
    type: types.GET_PRODUCTDETAILS,
    payload: product,
});


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
                    "supplierName": state.supplierName,
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


export const loginInitiate = (user) => {
    return function (dispatch) {
        dispatch(loginStart());
        return axios({
            method: 'POST',
            url: API.login,
            data: {
                ...user
            }

        })
            .then((res) => {
                localStorage.setItem("currentCompanyId", res.data.company_id)
                dispatch(loginSuccess(res.data));
            })
            .catch((error) => dispatch(loginFail(error.message)));
    };
};

export const getcompanyUsers = (id) => {
    return function (dispatch) {
        return axios({
            method: 'GET',
            url: API.userList(localStorage.getItem("currentCompanyId")),
        })
            .then((res) => {
                dispatch(getUserList(res.data));
            })
            .catch((error) => dispatch(loginFail(error.message)));
    };
};


export const getCompanyProducts = (id) => {
    return function (dispatch) {
        return axios({
            method: 'GET',
            url: API.productList(localStorage.getItem("currentCompanyId"))
        })

            .then((resp) => {
                dispatch(getProducts(resp.data))
            }).catch((error) => console.log(error));
    };
};

export const productDetails = (id) => {
    return function (dispatch) {
        return axios({
            method: 'GET',
            url: API.
                productDetails(id.id, localStorage.getItem("currentCompanyId"))
        })

            .then((resp) => {
                // localStorage.setItem("productId", resp.data.product_id)
                dispatch(getProductDetails(resp.data))
            }).catch((error) => console.log(error));
    };
};


