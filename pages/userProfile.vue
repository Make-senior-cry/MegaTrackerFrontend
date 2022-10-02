<template>
  <DefaultLayout>
    <template #actions>
      <button @click="logout"><AccountMinusOutline /></button>
    </template>
    <TextContent variant="H1" :value="userEmail" />
    <ActionButton>
      <LockOutline />
      Я хочу поменять пароль
    </ActionButton>
  </DefaultLayout>
</template>

<script>
import LockOutline from 'vue-material-design-icons/LockOutline.vue'
import AccountMinusOutline from 'vue-material-design-icons/AccountMinusOutline.vue'
import TextContent from '../components/TextContent.vue'
import DefaultLayout from '~/components/DefaultLayout.vue'
import AuthService from '~/services/AuthService'
import ActionButton from '~/components/ActionButton.vue'

export default {
  components: {
    TextContent,
    DefaultLayout,
    ActionButton,
    LockOutline,
    AccountMinusOutline,
  },
  computed: {
    userEmail() {
      return AuthService.getUserEmail()
    },
  },
  methods: {
    logout() {
      AuthService.removeUser()
      this.$router.replace('/')
    },
  },
}
</script>
