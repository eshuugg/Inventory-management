import React from 'react'
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home/Home";
import AddProduct from './pages/addProduct/AddProduct'
import Userlist from './pages/userList/Userlist';
import Login from './pages/login/Login';
import ListOfProducts from './pages/listOfProduct/ListOfProducts';
import ProductDetails from './pages/productDetails/ProductDetails';



export default function Navigator() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path='' element={<Layout />}>
                <Route exact path="/" element={<Home />} />
                <Route path="/addProduct" element={<AddProduct />} />
                <Route path="/products" element={<ListOfProducts />} />
                <Route path="/userlist" element={<Userlist />} />
                <Route path="/product/details/:id" element={<ProductDetails />} />
            </Route>
        </Routes>
    )
}
