import { Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { goToRestaurants } from "../routes/coordinator";
import styled from "styled-components";
import logo from "../assets/img/logo.png"
import { primaryColor } from "../constants/colors";

const Background = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    position: fixed;
`

export const ErrorPage = () => {
    const navigate = useNavigate()
    return(
        <Background>
        <img src={logo} width="100vw"/>
        <Typography
            margin={"10%"}
        >Ops, essa página não existe! Clique no botão para voltar ao site:</Typography>
        <Button 
            sx={{
                color:'#5cb646'
            }}
            onClick={()=> goToRestaurants(navigate)}>Voltar ao feed</Button>
        </Background>
    )
}