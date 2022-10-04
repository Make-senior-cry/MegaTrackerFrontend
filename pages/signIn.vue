<template>
  <DefaultLayout>
    <form class="group group_col" @submit.prevent="login">
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
      </fieldset>
      <CheckBox v-model="rememberMe" />
      <PrimaryButton type="submit">Продолжить <ArrowRight /></PrimaryButton>
    </form>
    <NuxtLink to="/signUp">
      <ActionButton>
        <AccountPlusOutline />
        У меня пока нет аккаунта, создать новый
      </ActionButton>
    </NuxtLink>
  </DefaultLayout>
</template>

<script>
import ArrowRight from 'vue-material-design-icons/ArrowRight.vue'
import AccountPlusOutline from 'vue-material-design-icons/AccountPlusOutline.vue'
import At from 'vue-material-design-icons/At.vue'
import KeyOutline from 'vue-material-design-icons/KeyOutline.vue'
import DefaultLayout from '~/components/DefaultLayout.vue'
import TextInput from '~/components/TextInput.vue'
import PrimaryButton from '~/components/PrimaryButton.vue'
import ActionButton from '~/components/ActionButton.vue'
import AuthAPI from '~/api/AuthAPI'
import AuthService from '~/services/AuthService'
import CheckBox from '~/components/CheckBox'

export default {
  components: {
    CheckBox,
    TextInput,
    At,
    PrimaryButton,
    ActionButton,
    ArrowRight,
    DefaultLayout,
    AccountPlusOutline,
    KeyOutline,
  },
  data: () => ({
    email: '',
    password: '',
    rememberMe: true,
  }),
  methods: {
    async login() {
      try {
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
