<template>
  <div class="itemContainer" >
    <img :src="coin.iconURL" alt="loading...">
      <div class="coinMainInfoContainer">
        <div class="coinName">
          <div>{{ coin.ticker }}</div>
          <div style="font-size: 0.875rem; color: #666666">
            {{ coin.name }}
          </div>
        </div>
        <div>
          <div style="text-align: center">{{ coin.currentPrice }}</div>
          <CoinDeltaPrice :delta-price="coin.deltaPrice"/>
        </div>
      </div>
  </div>
</template>
<!--TODO: добавить render картинки favourite -->
<script>
import CoinDeltaPrice from "~/components/CoinDeltaPrice";

export default {
  name: "CoinListItem",
  components: {CoinDeltaPrice},
  props: {
    coin: {
      type: Object,
      required: true
    },
    showFavourite: {
      type: Boolean,
      required: false,
      default: false
    },
    isFavourite: {
      type: Boolean,
      required: false,
      default: false
    }
  },
}
</script>
<style scoped>
.itemContainer {
  display: flex;
  flex-direction: row;
  align-items: start;
  padding: 0.5rem 1rem;
}
.coinMainInfoContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}
.coinName {
  padding: 0.25rem 0;
}
</style>
