import React, { useState } from "react"

export default function Form() {

    const [form, setForm] = useState({
        name: '',
        lastName: '',
        email: '',
        password: ''
    })

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(form);
    }

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>){
        setForm({...form,[e.target.name]: e.target.value })
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <input
                placeholder="Name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleInputChange}
            />

            <input
                placeholder="Last Name"
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleInputChange}
            />

            <input
                placeholder="E-mail"
                type="text"
                name="email"
                value={form.email}
                onChange={handleInputChange}
            />

            <input
                placeholder="Password"
                type="password"
                name="password"
                value={form.password}
                onChange={handleInputChange}
            />

            <button type="submit">Enviar Form</button>
        </form>
    )
}