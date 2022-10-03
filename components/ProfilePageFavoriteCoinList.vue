<template>
  <div class="ProfilePageFavoriteCoinList">
    <ErrorFallback v-if="error" :error="error" />
    <CoinList
      v-else
      :coins="coins"
      :loading="loading"
      :show-favourite="true"
      @clickFavorite="handleFavorite"
    />
    <PaginationBlock
      :current="currentPage"
      :count="pageCount"
      @clickPage="handleClickPage"
    />
  </div>
</template>

<script>
import ErrorFallback from './ErrorFallback.vue'
import CoinList from './CoinList.vue'
import CoinsAPI from '~/api/CoinsAPI'

export default {
  components: { ErrorFallback, CoinList },
  data: () => ({
    coins: [],
    loading: true,
    error: false,
    currentPage: 1,
    pageCount: 10,
  }),
  mounted() {
    this.fetchCoins()
  },
  methods: {
    async handleFavorite(ticker) {
      const coinIndex = this.coins.findIndex((coin) => coin.ticker === ticker)
      const newFavorite = !this.coins[coinIndex].isFavorite
      this.coins[coinIndex].isFavorite = newFavorite
      try {
        await CoinsAPI.setFavoriteByTicker(ticker, newFavorite)
      } catch (e) {
        console.error(e)
        this.coins[coinIndex].isFavorite = !newFavorite
      }
    },
    async fetchCoins() {
      this.error = null
      this.loading = true
      try {
        const { coins, pageCount } = await CoinsAPI.getCoins({
          page: this.currentPage,
        })
        this.coins = coins
        this.pageCount = pageCount
      } catch (e) {
        console.error(e)
        this.error = e
      } finally {
        this.loading = false
      }
    },
    handleClickPage(newPage) {
      this.currentPage = newPage
      this.fetchCoins()
    },
  },
}
</script>

<style scoped>
.ProfilePageFavoriteCoinList {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
