import { APP_NAME, BASE_URL } from "../constants/urls"
import { goToAddress, goToRestaurants } from "../routes/coordinator"
import axios from "axios"
import { GlobalState } from "../global/GlobalState"
import { useContext } from "react"
import { GlobalContext } from "../global/GlobalContext"

export const requestLogin = (form, navigate, clear) => {
    const body = {
        email: form.email,
        password: form.password
    }
    axios.post(`${BASE_URL}/${APP_NAME}/login`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("email", form.email)
        alert("Login realizado!")
    })
    .catch((err) => {
        alert("Senha e/ou email inválidos! Tente novamente!")
        clear()
    })
}

export const requestSignUp = (form, navigate, clear) => {
    const body = {
        name: form.name,
        email: form.email,
        cpf: form.cpf,
        password: form.password
    }
    console.log(form)
    axios.post(`${BASE_URL}/${APP_NAME}/signup`, body)
    .then((res) => {
       localStorage.setItem("token", res.data.token)
       localStorage.setItem("email", form.email)
       alert("Usuário cadastrado com sucesso!")
       goToAddress(navigate)
    })
    .catch((err) => {
        alert("Erro! Tente novamente.")
        clear()
    })
}

export const requestAddress = (form, navigate) => {

    const headers = {
        headers: {
            auth: localStorage.getItem('token')
        }
    }
    const body = {
        street: form.street,
        number: form.number,
        neighbourhood: form.neighbourhood,
        city: form.city,
        state: form.state,
        complement: form.complement,
    }
    axios.put(`${BASE_URL}/${APP_NAME}/address`, body, headers)
    .then((res) =>{
        localStorage.setItem('token', res.data.token)
        alert("Endereço cadastrado com sucesso")
        goToRestaurants(navigate)
    })
    .catch((err)=>{
        console.log(err.message)
    })
}
