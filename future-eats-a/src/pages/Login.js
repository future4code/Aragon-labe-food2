import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { useForm } from "../hooks/useForm";
import { requestLogin } from "../services/requests";
import logo from "../assets/img/logo.png";
import { useUnprotectedPage } from "../hooks/useUnprotectedPage";
import { goToFeed, goToSignUp } from "../routes/coordinator";
import { Button, TextField } from "@mui/material";


export const Login = () => {
    useUnprotectedPage()
    const navigate = useNavigate()
    const { form, onChange, clear} = useForm({email:"", password:""})


    const login = (e) => {
        e.preventDefault()
        requestLogin(form, navigate, clear)
        goToFeed(navigate)
    }

    return(
        <main>
        <img src={logo} width={"150px"}/>
        <h2>LOGIN</h2>
            <form onSubmit={login}>
                <label htmlFor="email">E-mail: </label>
                <TextField
                    id={'email'}
                    type={'email'}
                    name={'email'}
                    value={form.email}
                    onChange={onChange}
                    required
                />
                <br/>
                <label htmlFor="password">Password:</label>
                <TextField
                    id={"password"}
                    type={"password"}
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    required
                />
                <br/>
                <Button 
                    variant="contained" 
                    sx={{
                        margin: '0 2vw',
                        backgroundColor: '#5CB646', 
                        color:'#000000', 
                        width:'100%'}} 
                        type="submit">Log In</Button>
            </form>
            <section>
                <h3>Don't have an account yet?</h3>
                <Button sx={{textDecoration:'underline', color:'#000000'}} onClick={() => goToSignUp(navigate)}>Click Here</Button>
            </section>
        </main>
    )
}