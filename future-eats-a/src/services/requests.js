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