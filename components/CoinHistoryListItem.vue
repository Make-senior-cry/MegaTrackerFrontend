<template>
  <div class="coinContainer">
    <div class="date">
      <TextContent :value="date" />
    </div>
    <div class="priceInfo">
      <TextContent :value="String(coinPriceItem.closingPrice)" variant="H3" />
      <CoinDeltaPrice
        :delta-price="coinPriceItem.deltaClosingPrice"
        :delta-price-percent="coinPriceItem.deltaClosingPricePercent"
      />
    </div>
  </div>
</template>

<script>
import TextContent from '~/components/TextContent'
import CoinDeltaPrice from '~/components/CoinDeltaPrice'
import CoinHistoryListItemDTO from '~/dto/CoinHistoryListItemDto'

export default {
  components: { TextContent, CoinDeltaPrice },
  props: {
    coinPriceItem: {
      type: CoinHistoryListItemDTO,
      required: true,
    },
  },
  computed: {
    date() {
      const dateObject = new Date(this.coinPriceItem.dateTime)
      return dateObject.toLocaleDateString('ru-ru', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
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
