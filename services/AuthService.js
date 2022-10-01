import { setAuthHeader } from '~/api/http'
import parseJWT from '~/utils/parseJWT'

export default class AuthService {
  static localStorageAuthItemName = 'auth'

  static getTokens() {
    const payload = localStorage.getItem(this.localStorageAuthItemName)
    if (!payload) return null

    return JSON.parse(payload)
  }

  static setUser(accessToken, refreshToken) {
    const payload = JSON.stringify({ accessToken, refreshToken })
    setAuthHeader(accessToken)
    localStorage.setItem(this.localStorageAuthItemName, payload)
  }

  static removeUser() {
    localStorage.removeItem(this.localStorageAuthItemName)
    setAuthHeader(null)
  }

  static getUserEmail() {
    const data = this.getTokens()
    if (!data) return null

    return parseJWT(data.accessToken).sub
  }
}
