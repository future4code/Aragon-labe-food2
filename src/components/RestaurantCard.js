import React from "react";

export const RestaurantCard = (props) => {
    const { logoUrl, name, deliveryTime, shipping } = props.restaurant;

    return(
        <>
        <img  width="200vw" src={logoUrl} alt="logo-restaurante"/>
        <h2>{name}</h2>
        <p>Tempo estimado de entrega:{deliveryTime} minutos</p>
        <p>R$ {shipping.toFixed(2)}</p>
        </>
    )
}