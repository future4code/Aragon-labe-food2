import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useForm } from "../hooks/useForm";
import logo from "../assets/img/logo.png";
import { useUnprotectedPage } from "../hooks/useUnprotectedPage";
import { goToAddress, goToSignUp } from "../routes/coordinator";
import { Button, IconButton, Input, InputAdornment, OutlinedInput, TextField } from "@mui/material";
import { InputOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import { GlobalContext } from "../global/GlobalContext";


export const Login = () => {
    useUnprotectedPage()
    const navigate = useNavigate()
    const { form, onChange, clear} = useForm({email:"", password:""})
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const {requests} = useContext(GlobalContext)
    const {requestLogin} = requests


    const submitLogin = (e) => {
        e.preventDefault()
        requestLogin(form, navigate, setIsLoading)
        clear()
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }


   return(
        <main>
        <img src={logo} width={"150px"} alt="logo"/>
        <p>Entrar</p>
            <form onSubmit={submitLogin}>
                <TextField
                    label="E-mail"
                    id={'email'}
                    type={'email'}
                    name={'email'}
                    value={form.email}
                    onChange={onChange}
                    placeholder="email@email.com"
                    multiline
                    required
                />
                <br/>
                <OutlinedInput
                    label={"Senha"}
                    id={"password"}
                    placeholder={"Senha"}
                    type={showPassword? 'text' : 'password'}
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    required
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleShowPassword}
                                edge="end"
                            >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
                <br/>
                <Button 
                    variant="contained" 
                    color="primary"
                    sx={{
                        margin: '0 2vw',
                        backgroundColor: '#5CB646', 
                        color:'#000000', 
                        width:'100%'}} 
                        type="submit">Log In</Button>
            </form>
            <section>
                <h3>Não possui cadastro?</h3>
                <Button sx={{textDecoration:'underline', color:'#000000'}} onClick={() => goToSignUp(navigate)}>Clique aqui.</Button>
            </section>
        </main>
    )
}