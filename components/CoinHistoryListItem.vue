<template>
  <div class="coinContainer">
    <div class="date">
      <TextContent :value="coinPriceItem.date" />
    </div>
    <div class="priceInfo">
      <TextContent :value="coinPriceItem.currentPrice" variant="H3" />
      <CoinDeltaPrice :delta-price="coinPriceItem.deltaPrice" />
    </div>
  </div>
</template>

<script>
import TextContent from '~/components/TextContent'
import CoinDeltaPrice from '~/components/CoinDeltaPrice'
export default {
  components: { TextContent, CoinDeltaPrice },
  props: {
    coinPriceItem: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.coinContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  padding: 0.5rem 1rem;
}

.date {
  margin: 0.25rem 0;
  color: var(--gray);
}

.priceInfo {
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 0.5rem;
  font-size: 1.25rem;
}
</style>
