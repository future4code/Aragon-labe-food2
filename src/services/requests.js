import { BASE_URL } from "../constants/urls"

import axios from "axios"


export const login = (body, navigate, setIsLoading, setState) => {
    const url = `${BASE_URL}/login`

    axios
    .post(url, body)
    .then((res) => {
        localStorage.setItem('token', res.data.token)
        setState(res.data.user)
        setIsLoading(false)
        navigate('/restaurants')
    }).catch((err) => {
        alert(err.response.data.message)
        setIsLoading(false)
    })
}

export const signUp = (body, setter, navigate, setIsLoading) => {

    const url = `${BASE_URL}/signup`

    axios
    .post(url, body)
    .then(res => {
        localStorage.setItem('token', res.data.token)

        setter(res.data.user)
        navigate('/address')
        setIsLoading(false)

    }).catch(err => {
        setIsLoading(false)
        alert(err.response.data.message)
    })
}

export const addAddress = (body, setIsLoading, setUser, navigate) => {
    const url = `${BASE_URL}/address`
    const token = localStorage.getItem('token')
    const headers = {
        headers: {
            auth:token
        }
    }

    axios
    .put(url, body, headers)
    .then((res) => {
        localStorage.setItem('token', res.data.token)
        setUser(res.data.user)
        setIsLoading(false)
        alert("Endereço atualizado com sucesso!")
        navigate('/restaurants', { replace: true })
    }).catch(err => {
        alert(err.response.data.message)
        setIsLoading(false)
    })

}
// export const requestAddress = (form, navigate) => {

//     const headers = {
//         headers: {
//             auth: localStorage.getItem('token')
//         }
//     }
//     const body = {
//         street: form.street,
//         number: form.number,
//         neighbourhood: form.neighbourhood,
//         city: form.city,
//         state: form.state,
//         complement: form.complement,
//     }
//     axios.put(`${BASE_URL}/${APP_NAME}/address`, body, headers)
//     .then((res) =>{
//         localStorage.setItem('token', res.data.token)
//         alert("Endereço cadastrado com sucesso")
//         goToRestaurants(navigate)
//     })
//     .catch((err)=>{
//         console.log(err.message)
//     })
// }
