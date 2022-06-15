import React from "react";
import logo from '../assets/img/logo-branca.png'
import { useUnprotectedPage } from "../hooks/useUnprotectedPage";
import { goToLogin } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { CircularProgress, Stack } from "@mui/material";


export const InitialPage = () => {
    useUnprotectedPage()
    const navigate = useNavigate()

    setTimeout(() => {
        goToLogin(navigate)
    }, 1000)

    return(
        <Stack
            alignItems='center'
        >
            <img src={logo} width={"150px"} alt="Future Eats Logo"/>
            <br/>
            <CircularProgress style={{"color": "#5CB646"}} size={50}/>
        </Stack>
    )
}