import React from 'react'
import {Link} from 'react-router-dom'
import './register.css'
import axios from "axios";
import { useRef } from "react";
import { useHistory } from "react-router";
function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useHistory();
    const url = 'http://localhost:8800/api/'
    const handleClick = async (e) => {
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value) {
          passwordAgain.current.setCustomValidity("Passwords don't match!");
        } else {
          const user = {
            username: username.current.value,
            email: email.current.value,
            password: password.current.value,
          };
          try {
            await axios.post(url+"auth/register", user);
            history.push("/login");
          } catch (err) {
            console.log(err);
          }
        }
      }; 

    return (
        <div className="login">
            <div className="login__wrapper">
                <div className="login__left">
                  <h3 className="login__logo">Social Network</h3>
                  <span className="loginDesc">
                      Connect with friends and the world around you on Social network
                  </span>
                </div>
                <div className="login__right">
                 <form className="login__box" onSubmit={handleClick}>
                     <input  ref={username} required type="text" placeholder="Username" className="login__Input" />
                     <input  ref={email} required type="email" placeholder="Email" className="login__Input" />
                     <input  ref={password} required type="password" placeholder="Password" className="login__Input" />
                     <input  ref={passwordAgain} required type="password" placeholder="Re-enter password " className="login__Input" />
                     <button className="login__button" type="submit">Sign Up</button>
                     <Link to="/login" style={{textAlign: 'center'}}>
                     <button className="login__registrationButton">
                         Log into Account
                     </button>
                     </Link>
                 </form>
                </div>
            </div>
          
        </div>
    )
}

export default Register
