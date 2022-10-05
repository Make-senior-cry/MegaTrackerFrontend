<template>
  <ul class="coinListContainer">
    <coin-history-list-item
      v-for="coinPriceItem of coinPriceItems"
      :key="coinPriceItem.date"
      :coin-price-item="coinPriceItem"
    />
    <EmptyFallback v-if="coinPriceItems.length === 0" />
  </ul>
</template>

<script>
import EmptyFallback from './EmptyFallback.vue'
import CoinHistoryListItem from '~/components/CoinHistoryListItem'

export default {
  components: { CoinHistoryListItem, EmptyFallback },
  props: {
    coinPriceItems: {
      type: Array,
      default: () => []
    },
  },
}
</script>

<style scoped>
.coinListContainer {
  padding: 0.5rem 0;
  border: 1px solid var(--black-stroke);
  border-radius: 0.5rem;
  margin: 0;
}
</style>
