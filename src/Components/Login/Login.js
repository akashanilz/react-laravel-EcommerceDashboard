import React from 'react'
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from '../axios';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';
function Login() {
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.push('/')
        }
    }, [])
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [user, setUser] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        setError(false)
        const data = {
            email: email,
            password: password
        }
        axios.post('/login', data).then((response) => {
            if(response.data.status === "401"){
                setError(true)
                console.log(response.data)
            }
            if(response.data.status == "200") {
                localStorage.setItem("user-info", JSON.stringify(response.data))
                console.log(response.data)
                setUser(response.data)
                history.push("/")
            }
        }).catch(err=>{console.log(err)})


    }
    return (
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <br />
                <br />
                <form onSubmit={handleSubmit} action="">
                    {error && <h1>Email or password incorrect</h1> }
                    <label htmlFor="">Email</label>
                    <input value={email} onChange={(e) => { setEmail(e.target.value) }} required className="form-control" name="email" type="text" />
                    <br />
                    <label htmlFor="">Password</label>
                    <input value={password} onChange={(e) => { setPassword(e.target.value) }} required className="form-control" name="password" type="password" />
                    <br />
                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login
