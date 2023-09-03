import React from 'react';
import { useState } from 'react';
import MyAccountPasswordInput from '../UI/MyAccountPasswordInput';
import ButtonLoader from '../loaders/ButtonLoader';
import { useSelector, useDispatch } from 'react-redux';
import { changePassword } from '../../store/userSlice';
import { openSuccessSnackbar, openErrorSnackbar } from '../../store/modalSlice';

const ChangePasswordForm = () => {

  const dispatch = useDispatch();
  const userId = useSelector(state => state.user.userId);
  const changePasswordError = useSelector(state => state.user.changePasswordError);
  const isLoading =  useSelector(state => state.user.isChangePasswordLoading);


  const [currentPassword, setCurrentPassword] = useState(null);
  const [newPassword, setNewPassword] = useState(null);
  const [passwordRepeat, setPasswordRepeat] = useState(null);

  const changeCurrentPassword = (e) => {
    setCurrentPassword(e.target.value)
  }

  const changesetNewPassword = (e) => {
    setNewPassword(e.target.value)
  }

  const changeRepeatPassword = (e) => {
    setPasswordRepeat(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(changePassword({userId, currentPassword, newPassword, passwordRepeat}))
      .then((data) => {
        if (data.type === 'user/updateUserInfo/fulfilled') {
          dispatch(openSuccessSnackbar('User information updated!'))
        }
        if (data.type === 'user/changePassword/rejected') {
          dispatch(openErrorSnackbar(data.error.message))
        } 
      })
  }

  return (
    <form 
      className="changepasswordform"
      autoComplete='off'
      onSubmit={(event) => handleSubmit(event)}
    >
      <h3>Password change</h3>
      <div className="changepassword">
        <MyAccountPasswordInput 
          label='Current password *'
          inputId='acc-pwd'
          changeInput={changeCurrentPassword}
        />
        <MyAccountPasswordInput 
          label='New password *'
          inputId='acc-pwd-new'
          changeInput={changesetNewPassword}
        />
        <MyAccountPasswordInput 
          label='Confirm new password *'
          inputId='acc-pwd-repeat'
          changeInput={changeRepeatPassword}
        />
      </div>
      <div className="error-message">
        {changePasswordError}
      </div>
      <button
        className='submit-btn'
        type='submit'
      >
        {isLoading ? <ButtonLoader /> : <div>Save changes</div>}
      </button>
    </form>
  )
}

export default ChangePasswordForm;