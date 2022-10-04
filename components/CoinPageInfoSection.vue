<template>
  <div class="container">
    <ErrorFallback v-if="error" :error="error" />
    <LoadingSpinner v-else-if="loading" />
    <template v-else>
      <CoinHeader
        :name="coin.name"
        :ticker="ticker"
        :is-favorite="coin.isFavorite"
        @clickFavorite="handleFavorite"
      />

      <div class="group">
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
      <ExpandingTextInput
        :value="note"
        label="Ваша заметка о бумаге"
        @input="handleChangeNote"
        ><File
      /></ExpandingTextInput>
    </template>
  </div>
</template>

<script>
import File from 'vue-material-design-icons/File.vue'
import CoinHeader from './CoinHeader.vue'
import CoinInfoBlock from './CoinInfoBlock.vue'
import LoadingSpinner from './LoadingSpinner.vue'
import ErrorFallback from './ErrorFallback.vue'
import CoinDeltaPrice from './CoinDeltaPrice.vue'
import ExpandingTextInput from './ExpandingTextInput.vue'
import CoinsAPI from '~/api/CoinsAPI'
import debounce from '~/utils/debounce'

export default {
  components: {
    CoinHeader,
    CoinInfoBlock,
    LoadingSpinner,
    ErrorFallback,
    CoinDeltaPrice,
    ExpandingTextInput,
    File,
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
    note: '',
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
        this.note = this.coin.note ?? ''
      } catch (e) {
        console.error(e)
        this.error = e
      } finally {
        this.loading = false
      }
    },
    handleChangeNote(newValue) {
      this.note = newValue
      this.setNoteDebounced()
    },
    setNoteDebounced: debounce(async function () {
      try {
        await CoinsAPI.setNote(this.ticker, this.note)
      } catch (e) {
        console.error(e)
      }
    }, 1500),
    async handleFavorite() {
      const newFavorite = !this.coin.isFavorite
      this.coin.isFavorite = newFavorite
      try {
        await CoinsAPI.setFavoriteByTicker(this.ticker, newFavorite)
      } catch (e) {
        console.error(e)
        this.coin.isFavorite = !newFavorite
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

.currentPriceTitle {
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.2;
  color: #000000;
}
</style>
