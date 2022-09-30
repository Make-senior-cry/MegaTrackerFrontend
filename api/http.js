import axios from 'axios'
import { baseURL } from '~/constants'

const http = axios.create({ baseURL })

export const setAuthHeader = (accessToken) => {}

export const removeAuthHeader = () => {}

export default http
