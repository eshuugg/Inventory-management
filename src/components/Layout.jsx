import React from 'react';
import { Outlet, Link, Navigate } from "react-router-dom";
import Topbar from './topbar/Header';
import Sidebar from './sidebar/Sidebar';
// import "../app.css";



function Layout() {
    // const loggedIn = localStorage.getItem('isLoggedIn');
    return (
        <>
            <Topbar className='' />
            <div className="row">
                <div className="col-3">
                    <Sidebar />
                </div>
                <div className="col-8">
                    <div className='height-100 lay-pt'>
                        <Outlet />
                    </div>
                </div>
            </div>


        </>
    );
}

export default Layout;
