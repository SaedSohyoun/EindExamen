// src/pages/Contact.jsx
import React, { useState } from 'react'

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' })

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        alert('Bericht verzonden!')
        setForm({ name: '', email: '', message: '' })
    }

    return (
        <div className="container">
            <h1>Contact</h1>
            <form onSubmit={handleSubmit} style={{ maxWidth: '600px' }} className="card">
                <label>Naam:</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required />

                <label>Email:</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required />

                <label>Bericht:</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows="5" />

                <button type="submit">Verstuur</button>
            </form>
        </div>
    )
}

export default Contact
