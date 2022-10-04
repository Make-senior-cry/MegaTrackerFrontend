export const pageNames = {
  index: () => null,
  signIn: () => 'Войти в аккаунт',
  signUp: () => 'Создать аккаунт',
  filters: () => 'Фильтры',
  profile: () => 'Профиль',
  updatePassword: () => 'Обновить пароль',
  ticker: ({ ticker }) => ticker,
}

export const baseURL = process.env.BASE_URL || 'http://localhost:8080'
