import React, { useState } from 'react'

const UserForm = (props) => {
    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password }
        console.log("Welcome", newUser)
    }
    return (
        <div>
            <form onSubmit={createUser}>
                <div>
                    <label>First Name:</label>
                    <input type="text" onChange={(e) => setfirstName(e.target.value)} />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" onChange={(e) => setlastName(e.target.value)}></input>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="text" onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="text" onChange={(e) => setconfirmPassword(e.target.value)}></input>
                </div>
            </form>
            <div>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </div>
    )
}

export default UserForm