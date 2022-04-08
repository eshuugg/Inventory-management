import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home/Home";
import AddUser from "./pages/addUser/AddUser";

export default function Navigator() {
    return (
        <Routes>
            <Route path='' element={<Layout />}>
                <Route index  element={<Home />} />
                <Route path="/addUser" element={<AddUser/>}/>
            </Route>
        </Routes>
    )
}
