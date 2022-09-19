<template>
  <div class="itemContainer" >
    <img :src="coin.iconURL">
    <div class="coinName">
      <div>{{ coin.ticker }}</div>
      <div style="font-size: 0.875rem; color: #666666">
        {{ coin.name }}
      </div>
    </div>
    <div>
      <span>{{ coin.currentPrice }}</span>
      <CoinDeltaPrice :delta-price="coin.deltaPrice" :large="false"/>
    </div>
  </div>
</template>

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
  }
}
</script>
<!-- TODO: Не уверен насчёт маржинов в классе coinName, если назвать класс container,
TODO: то почему то в CoinDeltaPrice у класса Container переопределяется padding-->
<style scoped>
.itemContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 1rem;
  border: 1px solid black; /* для теста */
}
.coinName {
  padding: 0;
  margin-left: 1rem;
  margin-right: 10.5rem;
}
</style>
