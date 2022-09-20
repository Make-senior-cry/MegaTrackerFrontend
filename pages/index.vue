<template>
  <main>
    <div style="display: flex; gap: 8px">
      <CoinDeltaPrice delta-price="400" />
      <CoinDeltaPrice delta-price="-45500" large />
    </div>
    <div style="display: flex; gap: 8px">
      <ActionButton><TextContent value="Hello fuckers!"/></ActionButton>
    </div>
  </main>
</template>

<script>
import CoinDeltaPrice from '~/components/CoinDeltaPrice.vue'
import ActionButton from '~/components/ActionButton.vue'
import TextContent from '~/components/TextContent.vue';
export default {
  name: 'IndexPage',
  components: { CoinDeltaPrice, ActionButton, TextContent },
}
</script>
