import React, { useState } from 'react';
import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import { auth } from './firebase';
import firebase from 'firebase/compat/app';


function login() {

    var db = firebase.firestore();
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
  
        if (!user == '') {
          sessionStorage.setItem("userEmail", user.email);
          var sessionEmail = sessionStorage.getItem("userEmail");
          var params = { action: "session_firebase", sessionEmail: sessionEmail };
  
          $.ajax({
            method: 'POST',
            url: ajax_url,
            dataType: 'JSON',
            data: params,
            success: function (response) {
              //var resp = JSON.parse(response);
              if (response.type == true) {
                alert(response.resMessage);
                window.location.replace("http://192.168.1.223/wordpress/dashboard/");
              } else {
                alert("Something went wrong..!");
                return false;
              }
            }
          });
          return false;
        }
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });






function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        // prevent default refresh when you sign in
        e.preventDefault();

        auth(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user) {
                navigate.push('/');
                }
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
                    
                    <h2 className="login__logoTitle">kode49</h2>
                </div>
            </Link>

            <div className='login__container'>
                <h1 className="signin">Sign-in</h1>

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