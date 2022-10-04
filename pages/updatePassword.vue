<template>
  <DefaultLayout> Обновить пароль </DefaultLayout>
</template>

<script>
import DefaultLayout from '~/components/DefaultLayout.vue'
export default {
  components: { DefaultLayout },
  middleware: 'auth'
}
</script>
