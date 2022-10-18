<template>
  <DefaultLayout>
    <form class="group group_col" @submit.prevent="handleUpdatePassword">
      <fieldset class="group group_col group_dense">
        <TextInput
          v-model="oldPassword"
          :attrs="{
            placeholder: 'Старый пароль',
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
          v-model="newPassword"
          :attrs="{
            placeholder: 'Новый пароль',
            type: 'password',
            required: true,
            minlength: 8,
            maxlength: 16,
            autocomplete: 'current-password',
          }"
        >
          <ShieldOutline />
        </TextInput>
        <TextInput
          v-model="newPasswordRepeat"
          :attrs="{
            placeholder: 'Повторите новый пароль',
            type: 'password',
            required: true,
            minlength: 8,
            maxlength: 16,
            autocomplete: 'current-password',
          }"
        >
          <ShieldSyncOutline />
        </TextInput>
      </fieldset>
      <PrimaryButton type="submit">Продолжить <ArrowRight /></PrimaryButton>
    </form>
    <ActionButton @click="handleGoBack">
      <CloseCircleOutline />
      Отмена, я передумал менять пароль
    </ActionButton>
  </DefaultLayout>
</template>

<script>
import ShieldOutline from 'vue-material-design-icons/ShieldOutline.vue'
import KeyOutline from 'vue-material-design-icons/KeyOutline.vue'
import ShieldSyncOutline from 'vue-material-design-icons/ShieldSyncOutline.vue'
import ArrowRight from 'vue-material-design-icons/ArrowRight.vue'
import CloseCircleOutline from 'vue-material-design-icons/CloseCircleOutline.vue'
import AuthAPI from '~/api/AuthAPI'
import DefaultLayout from '~/components/DefaultLayout.vue'
import TextInput from '~/components/TextInput.vue'
import PrimaryButton from '~/components/PrimaryButton.vue'
import ActionButton from '~/components/ActionButton.vue'

export default {
  components: {
    DefaultLayout,
    TextInput,
    ShieldOutline,
    KeyOutline,
    ShieldSyncOutline,
    PrimaryButton,
    ArrowRight,
    ActionButton,
    CloseCircleOutline,
  },
  middleware: 'auth',
  data: () => ({
    oldPassword: '',
    newPassword: '',
    newPasswordRepeat: '',
  }),
  methods: {
    validatePasswords() {
      if (this.newPassword !== this.newPasswordRepeat) {
        throw new Error('Новые пароли не совпадают!')
      }
    },
    handleGoBack() {
      this.$router.go(-1)
    },
    async handleUpdatePassword() {
      try {
        this.validatePasswords()
        await AuthAPI.updatePassword(
          this.oldPassword,
          this.newPassword,
          this.newPasswordRepeat
        )
        this.handleGoBack()
      } catch (e) {
        this.$toast.error(e?.message ?? 'Auth failed')
      }
    },
  },
}
</script>
