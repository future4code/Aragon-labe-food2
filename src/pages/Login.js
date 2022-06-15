import React from "react";
import { useNavigate } from 'react-router-dom';
import { useForm } from "../hooks/useForm";
import { requestLogin } from "../services/requests";
import logo from "../assets/img/logo.png";
import { useUnprotectedPage } from "../hooks/useUnprotectedPage";
import { goToAddress, goToSignUp } from "../routes/coordinator";
import { Button, TextField } from "@mui/material";
import { VisibilityOff } from "@mui/icons-material";
import userEvent from "@testing-library/user-event";


export const Login = () => {
    useUnprotectedPage()
    const navigate = useNavigate()
    const { form, onChange, clear} = useForm({email:"", password:""})


    const login = (e) => {
        e.preventDefault()
        requestLogin(form, navigate, clear)
    //     // return addressToken !== null
    // //   ? goToRestaurants(navigate)
    // //   : goToSignUpAdressPage(navigate)
    // }

        // useEffect(() => {
        //     const hasAdddress = 
        //     if ( addressToken === true ) {
        //         goToRestaurants(navigate)
        //     } else {
        //         goToAddress(navigate)
        //     }
        // })
    }


   return(
        <main>
        <img src={logo} width={"150px"} alt="logo"/>
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