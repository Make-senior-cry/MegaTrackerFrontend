import { setAuthHeader } from '~/api/http'
import AuthService from '~/services/AuthService'

export default () => {
  const { accessToken } = AuthService.getTokens()

  if (accessToken) {
    setAuthHeader(accessToken)
  }
}
