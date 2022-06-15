import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "./GlobalContext";
import { APP_NAME, BASE_URL } from "../constants/urls";
import axios from "axios"
import { goToSignUp, goToFeed, goToAddress } from "../routes/coordinator";



export const GlobalState = (props) => {
    //states
    const [ restaurants, setRestaurants ] = useState([])
    const [ isLoading, setIsLoading] = useState(false)
    const [ profile, setProfile ] = useState({})

    const getRestaurants = () => {
        const headers = {
            headers: {
                auth: localStorage.getItem("token")
            }
        }
        axios
        .get(`${BASE_URL}/${APP_NAME}/restaurants`, headers)
        .then((res) => {
            setRestaurants(res.data.restaurants)
        })
        .catch((err) => {
            alert("Error! Can't load the restaurants list")
        })
    }

    const getProfile = () => {
        const headers = {
            headers: {
                auth: localStorage.getItem("token")
            }
        }
        axios
        .get(`${BASE_URL}/${APP_NAME}/profile`, headers)
        .then((res) => {
            setProfile(res.data)
        })
        .catch((err) => {
            alert("Error! Can't load profile")
        })
    }



    const states = { restaurants, isLoading, profile }
    const setters = { setRestaurants,setIsLoading, setProfile } 
    const getters = { getRestaurants, getProfile }


    return(
        <GlobalContext.Provider value={{states, setters, getters}}>
            {props.children}
        </GlobalContext.Provider>
    )
}