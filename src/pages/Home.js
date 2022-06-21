import React from "react";
import styled from "styled-components";
import logo from '../assets/img/logo-branca.png'
import { useUnprotectedPage } from "../hooks/useUnprotectedPage";
import { goToLogin } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { CircularProgress, Stack } from "@mui/material";

const Background = styled.div`
    background-color: #000000;
    z-index: 2;
    height: 100vh;
    width: 100vw;
    border: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 0 black;
`


export const Home = () => {
    useUnprotectedPage()
    const navigate = useNavigate()

    setTimeout(() => {
        goToLogin(navigate)
    }, 1000)

    return(
        <Background>
            <img src={logo} width={"150px"} alt="Future Eats Logo"/>
            <br/>
            <CircularProgress style={{"color": "#5CB646"}} size={50}/>
        </Background>
    )
}