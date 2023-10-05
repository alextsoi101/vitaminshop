import { $host } from "./api";

export const fetchProducts = async (page, limit, minPrice, maxPrice, rate, sortBy) => {
  const {data} = await $host.get('api/product/all', {params: {
    page, limit, minPrice, maxPrice, rate, sortBy
  }})
  return data
}

export const fetchProductsByCategory = async (categoryId, page, limit, minPrice, maxPrice, rate, sortBy) => {
  const {data} = await $host.get('api/product/all', {params: {
    categoryId, page, limit, minPrice, maxPrice, rate, sortBy
  }})
  return data
}

export const fetchTotalCount = async () => {
  const {data} = await $host.get('api/product/totalcount/')
  return data
}

export const fetchOneProduct = async (id) => {
  const {data} = await $host.get('api/product/product/' + id)
  return data
}

export const fetchProductReviews = async (id) => {
  const {data} = await $host.get('api/review/product/' + id)
  return data
}

export const fetchReviews = async (limit) => {
  const {data} = await $host.get('api/review/all/' + limit)
  return data
}

export const createReview = async (userId, productId, name, rate, review) => {
  const {data} = await $host.post('api/review', {userId, productId, name, rate, review})
  return data
}