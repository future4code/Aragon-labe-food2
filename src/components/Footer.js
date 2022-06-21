import { IconButton, Stack } from "@mui/material";
import { Home } from "@mui/icons-material";
import React from "react";
import { goToCart, goToProfile, goToRestaurants } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";
import cart from '../assets/icons/cart.png'
import avatar from '../assets/icons/avatar.png'
import homepage from '../assets/icons/homepage.png'
import { alignProperty } from "@mui/material/styles/cssUtils";

export const Footer = () => {
    const navigate= useNavigate()
    return(
        <Stack
            sx={{
                display: 'flex',
                flexDirection:'row',
                justifyContent:"space-between",
                margin:'0 2vw'
            }}
        >
        <IconButton onClick={()=> goToRestaurants(navigate)}>
            <img src={homepage} width="20vw"/>
        </IconButton>
        <IconButton onClick={()=> goToCart(navigate)}>
            <img src={cart} width="20vw"/>
        </IconButton>
        <IconButton onClick={()=> goToProfile(navigate)}>
            <img src={avatar} width="20vw"/>
        </IconButton>
        </Stack>
    )
}