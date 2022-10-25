import http from '~/api/http'
import AuthService from '~/services/AuthService'

export default () => {
  AuthService.restoreAuth()

  http.interceptors.response.use(
    (response) => response,
    (error) => {
      const message = error.response.data
      if (message) error.message = message
      if (error.response.status === 401) AuthService.updateTokens()
      return Promise.reject(error)
    }
  )
}
