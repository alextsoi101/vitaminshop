import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'modal',
  initialState: {
    isLogin: false,
  },
  reducers: {
    loginUser: state => {
      state.isLogin = true
    },
  }
})

export const { loginUser } = authSlice.actions

export default authSlice.reducer;