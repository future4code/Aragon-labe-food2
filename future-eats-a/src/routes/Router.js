import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";
import { InitialPage } from "../pages/InitialPage";
import { ErrorPage } from "../pages/ErrorPage";
import { RestaurantDetails } from "../pages/RestaurantDetails";
import { Cart } from "../pages/Cart";
import { Feed } from "../pages/Feed";

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<InitialPage/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/feed"} element={<Feed/>}/>
                <Route path={"*"} element={<ErrorPage/>}/>
                <Route path={"/signup"} element={<SignUp/>}/>
                <Route path={"/restaurants/:restaurantId"} element={<RestaurantDetails/>}/>
                <Route path={"/active-order"} element={<Cart/>}/>
            </Routes>
        </BrowserRouter>
    )
}