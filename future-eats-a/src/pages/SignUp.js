import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { useUnprotectedPage } from "../hooks/useUnprotectedPage";
import { requestSignup } from "../services/requests";
import { goToLogin } from "../routes/coordinator";
import { TextField, Button } from "@mui/material";
import logo from '../assets/img/logo.png'
import { Header } from "../components/Header";

export const SignUp = () => {
    useUnprotectedPage()
    const navigate = useNavigate()
    const {form, clear, onChange} = useForm({name:"", email:"", password:"" })

    const signup = (e) =>{
        e.preventDefault()
        requestSignup(form, clear, navigate)
    }
    return(
        <>
            <Header/>
            <section>
                <img src={logo} width={"150px"}/>
                <h2>Create new user</h2>
                <form onSubmit={signup}>
                    <label htmlFor={"name"}>Name: </label>
                    <TextField
                        id={"name"}
                        name={"name"}
                        value={form.name}
                        onChange={onChange}
                        required
                    />
                    <br />
                    <label htmlFor={"email"}>E-mail: </label>
                    <TextField
                        id={"email"}
                        type={"email"}
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        required
                    />
                    <br />
                    <label htmlFor={"cpf"}>CPF: </label>
                    <TextField
                        type={'text'}
                        placeholder={'000.000.000-00'}
                        variant={'outlined'}
                        name={'cpf'}
                        value={form.cpf}
                        onChange={onChange}
                        inputProps={{ maxLength: 14 }}
                        pattern="[0-9]"
                        required
                    />
                    <br/>
                    <label htmlFor={"password"}>Password: </label>
                    <TextField
                        id={"password"}
                        type={"password"}
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        pattern={"^.{8,30}$"}
                        title={"Your password need to have at least 8 and at maximum 30 caracters"}
                        required
                    />
                    <br/>
                    <label htmlFor="password2">Confirm: </label>
                    <TextField
                        id={"password2"}
                        type={"password"}
                        name={"password2"}
                        onChange={onChange}
                        pattern={"^.{8,30}$"}
                        title={"Your password need to have at least 8 and at maximum 30 caracters"}
                        required
                    />
                    <br />
                    <Button
                        sx={{
                            backgroundColor:'#5CB646'
                        }}
                        variant="contained"
                        type={"submit"}>Create user</Button>
                </form>
            </section>
            
        </>
    )
}