<template>
  <div class="CoinPageHistorySection">
    <ErrorFallback v-if="error" :error="error" />
    <LoadingSpinner v-else-if="loading" />
    <template v-else>
      <CoinHistoryList
        :coin-price-items="
          historyItems.slice(10 * (currentPage - 1), currentPage * 10)
        "
      />
      <div class="desktopMaxWidth50Percents">
        <PaginationBlock
          :current="currentPage"
          :count="3"
          @clickPage="currentPage = $event"
        />
      </div>
    </template>
  </div>
</template>

<script>
import CoinHistoryList from './CoinHistoryList.vue'
import ErrorFallback from './ErrorFallback.vue'
import LoadingSpinner from './LoadingSpinner.vue'
import PaginationBlock from './PaginationBlock.vue'
import CoinsAPI from '~/api/CoinsAPI'

export default {
  components: {
    CoinHistoryList,
    ErrorFallback,
    LoadingSpinner,
    PaginationBlock,
  },
  props: {
    ticker: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    historyItems: [],
    currentPage: 1,
    error: null,
    loading: true,
  }),
  mounted() {
    this.fetchHistory()
  },
  methods: {
    async fetchHistory() {
      this.loading = true
      this.error = false
      try {
        this.historyItems = await CoinsAPI.getHistoryByTicker(this.ticker)
        this.historyItems = this.historyItems.reverse()
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
.CoinPageHistorySection {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
