import React from "react";
import AdminPanelInput from "../components/UI/AdminPanelInput";
import logo from '../../assets/images/logo.png'
import '../styles/pages/loginpage.scss';

const LoginPage = () => {
  return (
    <div className="loginpage">
      <div className="login-container">
        <div className="login-image">
          <img src={logo} alt="logo" />
        </div>
        <div className="login-inputs">
          <div>
            <AdminPanelInput 
              label='Email'
              placeholder='Email...'
            />
          </div>
          <div>
            <AdminPanelInput 
              label='Password'
              placeholder='Password...'
              type='password'
            />
          </div>
        </div>
        <div className="login-button">
          <button>
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;