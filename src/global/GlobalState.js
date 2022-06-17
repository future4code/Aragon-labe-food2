import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "./GlobalContext";
import { APP_NAME, BASE_URL } from "../constants/urls";
import axios from "axios"
import { login, signUp, addAddress } from "../services/requests";



export const GlobalState = (props) => {

    //states
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || [])
    const [restaurantsList, setRestaurantsList] = useState([]);
    const [filterList, setFilterList] = useState(restaurantsList);

    const requestLogin = (body, navigate, setIsLoading) => {
        login(body, navigate, setIsLoading, setUser)
    }

    const requestSignup = (body, navigate, setIsLoading) => {
        signUp(body, setUser, navigate, setIsLoading)
    }

    const insertAddress = (body, setIsLoading, navigate) => {
        addAddress(body, setIsLoading, setUser, navigate)
    }

    const states = {user, restaurantsList, filterList}
    const setters = {setUser, setRestaurantsList, setFilterList}
    const requests ={requestLogin, requestSignup, insertAddress}

    


    return(
        <GlobalContext.Provider value={{states, setters, requests}}>
            {props.children}
        </GlobalContext.Provider>
    )
}