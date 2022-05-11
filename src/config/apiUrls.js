export const BASE_PATH = 'http://localhost:8080/api'

export const listOfAllProducts = BASE_PATH + '/product/list';

export const addProduct = BASE_PATH + '/product/add';

export const login = BASE_PATH + '/user/login';

export const userList = (id) => BASE_PATH + `/company/${id}/user`;

export const productList = (id) => BASE_PATH + `/company/${id}/products`;

export const productDetails = (id, cid) => BASE_PATH + `/company/${cid}/products/${id}/supplier/sell/stock`





// `<hostname>/api/v1/user/get`
// `<hostname>/api/v1/user/:user_id/role/:role_id/get`
// `<hostname>/api/v1/company/:company_id/product/get`


// `<hostname>/api/v1/product/company/:company_id/get`

// microservices -- large project
//                 --- Ecom
//                     - user
//                     - product
//                     - cart
//                     - order
//                     - billing
//                     - feedback
//                     - delivery
//                     - reports

// 


