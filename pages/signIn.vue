<template>
  <DefaultLayout>
    <fieldset class="fieldset group">
      <TextInput v-model="email" placeholder="Email" />
      <TextInput v-model="password" placeholder="Пароль" />
    </fieldset>
    <PrimaryButton @click="login">Продолжить <ArrowRight /></PrimaryButton>
    <ActionButton>
      <AccountPlusOutline />
      У меня пока нет аккаунта, создать новый
    </ActionButton>
  </DefaultLayout>
</template>

<script>
import ArrowRight from 'vue-material-design-icons/ArrowRight.vue'
import AccountPlusOutline from 'vue-material-design-icons/AccountPlusOutline.vue'
import DefaultLayout from '~/components/DefaultLayout.vue'
import TextInput from '~/components/TextInput.vue'
import PrimaryButton from '~/components/PrimaryButton.vue'
import ActionButton from '~/components/ActionButton.vue'
import AuthAPI from '~/api/AuthAPI'

export default {
  components: {
    TextInput,
    PrimaryButton,
    ActionButton,
    ArrowRight,
    DefaultLayout,
    AccountPlusOutline,
  },
  data: () => ({
    email: '',
    password: '',
  }),
  methods: {
    login() {
      AuthAPI.login(this.email, this.password)
        .then(console.log)
        .catch(console.error)
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
