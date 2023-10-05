import { $host } from "./api";

export const createOrder = async (
  userId,
  email, 
  firstName, 
  lastName, 
  country, 
  addressLineOne, 
  addressLineTwo, 
  city,
  state,
  zip,
  phone,
  notes,
  shippingCost,
  total
) => {
  const {data} = await $host.post('api/order/', {
    userId,
    email, 
    firstName, 
    lastName, 
    country, 
    addressLineOne, 
    addressLineTwo, 
    city,
    state,
    zip,
    phone,
    notes,
    shippingCost,
    total
  })
  return data
}

export const createOrderNoAuth = async (
  email, 
  firstName, 
  lastName, 
  country, 
  addressLineOne, 
  addressLineTwo, 
  city,
  state,
  zip,
  phone,
  notes,
  orderedProducts,
  shippingCost,
  total
) => {
  const {data} = await $host.post('api/order/', {
    email, 
    firstName, 
    lastName, 
    country, 
    addressLineOne, 
    addressLineTwo, 
    city,
    state,
    zip,
    phone,
    notes,
    orderedProducts,
    shippingCost,
    total
  })
  return data
}

export const fetchAllOrders = async (userId) => {
  const {data} = await $host.get('api/order/user/' + userId)
  return data
}