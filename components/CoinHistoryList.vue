<template>
  <ul class="coinListContainer">
    <coin-history-list-item
      v-for="coinPriceItem of coinPriceItems"
      :key="coinPriceItem.date"
      :coin-price-item="coinPriceItem"
    />
  </ul>
</template>

<script>
import CoinHistoryListItem from '~/components/CoinHistoryListItem'
export default {
  components: { CoinHistoryListItem },
  props: {
    coinPriceItems: {
      type: Array,
      required: true,
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
