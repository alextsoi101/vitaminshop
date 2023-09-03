import React from 'react';
import AccountDropdown from './AccountDropdown';
import { useSelector, useDispatch } from 'react-redux';
import { openModal, contentLogin, contentSignUp } from '../../store/modalSlice';

const LoginToggle = () => {

  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.user.isLogin);

  const openLoginForm = () => {
    dispatch(contentLogin())
    dispatch(openModal())
  }

  const openSignUpForm = () => {
    dispatch(contentSignUp())
    dispatch(openModal())
  }

  return (
    <div className="logintoggle">

      { isLogin ? <AccountDropdown /> :
        <div>
          <button
            className="login-btn"
            onClick={openLoginForm}
          >
            Login
          </button>
          <button
            className="signup-btn"
            onClick={openSignUpForm}
          >
            Sign Up
          </button>
        </div>
      }

    </div>
  )
}

export default LoginToggle;