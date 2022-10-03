<template>
  <div class="container">
    <ErrorFallback v-if="error" :error="error" />
    <LoadingSpinner v-else-if="loading" />
    <template v-else>
      <CoinHeader
        :name="coin.name"
        :ticker="ticker"
        :is-favorite="coin.isFavorite"
      />
      <div class="infoContainer">
        <CoinInfoBlock title="Текущая цена">
          <span class="currentPriceTitle">{{ coin.currentPrice }}</span>
        </CoinInfoBlock>
        <CoinInfoBlock title="Изменение цены">
          <CoinDeltaPrice
            large
            :delta-price="coin.deltaPrice"
            :delta-price-percent="coin.deltaPricePercent"
          />
        </CoinInfoBlock>
      </div>
    </template>
  </div>
</template>

<script>
import CoinHeader from './CoinHeader.vue'
import CoinInfoBlock from './CoinInfoBlock.vue'
import LoadingSpinner from './LoadingSpinner.vue'
import ErrorFallback from './ErrorFallback.vue'
import CoinDeltaPrice from './CoinDeltaPrice.vue'
import CoinsAPI from '~/api/CoinsAPI'
export default {
  components: {
    CoinHeader,
    CoinInfoBlock,
    LoadingSpinner,
    ErrorFallback,
    CoinDeltaPrice,
  },
  props: {
    ticker: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    coin: null,
    error: null,
    loading: true,
  }),
  mounted() {
    this.fetchCoin()
  },
  methods: {
    async fetchCoin() {
      this.loading = true
      this.error = false
      try {
        this.coin = await CoinsAPI.getCoinByTiker(this.ticker)
      } catch (e) {
        console.error(e)
        this.error = e
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.infoContainer {
  display: flex;
  gap: 1rem;
}

.currentPriceTitle {
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.2;
  color: #000000;
}
</style>
