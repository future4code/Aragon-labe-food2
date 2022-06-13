import { APP_NAME, BASE_URL } from "../constants/urls"
import { goToHome } from "../routes/coordinator"
import axios from "axios"

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
        goToHome(navigate)
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
    axios.post(`${BASE_URL}/${APP_NAME}/signup`, body)
    .then((res) => {
       localStorage.setItem("token", res.data.token)
       localStorage.setItem("email", form.email)
       alert("Usuário cadastrado com sucesso!")
       goToHome(navigate)
    })
    .catch((err) => {
        alert("Erro! Tente novamente.")
        clear()
    })
}
