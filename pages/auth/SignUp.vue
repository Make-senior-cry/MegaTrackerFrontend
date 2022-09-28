<!-- TODO: добавить остальные компоненты-->
<!-- TODO: настроить стили-->
<!-- TODO: сделать обработку error и уведомление об успешой/неуспешной регистрации-->
<template>
  <div class="main">
    <TextContent value="MegaTracker / Создать аккаунт" variant="H1" />
    <div class="body">
      <TextInput
        v-model="newAccount.email"
        placeholder="Email"
        type="email"
      ></TextInput>
      <TextInput
        v-model="newAccount.password"
        placeholder="Password"
        type="password"
      ></TextInput>
      <TextInput
        v-model="newAccount.repeatedPassword"
        placeholder="Repeat password"
        type="password"
      ></TextInput>
    </div>
    <div class="footer">
      <PrimaryButton @clicked="register">
        <TextContent value="Зарегистрироваться" />
      </PrimaryButton>
    </div>
  </div>
</template>

<script>
import TextInput from '~/components/TextInput'
import PrimaryButton from '~/components/PrimaryButton'
import TextContent from '~/components/TextContent'
export default {
  name: 'SignUp',
  components: { TextContent, PrimaryButton, TextInput },
  data: () => ({
    signUpUrl: 'http://localhost:8080/auth/sign-up',
    newAccount: {
      email: '',
      password: '',
      repeatedPassword: '',
    },
  }),
  methods: {
    register() {
      this.$axios
        .$post(this.signUpUrl, this.newAccount)
        .then((response) => this.$router.push('/auth/SignIn'))
        .catch((error) => console.log(error))
    },
  },
}
</script>

<style scoped>
.body {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer {
  display: flex;
  gap: 0.5rem;
  padding-top: 0.5rem;
}
</style>
