import React from 'react'
import { useContext, useRef } from "react";
import './login.css'
import {loginCall} from '../../apiCalls'
import {AuthContext} from '../../context/AuthContext'
import { CircularProgress } from "@material-ui/core";
import {Link} from 'react-router-dom'
function Login() {
    const email = useRef();
    const password = useRef();
    const {user,isFetching ,error ,dispatch } = useContext(AuthContext);
   const clickHandler = (e) =>{
    e.preventDefault()
    //  console.log(email.current.value)
    loginCall(
        { email: email.current.value, password: password.current.value },
        dispatch
      );
    }
    console.log(user)
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
                 <form className="login__box" onSubmit={clickHandler}>
                     <input ref={email} required type="email" placeholder="Email" className="login__Input" />
                     <input minLength="6" ref={password} required type="password" placeholder="Password" className="login__Input" />
                     <button className="login__button">
                     {isFetching ? (
                        <CircularProgress color="white" size="20px" />
                      ) : (
                        "Log In"
                       )}
                     </button>
                     <span className="login__Forget">Forgot Password?</span>
                     <Link to="/register" style={{textAlign: 'center'}}>
                     <button className="login__registrationButton">
                         Create a New Account
                     </button>
                     </Link>
                 </form>
                </div>
            </div>
          
        </div>
    )
}

export default Login
