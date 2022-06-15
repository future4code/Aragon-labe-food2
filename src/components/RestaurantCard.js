import React from "react";

export const RestaurantCard = (props) => {
    const { logoUrl, name, deliveryTime, shipping } = props.restaurant;

    return(
        <>
        <img src={logoUrl} alt="logo-restaurante"/>
        <h2>{name}</h2>
        <p>{deliveryTime}</p>
        <p>R${shipping.toFixed(2)}</p>
        </>
    )
}