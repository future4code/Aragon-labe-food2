import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const useRequest = (url, initialData, navigate) => {
    const [data, setData] = useState(initialData)

    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.get(url, {
            headers: {
                auth: token,
                // 'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                alert(err.response.data.message)
                navigate('/address')

            })
    }, [url])


    return [data]
}
