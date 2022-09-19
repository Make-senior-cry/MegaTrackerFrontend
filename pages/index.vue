<template>
<div style="display: flex; gap: 8px">
  <CoinDeltaPrice delta-price="400"  />
  <CoinDeltaPrice delta-price="-45500" large />
</div>
</template>

<script>
import CoinDeltaPrice from '~/components/CoinDeltaPrice.vue';
export default {
    name: "IndexPage",
    components: { CoinDeltaPrice }
}
</script>
