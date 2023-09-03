import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    content: 'login',
    isSuccessSnackbarOpen: false,
    isErrorSnackbarOpen: false,
    successSnackbarMessage: null,
    errorSnackbarMessage: null
  },
  reducers: {
    openModal: state => {
      state.isOpen = true
    },
    openLoginModal: state => {
      state.isOpen = true;
      state.content = 'login';
    },
    openSignUpModal: state => {
      state.isOpen = true;
      state.content = 'signup';
    },
    closeModal: state => {
      state.isOpen = false
    },
    contentLogin: state => {
      state.content = 'login'
    },
    contentSignUp: state => {
      state.content = 'signup'
    },
    openSuccessSnackbar: (state, action) => {
      state.isSuccessSnackbarOpen = true;
      state.successSnackbarMessage = action.payload;
      state.isErrorSnackbarOpen = false;
    },
    openErrorSnackbar: (state, action) => {
      state.isErrorSnackbarOpen = true;
      state.errorSnackbarMessage = action.payload;
      state.isSuccessSnackbarOpen = false;
    },
    closeSuccessSnackbar: state => {
      state.isSuccessSnackbarOpen = false;
      state.successSnackbarMessage = null;
    },
    closeErrorSnackbar: state => {
      state.isErrorSnackbarOpen = false;
      state.errorSnackbarMessage = null;
    },
  }
})

export const { 
  openModal, 
  openLoginModal, 
  openSignUpModal, 
  closeModal, 
  contentLogin, 
  contentSignUp,
  openSuccessSnackbar,
  openErrorSnackbar,
  closeSuccessSnackbar,
  closeErrorSnackbar } = modalSlice.actions

export default modalSlice.reducer;