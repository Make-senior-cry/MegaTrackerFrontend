<template>
  <!-- TODO: определить, массив каких сущностей принннимает этот компонент -->
  <ul class="coinListContainer">
    <div v-if="loading" class="loadingContainer">
      <Loading class="loading" />
    </div>
    <coin-list-item
      v-for="coin of coins"
      v-else
      :key="coin.ticker"
      :coin="coin"
      :show-favourite="showFavourite"
      @clickFavourite="$emit('clickFavourite', coin.ticker)"
    />
  </ul>
</template>

<script>
import Loading from 'vue-material-design-icons/Loading.vue'
import CoinListItem from '~/components/CoinListItem'

export default {
  name: 'CoinList',
  components: { CoinListItem, Loading },
  props: {
    coins: {
      type: Array,
      required: true,
    },
    showFavourite: {
      type: Boolean,
      default: false,
    },
    loading: {
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

.loadingContainer {
  display: flex;
  justify-content: center;
  padding: 1rem;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.loading {
  animation-name: spin;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
</style>
