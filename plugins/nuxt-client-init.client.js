import { setAuthHeader } from '~/api/http'
import AuthService from '~/services/AuthService'

export default () => {
  const tokens = AuthService.getTokens()

  if (tokens) {
    setAuthHeader(tokens.accessToken)
  }
}
