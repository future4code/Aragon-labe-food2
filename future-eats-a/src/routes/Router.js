import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";
import { Home } from "../pages/Home";
import { ErrorPage } from "../pages/ErrorPage";
import { RestaurantDetails } from "../pages/RestaurantDetails";
import { Cart } from "../pages/Cart";

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Login/>}/>
                <Route path={"*"} element={<ErrorPage/>}/>
                <Route path={"/signup"} element={<SignUp/>}/>
                <Route path={"/home"} element={<Home/>}/>
                <Route path={"/restaurants/:restaurantId"} element={<RestaurantDetails/>}/>
                <Route path={"/active-order"} element={<Cart/>}/>
            </Routes>
        </BrowserRouter>
    )
}