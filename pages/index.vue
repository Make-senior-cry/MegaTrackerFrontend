<template>
  <main>
    <div class="showcase">
      <CoinDeltaPrice delta-price="400" />
      <CoinDeltaPrice delta-price="-45500" large />
    </div>
    <div class="showcase">
      <ActionButton><TextContent value="Hello fuckers!"/></ActionButton>
    </div>
    <div class="showcase">
      <PrimaryButton><TextContent value="Primary button"/></PrimaryButton>
    </div>
    <div>
      <CoinListItem :coin="{ ticker: 'BTC', name: 'Bitcoin', currentPrice: 49500, deltaPrice: 480, iconURL: '' }"/>
    </div>
    <div>
      <coin-list :coins="[{ticker: 'BTC', name: 'Bitcoin', currentPrice: 49500, deltaPrice: 480, iconURL: ''},
      {ticker: 'ETH', name: 'Etherium', currentPrice: 20000, deltaPrice: -200, iconURL: ''}]"/>
    </div>
  </main>
</template>

<script>
import CoinDeltaPrice from '~/components/CoinDeltaPrice.vue'
import ActionButton from '~/components/ActionButton.vue'
import TextContent from '~/components/TextContent.vue';
import PrimaryButton from '~/components/PrimaryButton.vue';
import CoinListItem from "~/components/CoinListItem";
import CoinList from "~/components/CoinList";

export default {
  name: 'IndexPage',
  components: {CoinList, CoinListItem, CoinDeltaPrice, ActionButton, TextContent, PrimaryButton },
}
</script>

<style scoped>
  .showcase {
    display: flex;
    gap: 0.5rem;
    padding: 0.5rem;
  }
</style>
