import axios from "axios"

const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_BASE_URL,
  withCredentials: true,
})

export function makeRequest(url, options) {
  return api(url, options)
    .then(res => res.data)
    .catch(error => {
      console.log(error);
      return Promise.reject(error?.response?.data?.message ?? error.message)
    })
}
