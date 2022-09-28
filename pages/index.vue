<template>
  <DefaultLayout>
    <ErrorFallback v-if="error" :error="error" />
    <coin-list v-else :coins="coins" />
  </DefaultLayout>
</template>

<script>
import CoinList from '~/components/CoinList'
import ErrorFallback from '~/components/ErrorFallback.vue'
import DefaultLayout from '~/components/DefaultLayout.vue'

export default {
  name: 'IndexPage',
  components: {
    CoinList,
    ErrorFallback,
    DefaultLayout,
  },
  data: () => ({
    coins: [],
    error: null,
  }),
  async mounted() {
    try {
      const coins = await this.$axios.$get('http://localhost:8080/coins')
      this.coins = coins
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
