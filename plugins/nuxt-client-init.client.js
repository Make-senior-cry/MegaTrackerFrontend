import AuthService from '~/services/AuthService'

export default () => {
  AuthService.restoreAuth()
  AuthService.setAutoRefetchOn401()
}
