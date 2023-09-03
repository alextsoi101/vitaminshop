import React from 'react';
import { useState } from 'react';
import MyAccountInput from '../UI/MyAccountInput';
import AddUserPhoto from '../common/AddUserPhoto';
import ButtonLoader from '../loaders/ButtonLoader';
import { capitalise } from '../../utils/capitaliseFirstLetter';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserInfo, changeUserImage, removeUserImage } from '../../store/userSlice';
import { openSuccessSnackbar, openErrorSnackbar } from '../../store/modalSlice';

const AccountForm = () => {

  const dispatch = useDispatch();
  const userId = useSelector(state => state.user.userId);
  const firstNameDB = useSelector(state => state.user.firstName);
  const lastNameDB = useSelector(state => state.user.lastName);
  const emailDB = useSelector(state => state.user.email);
  const changeAccountDetailsError = useSelector(state => state.user.changeAccountDetailsError);
  const isUpdateInfoLoading =  useSelector(state => state.user.isUpdateInfoLoading);
  const isChangeImageLoading =  useSelector(state => state.user.isChangeImageLoading);

  const [imageFile, setImageFile] = useState(null);
  const [removeImage, setRemoveImage] = useState(false);
  const [firstName, setFirstName] = useState(firstNameDB);
  const [lastName, setLastName] = useState(lastNameDB);
  const [email, setEmail] = useState(emailDB);

  const changeFisrtName = (e) => {
    setFirstName(e.target.value)
  }

  const changeLastName = (e) => {
    setLastName(e.target.value)
  }

  const changeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (imageFile && !removeImage) {
      dispatch(changeUserImage({userId, userImage: imageFile}))
    }

    if (removeImage) {
      dispatch(removeUserImage(userId))
      setRemoveImage(false)
    }

    dispatch(updateUserInfo({userId, email, firstName, lastName}))
      .then((data) => {
        if (data.type === 'user/updateUserInfo/fulfilled') {
          dispatch(openSuccessSnackbar('User information updated!'))
        }
        if (data.type === 'user/updateUserInfo/rejected') {
          dispatch(openErrorSnackbar(data.error.message))
        }
      })
  }

  return (
    <form 
      className="accountform"
      onSubmit={(event) => handleSubmit(event)}
    >
      <h3>Account info</h3>
      <AddUserPhoto 
        setImageFile={setImageFile}
        setRemoveImage={setRemoveImage}
      />
      <div className="accountform-name">
        <MyAccountInput 
          label='First Name'
          value={capitalise(firstName)}
          inputId='accformfirstname'
          changeInput={changeFisrtName}
        />
        <MyAccountInput 
          label='Last Name'
          value={capitalise(lastName)}
          inputId='accformlastname'
          changeInput={changeLastName}
        />
      </div>
      <div className="accountform-email">
        <MyAccountInput 
          label='Email address'
          value={email}
          inputId='accformemail'
          changeInput={changeEmail}
        />
      </div>
      <div className="error-message">
        {changeAccountDetailsError}
      </div>
      <button
        className='submit-btn'
        type='submit'
      >
        {isUpdateInfoLoading || isChangeImageLoading ? <ButtonLoader /> : <div>Save changes</div>}
      </button>
    </form>
  )
}

export default AccountForm;