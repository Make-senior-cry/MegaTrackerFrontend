import axios from 'axios'
import { baseURL } from '~/constants'

const http = axios.create({ baseURL })

export const setAuthHeader = (accessToken) => {
  http.defaults.headers.common.Authorization = `bearer ${accessToken}`
}

export const removeAuthHeader = () => {
  delete http.defaults.headers.common.Authorization
}

export default http
