import React from 'react';
import { useState } from 'react';
import AuthFormInput from '../UI/AuthFormInput';
import AuthFormPasswordInput from '../UI/AuthFormPasswordInput';
import closedarkicon from '../../assets/icons/close-dark.svg';
import { useSelector, useDispatch } from 'react-redux';
import { userRegistration, setRegistrationError, loadUserInfo } from '../../store/userSlice';
import { closeModal } from '../../store/modalSlice';

const SignUpForm = (props) => {

  const dispatch = useDispatch();
  const registrationError = useSelector(state => state.user.registrationError);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const changeEmailInput = (e) => {
    setEmail(e.target.value)
  }

  const changePasswordInput = (e) => {
    setPassword(e.target.value)
  }

  const changePasswordRepeatInput = (e) => {
    setRepeatPassword(e.target.value)
  }

  const submitForm = (e) => {
    e.preventDefault()
    if (password === repeatPassword) {
      dispatch(userRegistration({email, password}))
        .then((data) => {
          if (data.type === 'user/userRegistration/fulfilled') {
            dispatch(closeModal())
            dispatch(loadUserInfo(data.payload.id))
          }
        })
    }
    else {
      dispatch(setRegistrationError(`Passwords doesn't match`))
    }
  }

  return (
    <form 
      className="signupform"
      onSubmit={submitForm}
    >
      <button 
        className='close-modal-btn'
        type='button'
        onClick={props.closeAuthModal}
      >
        <img src={closedarkicon} alt="" />
      </button>
      <h2>Sign Up</h2>
      <div className="signupform-inputs">
          <AuthFormInput 
            label='Email'
            inputId='signupemail'
            placeholder='example@mail.com'
            onChange={changeEmailInput}
          />
          <AuthFormPasswordInput 
            label='Password'
            inputId='signuppassword'
            placeholder='**************'
            onChange={changePasswordInput}
          />
          <AuthFormPasswordInput 
            label='Repeat Password'
            inputId='signuprepeatpassword'
            placeholder='**************'
            onChange={changePasswordRepeatInput}
          />
      </div>
      <div className="error-message">
        {registrationError}
      </div>
      <button 
        className="signup-btn"
        type='submit'
      >
        Sign Up
      </button>
      <div className="toggle-text">
        Already have an account?
        <span
          onClick={props.changeForm}
        >
          Login
        </span>
      </div>
    </form>
  )
}

export default SignUpForm;