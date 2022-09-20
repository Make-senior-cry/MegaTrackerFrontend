<template>
  <main>
    <div class="showcase">
      <CoinDeltaPrice :delta-price="400" />
      <CoinDeltaPrice :delta-price="-45500" large />
    </div>
    <div class="showcase">
      <ActionButton><TextContent value="Hello fuckers!" /></ActionButton>
    </div>
    <div class="showcase">
      <PrimaryButton><TextContent value="Primary button" /></PrimaryButton>
    </div>
    <div class="showcase">
      <TextInput v-model="inputValue" placeholder="Text input"></TextInput>
    </div>
  </main>
</template>

<script>
import CoinDeltaPrice from '~/components/CoinDeltaPrice.vue'
import ActionButton from '~/components/ActionButton.vue'
import TextContent from '~/components/TextContent.vue'
import PrimaryButton from '~/components/PrimaryButton.vue'
import TextInput from '~/components/TextInput.vue'

export default {
  name: 'IndexPage',
  components: {
    CoinDeltaPrice,
    ActionButton,
    TextContent,
    PrimaryButton,
    TextInput,
  },
  data: () => ({
    inputValue: '',
  }),
}
</script>

<style scoped>
.showcase {
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
}
</style>
