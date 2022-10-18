import AuthAPI from '~/api/AuthAPI'
import { setAuthHeader } from '~/api/http'
import parseJWT from '~/utils/parseJWT'

export default class AuthService {
  static localStorageAuthItemName = 'auth'
  static tokens = null
  static authAutoRefetchAttempts = 0

  static async updateTokens() {
    console.log('AuthService: updateTockens')
    if (this.authAutoRefetchAttempts > 3) return
    this.authAutoRefetchAttempts += 1

    const tokens = this.getTokens()
    if (!tokens) return

    try {
      const newTokens = await AuthAPI.updateTokens(tokens.refreshToken)
      const rememberMeIsSet = !!localStorage.getItem(
        this.localStorageAuthItemName
      )
      this.setUser(newTokens, rememberMeIsSet)
      this.authAutoRefetchAttempts = 0
    } catch (e) {
      this.$toast.error(e?.message ?? 'Auto auth failed')
      this.removeUser()
    }
  }

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
    this.tokens = null
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
