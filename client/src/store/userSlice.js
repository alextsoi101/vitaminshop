import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { 
  registration,
  login,
  check,
  fetchUserInfo,
  updateUser,
  updateUserImage,
  deleteUserImage,
  updatePassword,
  createAddress,
  fetchAddress } from '../api/userApi';

const initialState = {
  isLogin: false,
  userId: null,
  role: null,
  userImage: null,
  email: null,
  firstName: null,
  lastName: null,
  address: null,
  isAuthModalOpen: false,
  isLoading: true,
  isUpdateInfoLoading: false,
  isChangeImageLoading: false,
  isChangePasswordLoading: false,
  isLoadAddressLoading: false,
  isCreateAddressLoading: false,
  loginError: '',
  registrationError: '',
  changePasswordError: '',
  changeAccountDetailsError: '',
  createAddressError: '',
}

export const userCheck = createAsyncThunk(
  'user/auth',
  async () => {
    try {
      const response = await check();
      return response
    } catch (error) {
      throw error.response.data
    }
  }
)

export const userRegistration = createAsyncThunk(
  'user/userRegistration',
  async (arg) => {
    try {
      const response = await registration(arg.email, arg.password);
      return response;
    } catch (error) {
      throw error.response.data
    }
  }
)

export const userLogin = createAsyncThunk(
  'user/userLogin',
  async (arg) => {
    try {
      const response = await login(arg.email, arg.password);
      return response;
    } catch (error) {
      throw error.response.data
    }
  }
)

export const userLogout = createAsyncThunk(
  'user/userLogout',
  async () => {
    localStorage.removeItem('token');
  }
)

export const loadUserInfo = createAsyncThunk(
  'user/loadUserInfo',
  async (userId) => {
    try {
      const response = await fetchUserInfo(userId);
      return response;
    } catch (error) {
      throw error.response.data
    }
  }
)

export const updateUserInfo = createAsyncThunk(
  'user/updateUserInfo',
  async (arg) => {
    try {
      const response = await updateUser(arg.userId, arg.email, arg.firstName, arg.lastName);
      return response;
    } catch (error) {
      throw error.response.data
    }
  }
)

export const changeUserImage = createAsyncThunk(
  'user/changeUserImage',
  async (arg) => {
    try {
      const response = await updateUserImage(arg.userId, arg.userImage);
      return response;
    } catch (error) {
      throw error.response.data
    }
  }
)

export const removeUserImage = createAsyncThunk(
  'user/removeUserImage',
  async (userId) => {
    try {
      const response = await deleteUserImage(userId);
      return response;
    } catch (error) {
      throw error.response.data
    }
  }
)

export const changePassword = createAsyncThunk(
  'user/changePassword',
  async (arg) => {
    try {
      const response = await updatePassword(arg.userId, arg.currentPassword, arg.newPassword, arg.passwordRepeat);
      return response;
    } catch (error) {
      throw error.response.data
    }
  }
)

export const createUserAddress = createAsyncThunk(
  'user/createUserAddress',
  async (arg) => {
    try {
      const response = await createAddress(
        arg.userId, 
        arg.firstName, 
        arg.lastName, 
        arg.country, 
        arg.addressLineOne, 
        arg.addressLineTwo, 
        arg.city, 
        arg.state, 
        arg.zip
      );
      return response;
    } catch (error) {
      throw error.response.data
    }
  }
)

export const loadUserAddress = createAsyncThunk(
  'user/loadUserAddress',
  async (userId) => {
    try {
      const response = await fetchAddress(userId);
      return response;
    } catch (error) {
      throw error.response.data
    }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsLogin: (state, action) => {
      state.isLogin = action.payload
    },
    setLoginError: (state, action) => {
      state.loginError = action.payload
    },
    setRegistrationError: (state, action) => {
      state.registrationError = action.payload
    },
    setUserImage: (state, action) => {
      state.userImage = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userCheck.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(userCheck.fulfilled, (state, action) => {
        state.isLogin = true;
        state.userId = action.payload.id;
        state.email = action.payload.email;
        state.userImage = action.payload.image;
        state.role = action.payload.role;
        state.isLoading = false;
      })
      .addCase(userCheck.rejected, (state, action) => {
        state.isLogin = false;
        state.userId = null;
        state.email = null;
        state.role = null;
        state.isLoading = false;
      })
      .addCase(userRegistration.pending, (state) => {
       state.isLoading = true;
      })
      .addCase(userRegistration.fulfilled, (state, action) => {
        state.isLogin = true;
        state.userId = action.payload.id;
        state.email = action.payload.email;
        state.address = null;
        state.registrationError = '';
        state.isLoading = false;
      })
      .addCase(userRegistration.rejected, (state, action) => {
        state.registrationError = action.error.message;
        state.isLoading = false;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.isLogin = true;
        state.userId = action.payload.id;
        state.email = action.payload.email;
        state.role = action.payload.role;
        state.loginError = '';
        state.isLoading = false;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loginError = action.error.message;
        state.isLoading = false;
      })
      .addCase(userLogout.fulfilled, (state, action) => {
        state.isLogin = false;
        state.address = null;
        state.loginError = '';
        state.registrationError = '';
        state.changeAccountDetailsError = '';
        state.changePasswordError = '';
        state.createAddressError = '';
      })
      .addCase(loadUserInfo.pending, (state, action) => {
        state.isLogin = false;
        state.isLoading = true;
      })
      .addCase(loadUserInfo.fulfilled, (state, action) => {
        state.isLogin = true;
        state.userId = action.payload.id;
        state.email = action.payload.email;
        state.firstName = action.payload.firstname;
        state.lastName = action.payload.lastname;
        state.userImage = action.payload.image;
        state.role = action.payload.role;
        state.loginError = '';
        state.isLoading = false;
      })
      .addCase(updateUserInfo.pending, (state, action) => {
        state.isLoading = true;
        state.isUpdateInfoLoading = true;
      })
      .addCase(updateUserInfo.fulfilled, (state, action) => {
        state.email = action.payload.email;
        state.password = action.payload.password;
        state.firstName = action.payload.firstname;
        state.lastName = action.payload.lastname;
        state.role = action.payload.role;
        state.isLoading = false;
        state.isUpdateInfoLoading = false;
        state.changeAccountDetailsError = '';
      })
      .addCase(updateUserInfo.rejected, (state, action) => {
        state.changeAccountDetailsError = action.error.message
        state.isLoading = false;
        state.isUpdateInfoLoading = false;
      })
      .addCase(changeUserImage.pending, (state, action) => {
        state.isChangeImageLoading = true;
      })
      .addCase(changeUserImage.fulfilled, (state, action) => {
        state.userImage = action.payload;
        state.isChangeImageLoading = false;
      })
      .addCase(changeUserImage.rejected, (state, action) => {
        state.isChangeImageLoading = false;
      })
      .addCase(removeUserImage.fulfilled, (state, action) => {
        state.userImage = action.payload;
      })
      .addCase(changePassword.pending, (state, action) => {
        state.isChangePasswordLoading = true;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.email = action.payload.email;
        state.password = action.payload.password;
        state.firstName = action.payload.firstname;
        state.lastName = action.payload.lastname;
        state.userImage = action.payload.image;
        state.role = action.payload.role;
        state.isLoading = false;
        state.isChangePasswordLoading = false;
        state.changePasswordError = '';
        state.loginError = '';
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.changePasswordError = action.error.message;
        state.isLoading = false;
        state.isChangePasswordLoading = false;
      })
      .addCase(loadUserAddress.pending, (state, action) => {
        state.isLoadAddressLoading = true;
      })
      .addCase(loadUserAddress.fulfilled, (state, action) => {
        state.address = action.payload;
        state.isLoadAddressLoading = false;
      })
      .addCase(loadUserAddress.rejected, (state, action) => {
        state.address = null;
        state.createAddressError = action.error.message;
        state.isLoading = false;
        state.isLoadAddressLoading = false;
      })
      .addCase(createUserAddress.pending, (state, action) => {
        state.isCreateAddressLoading = true;
      })
      .addCase(createUserAddress.fulfilled, (state, action) => {
        state.address = action.payload;
        state.createAddressError = null;
        state.isCreateAddressLoading = false;
      })
      .addCase(createUserAddress.rejected, (state, action) => {
        state.createAddressError = action.error.message;
        state.isLoading = false;
        state.isCreateAddressLoading = false;
      })
  },
})

export const { setLoginError, setRegistrationError, setUserImage } = userSlice.actions

export default userSlice.reducer;