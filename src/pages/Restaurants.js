import { CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useContext } from "react";
import { RestaurantCard } from "../components/RestaurantCard";
import { GlobalContext } from "../global/GlobalContext";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { Header } from '../components/Header'
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";

export const Restaurants = () => {
    useProtectedPage()
    const { states, getters, setters } = useContext(GlobalContext)
    const { restaurants } = states
    const { setRestaurants } = setters
    const { getRestaurants } = getters

    useEffect(() => {
        getRestaurants()
    }, [])

    const renderRestaurants = restaurants.length > 0? restaurants.map ((restaurant) => {
        return (
            <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
            />
        )
    }) : <CircularProgress style={{"color": "#5CB646"}}/>


    return(
        <>
        <Header
            title="FutureEats"
        />
        <Typography
            
        >Lista de restaurantes</Typography>
        {renderRestaurants}
        <hr/>
        <Footer/>
        </>
    )
}