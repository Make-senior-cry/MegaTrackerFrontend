<template>
  <div class="main">
    <TextContent value="MegaTracker / Создать аккаунт" variant="H1" />
    <div class="body">
      <TextInput
        v-model="newAccount.email"
        placeholder="email"
        type="email"
      ></TextInput>
      <TextInput
        v-model="newAccount.password"
        placeholder="password"
        type="password"
      ></TextInput>
      <TextInput
        v-model="newAccount.repeatedPassword"
        placeholder="repeatedPassword"
        type="password"
      ></TextInput>
    </div>
    <div class="footer">
      <PrimaryButton @click="register">
        <TextContent value="Зарегистрироваться" />
      </PrimaryButton>
      <button @click="register">
        <TextContent value="Зарегистрироваться" />
      </button>
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
      console.log('fsdafsasdgs')
      console.log(this.newAccount.email)
      this.$axios
        .$post(this.signUpUrl, this.newAccount)
        .then((response) => console.log(response))
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
