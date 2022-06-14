import { APP_NAME, BASE_URL } from "../constants/urls"
import { goToHome, goToFeed } from "../routes/coordinator"
import axios from "axios"

export const requestLogin = (form, clear, navigate) => {
    const body = {
        email: form.email,
        password: form.password
    }

    axios
    .post(`${BASE_URL}/${APP_NAME}/login`, body)
    .then((res)=> {
        //aqui eu armazeno no localStorage um token de login/identificação e o email do usuário
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("email", form.email)
        alert("Successful login!")
        //Em seguida, redireciono ele para a página de Feed
        goToFeed(navigate)
    })
    .catch((err)=> {
        alert("Something got wrong, try again!")
        clear()
    })
};

export const requestSignup =(form, clear, navigate) => {
    const body = {
        name: form.name,
        email: form.email,
        cpf: form.cpf,
        password: form.password
    }

    axios
    .post(`${BASE_URL}/${APP_NAME}/signup`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("email", form.email)
        alert("Your user was created, welcome to our community!")
        goToFeed(navigate)
    })
    .catch((err) => {
        alert("Something got wrong, try again!")
        console.log(err.message)
        clear()
    })
}

