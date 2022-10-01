import http from './http'

export default class AuthAPI {
  static async login(email, password) {
    const response = await http.post(`/auth/sign-in`, { email, password })
    return response.data
  }

  static async register(email, password, repeatedPassword) {
    const response = await this.http.post(`/auth/sign-up`, {
      email,
      password,
      repeatedPassword,
    })
    return response.data
  }

  static async updateTokens(refreshToken) {
    const response = await http.post(`/auth/refreshtoken`, { refreshToken })
    return response.data
  }

  static async logout() {
    const response = await http.post(`/auth/sign-out`)
    return response.data
  }
}
