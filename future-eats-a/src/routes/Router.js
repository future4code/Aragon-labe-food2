import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";
import { Feed } from "../pages/Feed";
import { ErrorPage } from "../pages/ErrorPage";
import { RestaurantDetails } from "../pages/RestaurantDetails";

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Login/>}/>
                <Route path={"*"} element={<ErrorPage/>}/>
                <Route path={"/signup"} element={<SignUp/>}/>
                <Route path={"/feed"} element={<Feed/>}/>
                <Route path={"/restaurants/:restaurantId"} element={<RestaurantDetails/>}/>
            </Routes>
        </BrowserRouter>
    )
}