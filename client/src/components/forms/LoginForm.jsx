import React from 'react';
import { useState } from 'react';
import AuthFormInput from '../UI/AuthFormInput';
import AuthFormPasswordInput from '../UI/AuthFormPasswordInput';
import closedarkicon from '../../assets/icons/close-dark.svg';
import { useSelector, useDispatch } from 'react-redux';
import { userLogin, loadUserInfo, loadUserAddress } from '../../store/userSlice';
import { closeModal } from '../../store/modalSlice';

const LoginForm = (props) => {

  const dispatch = useDispatch();
  const loginError = useSelector(state => state.user.loginError);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeEmailInput = (e) => {
    setEmail(e.target.value)
  }

  const changePasswordInput = (e) => {
    setPassword(e.target.value)
  }

  const submitForm = (e) => {
    e.preventDefault()

    dispatch(userLogin({email, password}))
      .then((data) => {
        if (data.type === 'user/userLogin/fulfilled') {
          dispatch(closeModal())
          dispatch(loadUserInfo(data.payload.id))
          dispatch(loadUserAddress(data.payload.id))
        }
      })
  }

  return (
    <form 
      className="loginform"
      onSubmit={submitForm}
    >
      <button 
        className='close-modal-btn'
        type='button'
        onClick={props.closeAuthModal}
      >
        <img src={closedarkicon} alt="" />
      </button>
      <h2>Log In</h2>
      <div className="loginform-inputs">
          <AuthFormInput 
            label='Email'
            inputId='loginemail'
            placeholder='example@mail.com'
            onChange={changeEmailInput}
          />
          <AuthFormPasswordInput
            label='Password'
            inputId='loginpassword'
            placeholder='**************'
            onChange={changePasswordInput}
          />
      </div>
      <div className='error-message'>
        {loginError}
      </div>
      <button 
        className="login-btn"
        type='submit'
      >
        Log In
      </button>
      <div className="toggle-text">
        Don't have an account?
        <span
          onClick={props.changeForm}
        >
          Sign Up
        </span>
      </div>
    </form>
  )
}

export default LoginForm;