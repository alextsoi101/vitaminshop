import { $host, $authHost } from "./api";
import jwt_decode from "jwt-decode";

export const registration = async (email, password) => {
  const {data} = await $host.post('api/user/registration', {email, password})
  localStorage.setItem('token', data.token)
  return jwt_decode(data.token)
}

export const login = async (email, password) => {
  const {data} = await $host.post('api/user/login', {email, password})
  localStorage.setItem('token', data.token)
  return jwt_decode(data.token)
}

export const check = async () => {
  const {data} = await $authHost.get('api/user/auth')
  localStorage.setItem('token', data.token)
  return jwt_decode(data.token)
}

export const fetchUserInfo = async (userId) => {
  const {data} = await $host.get('api/user/info/' + userId)
  return data
}

export const updateUser = async (userId, email, firstName, lastName) => {
  const {data} = await $host.put('api/user/update', {userId, email, firstName, lastName})
  return data
}

export const updateUserImage = async (userId, userImage) => {
  const formData = new FormData();
  formData.append("userId", userId);
  formData.append("userImage", userImage);

  const {data} = await $host.put('api/user/update-image', formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  })
  return data
}

export const deleteUserImage = async (userId) => {
  const {data} = await $host.delete('api/user/delete-image/' + userId)
  return data
}

export const updatePassword = async (userId, currentPassword, newPassword, passwordRepeat) => {
  const {data} = await $host.put('api/user/newpassword', {userId, currentPassword, newPassword, passwordRepeat})
  return data
}

export const createAddress = async (
  userId, firstName, lastName, country, addressLineOne, addressLineTwo, city, state, zip
) => {
  const {data} = await $host.post('api/user/address',
    {userId, firstName, lastName, country, addressLineOne, addressLineTwo, city, state, zip}
  )
  return data
}

export const fetchAddress = async (userId) => {
  const {data} = await $host.get('api/user/address/' + userId)
  return data
}