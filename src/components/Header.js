import React from "react";
import { useNavigate } from "react-router-dom";
import { IconButton, Typography } from "@mui/material";
import { ArrowBackIos } from "@mui/icons-material";
import styled from 'styled-components'

const HeaderContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`


export const Header = (props) => {
    const navigate = useNavigate()

    return(
        <>
        <HeaderContainer>
            {/* //Colocar icones */}
            <IconButton onClick={() => navigate(-1)}><ArrowBackIos/></IconButton>
            <Typography
              variant="body1"
            > {props.title} </Typography>
        </HeaderContainer>
        <hr/>
        </>
    )
} 
