import React from "react";
import { useNavigate } from "react-router-dom";
import { IconButton, Typography } from "@mui/material";
import { ArrowBackIos } from "@mui/icons-material";


export const Header = (props) => {
    const navigate = useNavigate()

    const renderButton = { }

    return(
        <header>
            {/* //Colocar icones */}
            <Typography
              variant="body1"
            > {props.title} </Typography>

            <IconButton onClick={() => navigate(-1)}><ArrowBackIos/></IconButton>
            <hr/>
        </header>
    )
} 
