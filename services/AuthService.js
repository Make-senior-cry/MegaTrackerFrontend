import { setAuthHeader } from '~/api/http'
import parseJWT from '~/utils/parseJWT'

export default class AuthService {
  static localStorageAuthItemName = 'auth'
  static tokens = null

  static getTokens() {
    if (this.tokens === null) {
      const payload = localStorage.getItem(this.localStorageAuthItemName)
      if (payload) {
        this.tokens = JSON.parse(payload)
      }
    }
    return this.tokens
  }

  static setUser(tokens, remeberMe = false) {
    this.tokens = tokens
    setAuthHeader(tokens.accessToken)
    if (remeberMe) {
      const payload = JSON.stringify(tokens)
      localStorage.setItem(this.localStorageAuthItemName, payload)
    }
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

  static restoreAuth() {
    const tokens = this.getTokens()

    if (tokens) {
      setAuthHeader(tokens.accessToken)
    }
  }
}
