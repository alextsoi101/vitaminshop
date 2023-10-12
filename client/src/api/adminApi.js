import { $host, $authAdminHost } from "./api";
import jwt_decode from "jwt-decode";

export const adminLogin = async (email, password) => {
  const {data} = await $host.post('api/user/login-admin', {email, password})
  localStorage.setItem('adminToken', data.token)
  return jwt_decode(data.token)
}

export const adminCheck = async () => {
  const {data} = await $authAdminHost.get('api/user/auth-admin')
  localStorage.setItem('adminToken', data.token)
  return jwt_decode(data.token)
}

export const fetchOrderStatistic = async (startDate, lastDate) => {
  const {data} = await $authAdminHost.get('api/order/orderstatistic', {params: {startDate, lastDate}})
  return data
}

export const fetchSaleStatistic = async (startDate, lastDate) => {
  const {data} = await $authAdminHost.get('api/order/salestatistic', {params: {startDate, lastDate}})
  return data
}

export const fetchLifetimeOrders = async () => {
  const {data} = await $authAdminHost.get('api/order/lifetimeorders')
  return data
}

export const fetchLifetimeSales = async () => {
  const {data} = await $authAdminHost.get('api/order/lifetimesales')
  return data
}

export const fetchUserStatistic = async (startDate, lastDate) => {
  const {data} = await $authAdminHost.get('api/user/userstatistic', {params: {startDate, lastDate}})
  return data
}

export const fetchUsers = async (userId, name, email, limit, page) => {
  const {data} = await $authAdminHost.get('api/user/all', {params: {
    userId, name, email, limit, page
  }})
  return data
}

export const fetchUserInfo = async (userId) => {
  const {data} = await $authAdminHost.get('api/user/info/' + userId)
  return data
}

export const fetchUserOrders = async (userId) => {
  const {data} = await $authAdminHost.get('api/order/user/' + userId)
  return data
}

export const fetchOrders = async (id, email, limit, page) => {
  const {data} = await $authAdminHost.get('api/order/all', {params: {
    id, email, limit, page
  }})
  return data
}

export const fetchOrderInfo = async (id) => {
  const {data} = await $authAdminHost.get('api/order/one/' + id)
  return data
}

export const fetchProducts = async (categoryId, name, page, limit, minPrice, maxPrice, inStock) => {
  const {data} = await $authAdminHost.get('api/product/all-admin', {params: {
    categoryId, name, page, limit, minPrice, maxPrice, inStock
  }})
  return data
}

export const fetchProductInfo = async (id) => {
  const {data} = await $authAdminHost.get('api/product/product/' + id)
  return data
}

export const createProduct = async (
  categoriesId, 
  name, 
  price, 
  rating, 
  sizes, 
  effects, 
  relieve, 
  ingridients, 
  description, 
  shortDescription, 
  instock,
  imageGallery ) => {

  const formData = new FormData();

  formData.append('categoriesId', categoriesId);
  formData.append('name', name);
  formData.append('price', price);
  formData.append('rating', rating);
  formData.append('sizes', sizes);
  formData.append('effects', effects);
  formData.append('relieve', relieve);
  formData.append('ingridients', ingridients);
  formData.append('description', description);
  formData.append('shortDescription', shortDescription);
  formData.append('instock', instock);

  if (imageGallery) {
    imageGallery.map(image => {
      formData.append('imageGallery', image);
    })
  }

  const {data} = await $authAdminHost.post('api/product', formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  })
  return data
}

export const updateProduct = async (
  id,
  categoriesId, 
  name, 
  price, 
  rating, 
  sizes, 
  effects, 
  relieve, 
  ingridients, 
  description, 
  shortDescription, 
  instock,
  imageGallery ) => {

  const formData = new FormData();

  formData.append('id', id);
  formData.append('categoriesId', categoriesId);
  formData.append('name', name);
  formData.append('price', price);
  formData.append('rating', rating);
  formData.append('sizes', sizes);
  formData.append('effects', effects);
  formData.append('relieve', relieve);
  formData.append('ingridients', ingridients);
  formData.append('description', description);
  formData.append('shortDescription', shortDescription);
  formData.append('instock', instock);
  
  imageGallery.map(image => {
    formData.append('imageGallery', image);
  })

  const {data} = await $authAdminHost.put('api/product', formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  })
  return data
}

export const removeProduct = async (id) => {
  const {data} = await $authAdminHost.delete('api/product/' + id)
  return data
}

export const fetchPromocodes = async (limit, page) => {
  const {data} = await $authAdminHost.get('api/promo/all', {params: {
    limit, page
  }})
  return data
}

export const fetchPromocodeInfo = async (promocode) => {
  const {data} = await $authAdminHost.get('api/promo/one/' + promocode)
  return data
}

export const createPromocode = async (promocode, percentDiscount, expirationDate) => {
  const {data} = await $authAdminHost.post('api/promo', {promocode, percentDiscount, expirationDate})
  return data
}

export const updatePromocode = async (id, promocode, percentDiscount, expirationDate) => {
  const {data} = await $authAdminHost.put('api/promo', {id, promocode, percentDiscount, expirationDate})
  return data
}

export const fetchCategories = async (limit, page) => {
  const {data} = await $authAdminHost.get('api/category/all-admin', {params: {
    limit, page
  }})
  return data
}