import React from 'react';
import { useEffect } from 'react';
import ModalWindow from '../../components/MUI/ModalWindow';
import LoginForm from '../../components/forms/LoginForm';
import SignUpForm from '../../components/forms/SignUpForm';
import { useSelector, useDispatch } from 'react-redux';
import { openModal, closeModal, contentLogin, contentSignUp } from '../../store/modalSlice';
import { setLoginError, setRegistrationError } from '../../store/userSlice';

function AuthModal() {

  const isLogin = useSelector(state => state.user.isLogin)

  useEffect(() => {
    if (isLogin) {
      closeAuthModal()
    }
  }, [isLogin])

  const isModalOpen = useSelector(state => state.modal.isOpen)
  const modalContent = useSelector(state => state.modal.content)

  const dispatch = useDispatch()

  const openAuthModal = () => {
    dispatch(openModal())
  }

  const closeAuthModal = () => {
    dispatch(closeModal())
    dispatch(setLoginError(''))
    dispatch(setRegistrationError(''))
  }

  const changeToSignUp = () => {
    dispatch(contentSignUp())
    dispatch(setLoginError(''))
  }

  const changeToLogin = () => {
    dispatch(contentLogin())
    dispatch(setRegistrationError(''))
  }

  return (
      <ModalWindow
        isOpen={isModalOpen}
        openModal={openAuthModal}
        closeModal={closeAuthModal}
      >
        {modalContent === 'login' && 
          <LoginForm 
            changeForm={changeToSignUp}
            closeAuthModal={closeAuthModal}
          />
        }
        {modalContent === 'signup' && 
          <SignUpForm 
            changeForm={changeToLogin}
            closeAuthModal={closeAuthModal}
          />
        }
      </ModalWindow>
  );
}

export default AuthModal;
