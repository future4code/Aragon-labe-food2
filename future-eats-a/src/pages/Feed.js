import React, { useEffect, useContext } from "react";
import { RestaurantCard } from "../components/RestaurantCard";
import { GlobalContext } from "../global/GlobalContext";
import { useProtectedPage } from "../hooks/useProtectedPage";

export const Feed = () => {
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
    }) : <p>Loading...</p>


    return(
        <>
        <p> Sou feed </p>
        {renderRestaurants}
        </>
    )
}