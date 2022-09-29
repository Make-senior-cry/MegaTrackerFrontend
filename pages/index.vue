<template>
  <DefaultLayout>
    <ActionButton>
      <AccountPlusOutline />
      Войдите аккаунт, чтобы добавлять валются в избранное
    </ActionButton>
    <div class="group">
      <TextInput placeholder="Начните вводить тикер..."><Magnify /></TextInput>
      <PrimaryButton><FilterMultipleOutline />Настроить фильтры</PrimaryButton>
    </div>
    <ErrorFallback v-if="error" :error="error" />
    <coin-list v-else :coins="coins" />
  </DefaultLayout>
</template>

<script>
import AccountPlusOutline from 'vue-material-design-icons/AccountPlusOutline.vue'
import FilterMultipleOutline from 'vue-material-design-icons/FilterMultipleOutline.vue'
import Magnify from 'vue-material-design-icons/Magnify.vue'
import CoinList from '~/components/CoinList'
import ErrorFallback from '~/components/ErrorFallback.vue'
import DefaultLayout from '~/components/DefaultLayout.vue'
import ActionButton from '~/components/ActionButton.vue'
import TextInput from '~/components/TextInput.vue'
import PrimaryButton from '~/components/PrimaryButton.vue'

export default {
  name: 'IndexPage',
  components: {
    CoinList,
    ErrorFallback,
    DefaultLayout,
    ActionButton,
    AccountPlusOutline,
    TextInput,
    PrimaryButton,
    FilterMultipleOutline,
    Magnify,
  },
  data: () => ({
    coins: [],
    error: null,
  }),
  async mounted() {
    this.error = null
    try {
      this.coins = await this.$axios.$get('http://localhost:8080/coins')
    } catch (e) {
      console.log({ e })
      this.error = e
    }
  },
}
</script>

<style scoped>
.showcase {
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
}
</style>
