<!-- TODO: добавить остальные компоненты-->
<!-- TODO: настроить стили-->
<!-- TODO: сделать обработку error и уведомление об успешой/неуспешной авторизации-->
<template>
  <div class="main">
    <TextContent value="MegaTracker / Войти в аккаунт" variant="H1" />
    <div class="body">
      <TextInput
        v-model="account.email"
        type="email"
        placeholder="Email"
      ></TextInput>
      <TextInput
        v-model="account.password"
        type="password"
        placeholder="Password"
      ></TextInput>
      <PrimaryButton @clicked="signIn">
        <TextContent value="Войти" />
      </PrimaryButton>
    </div>
  </div>
</template>

<script>
import TextContent from '~/components/TextContent'
import TextInput from '~/components/TextInput'
import PrimaryButton from '~/components/PrimaryButton'
export default {
  name: 'SignIn',
  components: { PrimaryButton, TextInput, TextContent },
  data: () => ({
    signInUrl: 'http://localhost:8080/auth/sign-in',
    account: {
      email: '',
      password: '',
    },
  }),
  methods: {
    signIn() {
      this.$axios
        .post(this.signInUrl, this.account)
        .then(() => this.$router.push('/MainPageUnauthorized'))
        .catch((error) => console.log(error))
    },
  },
}
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.body {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
