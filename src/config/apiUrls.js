export const BASE_PATH = 'http://localhost:8080/api'

export const listOfAllProducts = BASE_PATH + '/product/list';

export const addProduct = BASE_PATH + '/product/add';

export const login = BASE_PATH + '/user/login';

export const userList = (id) => BASE_PATH + `/company/${id}/user`;


