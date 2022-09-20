<template>
  <div class="listContainer">
    <ul v-for="coin of coins" :key="coin">
      <coin-list-item :coin="coin"/>
    </ul>
  </div>

</template>

<script>
import CoinListItem from "~/components/CoinListItem";
export default {
  name: "CoinList",
  components: {CoinListItem},
  props: {
    coins: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.listContainer {
  padding: 0.5rem 0;
  border: 1px solid var(--black-stroke);
  border-radius: 8px;
}
ul {
  padding: 0;
  margin: 0;
}
</style>
