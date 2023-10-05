import { $host } from "./api";

export const checkPromo = async (userId, promocode) => {
  const {data} = await $host.post('api/promo/check', {userId, promocode})
  return data
}

export const fetchPromo = async (promocode) => {
  const {data} = await $host.get('api/promo/one/' + promocode)
  return data
}