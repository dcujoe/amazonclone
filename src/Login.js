import React, { useState } from 'react';
import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import firebase from 'firebase/compat/app';;




function Login() {
    
    
    // functions
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

     const signIn = (data) => {
        const { email, password } = data;
        return new Promise((resolve, reject) => {
         firebase.auth.signInWithEmailAndPassword(email, password)
         .resolve(auth => {
            navigate.push('/');
        })
         .reject(console.error);
        });
       }


       const register = (data) => {
        const { email, password } = data;
        return new Promise((resolve, reject) => {
         firebase.auth.signInWithEmailAndPassword(email, password) 
         .resolve(auth => {
             if (auth) {
                navigate.push('/');
             }
            
        })
         .reject(console.error);
        });
       }





    return (
        <div className='login'> 
            <Link to='/' style={{ textDecoration: "none" }}>
                <div className="login__logo">
  
                    <h2 className="login__logoTitle">eSHOP</h2>
                </div>
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='login__signInButton' onClick={signIn}>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the eShop Website Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='login__registerButton' onClick={register}>Create your eShop Account</button>
            </div>
        </div>
    )
}

export default Login;