import React, { useState } from 'react'

const UserForm = (props) => {
    const [firstName, setfirstName] = useState("")
    const [firstNameError,setfirstNameError] = useState("")

    const [lastName, setlastName] = useState("")
    const [lastNameError, setlastNameError] = useState("")

    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const [confirmPassword, setconfirmPassword] = useState("")
    const [confirmPasswordError, setconfirmPasswordError] = useState("")

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const inputfirstName = (e) =>{
        setfirstName(e.target.value);
        if(e.target.value === ""){
            setfirstNameError("") 
        } else if(e.target.value.length <= 3){
            setfirstNameError( "First Name Should be more than 3 characters")
        }
        else{
            setfirstNameError("")
        }
    }

    
    const inputlastName = (e) =>{
        setlastName(e.target.value);
        if(e.target.value === ""){
            setlastNameError("")
        } else if(e.target.value.length <= 3){
            setlastNameError("Last Name Should be more than 3 characters")
        }
        else{
            setlastNameError("")
        }
    }
    const inputEmail = (e) =>{
        setEmail(e.target.value);
        if(e.target.value === ""){
            setEmailError("")
        } else if(e.target.value.length <= 3){
            setEmailError("Email Should be more than 3 characters")
        }
        else{
            setEmailError("")
        }
    }

    const inputPassword = (e) =>{
        setPassword(e.target.value);
        if(e.target.value === ""){
            setPasswordError("")
        } else if(e.target.value.length <= 3){
            setPasswordError("Password Should be more than 3 characters")
        }
        else{
            setPasswordError("")
        }
    }
    const inputConfirmPassword = (e) =>{
        setconfirmPassword(e.target.value);
        if(e.target.value === ""){
            setconfirmPasswordError("")
        } else if(e.target.value !== password){
            setconfirmPasswordError( "Password Should Match")
        }
        else{
            setconfirmPasswordError("")
        }
    }

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password }
        console.log("Welcome", newUser)
        setHasBeenSubmitted(true);
    }

    const formMessage = () =>{
        if(hasBeenSubmitted){
            return "Thank you for submitting the form!"
        }
        else{
            return "Welcome, please submit the form"
        }
    }
    return (
        <div>
            <form onSubmit={createUser}>
            <h3>{ formMessage() }</h3>
                <div>
                    <label>First Name:</label>
                    <input type="text" onChange= {inputfirstName} value={firstName} />
                    {
                        firstNameError ?
                        <p style={{color: 'red'}}>{firstNameError}</p> : ''
                    }
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" onChange={inputlastName} value={lastName}/>
                    {
                        lastNameError ?
                        <p style={{color: 'red'}}>{lastNameError}</p> : ''
                    }
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" onChange={inputEmail} value={email}/>
                    {
                        emailError ?
                        <p style={{color: 'red'}}>{emailError}</p> : ''
                    }
                </div>
                <div>
                    <label>Password:</label>
                    <input type="text" onChange={inputPassword} value={password}/>
                    {
                        passwordError ?
                        <p style={{color: 'red'}}>{passwordError}</p> : ''
                    }
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="text" onChange={inputConfirmPassword} value={confirmPassword}/>
                    {
                        confirmPasswordError ?
                        <p style={{color: 'red'}}>{confirmPasswordError}</p> : ''
                    }
                </div>
                <input type="submit" value="Create User"/>
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
