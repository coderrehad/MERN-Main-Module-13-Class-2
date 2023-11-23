import React from 'react';
import {Outlet} from "react-router-dom";
import AppNavbar from "./AppNavbar.jsx";

const RouteLayout = () => {
    return (
        <>
            <AppNavbar/>
            <Outlet/>
        </>
    );
};

export default RouteLayout;