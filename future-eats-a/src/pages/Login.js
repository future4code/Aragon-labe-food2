import React from "react";
import { useNavigate } from 'react-router-dom';
import { useForm } from "../hooks/useForm";
import { requestLogin } from "../services/requests";
import logo from "../img/logo.svg";

export const Login = () => {
    const navigate = useNavigate()
    const { form, onChange, clear} = useForm({email:"", password:""})

    const login = (e) => {
        e.preventDefault()
        requestLogin(form, navigate, clear)
    }

    return(
        <main>
        <img src={logo}/>
        <p> Sou Login </p>
        </main>
    )
}