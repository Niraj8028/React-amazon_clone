import { Button } from '@mui/material'
import React from 'react'
import './Signin.css'

function Signin() {
    return (
        <div className='signin'>
            <img className='logo' src='https://thumbs.dreamstime.com/b/simple-vector-filled-flat-amazon-icon-logo-solid-black-pictogram-isolated-white-background-amazon-logo-159029074.jpg' />
            <div className='signin_container'>
                <h1 className='title'>Sign In</h1>
                <div className='signin__form'>
                    <form>
                        <h5>E-mail</h5>
                        <input type="text"></input>
                        <h5>Password</h5>
                        <input type="password"></input>
                        <button>Sign in</button>
                        <p>By signing-in you agree to Amazons Conditions of Use & Sale. Please see our Privacy Notice,.our cookies Notice and Interest-based Ads Notice</p>
                        <button>Create your Amazon Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signin
