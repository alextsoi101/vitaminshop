import { $host } from "./api";

export const search = async (text) => {
  const {data} = await $host.get('api/search/' + text)
  return data
}