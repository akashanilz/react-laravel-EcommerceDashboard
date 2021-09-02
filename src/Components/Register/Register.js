import React from 'react'
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from '../axios';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';
function Register() {
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.push('/')
        }
    }, [])
    const history = useHistory()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [validationError, setValidationError] = useState('')
    const [password, setPassword] = useState('')
    const [mobile, setMobile] = useState('')
    const [user, setUser] = useState('')
    const [error, setError] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            name: name,
            email: email,
            password: password,
            mobile: mobile
        }
        axios.post('/register', data).then((response) => {
            if(response.data.status === "401"){
                setError(true)
                console.log(response.data)
            }
            if(response.data.status === "200") {
                localStorage.setItem("user-info", JSON.stringify(response.data))
                console.log(response.data)
                setUser(response.data)
                history.push("/")
            }
            console.log(response.status)
            if (response.status === "400"){
                console.log(response.data)
                setValidationError(response.data)
             }
        }).catch(err=>{console.log(err)})


    }
    return (
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <br />
                <br />
                {user && <h1> {user.email} </h1>}
                <form onSubmit={handleSubmit} action="">
                    <label htmlFor="">Name</label>
                    <input value={name} onChange={(e) => { setName(e.target.value) }} required className="form-control" name="name" type="text" />
                    <br />
                    <label htmlFor="">Email</label>
                    <input value={email} onChange={(e) => { setEmail(e.target.value) }} required className="form-control" name="email" type="text" />
                    {validationError.email ? <p>{validationError.email}</p> :"" }
                    <br />
                    <label htmlFor="">Mobile</label>
                    <input value={mobile} onChange={(e) => { setMobile(e.target.value) }} required className="form-control" name="mobile" type="text" />
                    <br />
                    <label htmlFor="">Password</label>
                    <input value={password} onChange={(e) => { setPassword(e.target.value) }} required className="form-control" name="password" type="password" />
                    {validationError.password ? <p>{validationError.password}</p> :"" }
                    <br />
                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Register
