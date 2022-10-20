import { getAuth } from "firebase/auth";
import React, { useState } from 'react';
import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { auth } from './firebase';
import { getFirestore } from 'firebase/firestore/lite';
import { db } from './firebase';
import firebase from 'firebase/compat/app';;



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBza4axcxgbiKgH8oO3UAiuyFRcniHXVp8",
    authDomain: "kode49-1ee52.firebaseapp.com",
    projectId: "kode49-1ee52",
    storageBucket: "kode49-1ee52.appspot.com",
    messagingSenderId: "973845219775",
    appId: "1:973845219775:web:f65490776580da453e390a",
    measurementId: "G-V1YGKD8VSM"
  };


  
 

  




function Login() {
    const firebase = initializeApp(firebaseConfig);
    const auth = getAuth(firebase);




    const firebaseApp = initializeApp(firebaseConfig);
    db = getFirestore(firebaseApp);

    const firebaseConfig = {
        apiKey: "AIzaSyBza4axcxgbiKgH8oO3UAiuyFRcniHXVp8",
        authDomain: "kode49-1ee52.firebaseapp.com",
        projectId: "kode49-1ee52",
        storageBucket: "kode49-1ee52.appspot.com",
        messagingSenderId: "973845219775",
        appId: "1:973845219775:web:f65490776580da453e390a",
        measurementId: "G-V1YGKD8VSM"
      };
    


    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  

    
   

    const signIn = e => {
        e.preventDefault();
        

        firebaseApp.auth()
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate.push('/');
            })
            .catch(error => alert(error.message))

    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                navigate.push('/');
                }
            })
            .catch(error => alert(error.message))

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