import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    content: 'login',
    isSuccessSnackbarOpen: false,
    isErrorSnackbarOpen: false,
    successSnackbarMessage: null,
    errorSnackbarMessage: null,
    isAdminModalOpen: false,
    adminModalText: null,
    adminModalCallback: null,
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
    openAdminModal: (state, action) => {
      state.isAdminModalOpen = true;
      state.adminModalText = action.payload.text;
      state.adminModalCallback = action.payload.callback;
    },
    closeAdminModal: (state, action) => {
      state.isAdminModalOpen = false;
      state.adminModalText = null;
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
  closeErrorSnackbar,
  openAdminModal,
  closeAdminModal } = modalSlice.actions

export default modalSlice.reducer;