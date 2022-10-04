import AuthService from '~/services/AuthService'

export default function ({ redirect }) {
  if (!AuthService.getUserEmail()) return redirect('/signIn')
}
