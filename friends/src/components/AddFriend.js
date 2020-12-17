import React, { useState } from "react"

const initialForm = {
    id: Math.round(Math.random() * 10000),
    name: "",
    age: null,
    email: ""
}

function AddFriend(props) {
    const [ form, setForm ] = useState(initialForm)
    const { handleAdd } = props

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        const newFriend = {
            ...form,
            name: form.name,
            age: form.age,
            email: form.email
        }
        handleAdd(newFriend)
        setForm(initialForm)
    }

    return (
        <div className="add-friend">
            <h4>Add Friend</h4>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="name" onChange={handleChange} value={form.name} />
                <input type="integer" name="age" placeholder="age" onChange={handleChange} value={form.age} />
                <input type="email" name="email" placeholder="email" onChange={handleChange} value={form.email} />
                <button>submit</button>
            </form>
        </div>
    )
}

export default AddFriend
