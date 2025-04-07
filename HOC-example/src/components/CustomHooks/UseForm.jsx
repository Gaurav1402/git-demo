import React, { useState } from 'react'

function useForm() {
    const [form, setForm] = useState({
        email: "", password: ""
    })
    const reset = () => {
        setForm({
            email: "", password: ""
        })
    }
    const handlechange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    return { form, reset, handlechange }
}
export default useForm
