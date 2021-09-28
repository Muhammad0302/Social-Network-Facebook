import React from 'react'
import './register.css'
function Register() {
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
                     <input type="text" placeholder="Username" className="login__Input" />
                     <input type="email" placeholder="Email" className="login__Input" />
                     <input type="password" placeholder="Password" className="login__Input" />
                     <input type="password" placeholder="Re-enter password " className="login__Input" />
                     <button className="login__button">Sign Up</button>
                     <button className="login__registrationButton">
                         Log into Account
                     </button>
                 </div>
                </div>
            </div>
          
        </div>
    )
}

export default Register
