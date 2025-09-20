import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";


const AppRoutes = () => {
    const isAuthenticated = !!localStorage.getItem("token");

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />}/>
                <Route path="/register" element={<Register />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
