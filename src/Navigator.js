import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home/Home";
import AddProduct from './pages/addProduct/AddProduct'
import ListOfAllInventory from './pages/listOfProduct/ListOfProducts';
import Userlist from './pages/userList/Userlist';
import Login from './pages/login/Login';


export default function Navigator() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path='' element={<Layout />}>
                <Route index path="/home" element={<Home />} />
                <Route path="/addProduct" element={<AddProduct />} />
                <Route path="/listOfAllInventory" element={<ListOfAllInventory />} />
                <Route path="/userlist" element={<Userlist />} />
            </Route>
        </Routes>
    )
}
