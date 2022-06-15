import React, { Profiler } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";
import { InitialPage } from "../pages/Home";
import { ErrorPage } from "../pages/Error";
import { RestaurantDetails } from "../pages/RestaurantDetails";
import { Cart } from "../pages/Cart";
import { Address } from "../pages/Address";
import { Restaurants } from "../pages/Restaurants";
import { Profile } from "../pages/Profile";

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path={"/login"}element={<Login/>}/>
                <Route path={"/restaurants"} element={<Restaurants/>}/>
                <Route path={"*"} element={<ErrorPage/>}/>
                <Route path={"/signup"} element={<SignUp/>}/>
                <Route path={"/address"} element={<Address/>}/>
                <Route index element={<InitialPage/>}/>
                <Route path={"/restaurants/:restaurantId"} element={<RestaurantDetails/>}/>
                <Route path={"/profile"} element={<Profile/>}/>
                <Route path={"/active-order"} element={<Cart/>}/>
            </Routes>
        </BrowserRouter>
    )
}