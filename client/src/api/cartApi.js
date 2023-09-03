import { $host } from "./api";

export const fetchCartProducts = async (userId) => {
  const {data} = await $host.get('api/cart/' + userId)
  return data
}

export const addCartProduct = async (userId, productId, selectedSize, count) => {
  const {data} = await $host.post('api/cart/', {userId, productId, selectedSize, count})
  return data
}

export const updateCartProductCount = async (userId, cartProductId, newCount) => {
  const {data} = await $host.put('api/cart/', {userId, cartProductId, newCount})
  return data
}

export const deleteCartProduct = async (cartProductId, userId) => {
  const {data} = await $host.delete('api/cart/deleteproduct', {params: {cartProductId, userId}})
  return data
}

export const deleteCart = async (userId) => {
  const {data} = await $host.delete('api/cart/', {userId})
  return data
}

