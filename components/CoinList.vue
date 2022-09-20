<template>
  <!-- TODO: определить, массив каких сущностей принннимает этот компонент -->
  <ul class="coinListContainer">
    <coin-list-item
      v-for="coin of coins"
      :key="coin.ticker"
      :coin="coin"
      :show-favourite="showFavourite"
      @clickFavourite="$emit('clickFavourite', coin.ticker)"
    />
  </ul>
</template>

<script>
import CoinListItem from '~/components/CoinListItem'

export default {
  name: 'CoinList',
  components: { CoinListItem },
  props: {
    coins: {
      type: Array,
      required: true,
    },
    showFavourite: {
      type: Boolean,
      default: false,
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
