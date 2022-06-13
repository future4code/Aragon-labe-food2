import React from "react";
import { useUnprotectedPage } from "../hooks/useUnprotectedPage";
import { useNavigate } from 'react-router-dom'
import { useForm } from "../hooks/useForm";

export const Login = () => {
    useUnprotectedPage()

    const navigate = useNavigate()
    const { form, onChange, clear} = useForm({email:"", password:""})

    return(
        <>
        </>
    )
}