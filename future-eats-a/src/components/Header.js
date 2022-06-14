import React from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { ArrowBackIos } from "@mui/icons-material";


export const Header = (props) => {
    const navigate = useNavigate()

    return(
        <header>
            <IconButton onClick={() => navigate(-1)}><ArrowBackIos/></IconButton>
            <hr/>
        </header>
    )
}