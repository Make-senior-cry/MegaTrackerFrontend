<template>
  <DefaultLayout>
    <form class="group group_col" @submit.prevent="register">
      <fieldset class="fieldset group group_col group_dense">
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
      <CheckBox v-model="rememberMe" />
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
import CheckBox from '~/components/CheckBox'

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
    CheckBox,
  },
  data: () => ({
    email: '',
    password: '',
    repeatedPassword: '',
    rememberMe: true,
  }),
  methods: {
    validatePasswordFields() {
      if (this.repeatedPassword !== this.password) {
        throw new Error('Пароли не совпадают')
      }
    },
    async register() {
      try {
        this.validatePasswordFields()
        await AuthAPI.register(this.email, this.password, this.repeatedPassword)
        const tokens = await AuthAPI.login(this.email, this.password)
        AuthService.setUser(tokens, this.rememberMe)
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
</style>
