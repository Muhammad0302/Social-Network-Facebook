import React from 'react'
import './login.css'
function Login() {
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
                 <div className="login__box">
                     <input type="email" placeholder="Email" className="login__Input" />
                     <input type="password" placeholder="Password" className="login__Input" />
                     <button className="login__button">Log In</button>
                     <span className="login__Forget">Forgot Password?</span>
                     <button className="login__registrationButton">
                         Create a New Account
                     </button>
                 </div>
                </div>
            </div>
          
        </div>
    )
}

export default Login
