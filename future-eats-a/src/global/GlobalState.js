import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "./GlobalContext";
import { APP_NAME, BASE_URL } from "../constants/urls";
import axios from "axios";
import { request } from "../services/requests";
import { goToSignUp, goToFeed } from "../routes/coordinator";



export const GlobalState = (props) => {
    //states
    const [ restaurants, setRestaurants ] = useState([])
    const [ isLoading, setIsLoading] = useState(false)

    const getRestaurants = () => {
        const headers = {
            headers: {
                authorization: localStorage.getItem("token")
            }
        }

        axios
        .get(`${BASE_URL}/${APP_NAME}/restaurants`, headers)
        .then((res) => {
            setRestaurants(res.data)
        })
        .catch((err) => {
            alert("Error! Can't load the restaurants list")
        })
    }


    const states = { restaurants, isLoading }
    const setters = { setRestaurants,setIsLoading } 
    const getters = { getRestaurants }
    

    return(
        <GlobalContext.Provider value={{states, setters, getters}}>
            {props.children}
        </GlobalContext.Provider>
    )
}