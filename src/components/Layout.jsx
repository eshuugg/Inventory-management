import React from 'react';
import { Outlet, Link, Navigate } from "react-router-dom";
import Topbar from './topbar/Topbar';
import Sidebar from './sidebar/Sidebar';
import "../app.css";



function Layout() {
    // const loggedIn = localStorage.getItem('isLoggedIn');
    return (
        <>
            <Topbar />
            <div className='container'>
                <Sidebar />
                <Outlet />
            </div>
        </>
    );
}

export default Layout;
