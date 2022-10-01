<template>
  <DefaultLayout>
    <form class="form" @submit.prevent="login">
      <fieldset class="fieldset group">
        <TextInput
          v-model="email"
          :attrs="{
            required: true,
            placeholder: 'Email',
            type: 'email',
            autocomplete: 'username',
          }"
        >
          <At />
        </TextInput>
        <TextInput
          v-model="password"
          :attrs="{
            placeholder: 'Пароль',
            type: 'password',
            required: true,
            minlength: 8,
            maxlength: 16,
            autocomplete: 'current-password',
          }"
        >
          <KeyOutline />
        </TextInput>
        <TextInput
          v-model="repeatedPassword"
          :attrs="{
            placeholder: 'Повторите пароль',
            type: 'password',
            required: true,
            minlength: 8,
            maxlength: 16,
            autocomplete: 'current-password',
          }"
        >
          <ShieldKeyOutline />
        </TextInput>
      </fieldset>
      <PrimaryButton type="submit">Продолжить <ArrowRight /></PrimaryButton>
    </form>
    <NuxtLink to="/signIn">
      <ActionButton>
        <AccountOutline />
        У меня уже есть аккаунт
      </ActionButton>
    </NuxtLink>
  </DefaultLayout>
</template>

<script>
import ArrowRight from 'vue-material-design-icons/ArrowRight.vue'
import AccountOutline from 'vue-material-design-icons/AccountOutline.vue'
import At from 'vue-material-design-icons/At.vue'
import KeyOutline from 'vue-material-design-icons/KeyOutline.vue'
import ShieldKeyOutline from 'vue-material-design-icons/ShieldKeyOutline.vue'
import DefaultLayout from '~/components/DefaultLayout.vue'
import TextInput from '~/components/TextInput.vue'
import PrimaryButton from '~/components/PrimaryButton.vue'
import ActionButton from '~/components/ActionButton.vue'
import AuthAPI from '~/api/AuthAPI'
import AuthService from '~/services/AuthService'

export default {
  components: {
    TextInput,
    At,
    PrimaryButton,
    ActionButton,
    ArrowRight,
    DefaultLayout,
    AccountOutline,
    ShieldKeyOutline,
    KeyOutline,
  },
  data: () => ({
    email: '',
    password: '',
    repeatedPassword: '',
  }),
  methods: {
    validatePasswordFields() {
      if (this.repeatedPassword !== this.password) {
        throw new Error('Пароли не совпадают')
      }
    },
    async login() {
      try {
        this.validatePasswordFields()
        await AuthAPI.register(this.email, this.password, this.repeatedPassword)
        const { accesToken, refreshToken } = await AuthAPI.login(
          this.email,
          this.password
        )
        AuthService.setUser(accesToken, refreshToken)
        this.$router.replace('/')
      } catch (e) {
        alert(e.message)
      }
    },
  },
}
</script>

<style scoped>
.fieldset {
  border: none;
  padding: 0;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
