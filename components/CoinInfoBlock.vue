<template>
  <div class="coinInfoContainer">
    <TextContent :value="title" />
    <div class="deltaPrice">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import TextContent from '~/components/TextContent'
export default {
  components: { TextContent },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>
<style scoped>
.coinInfoContainer {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  gap: 0.5rem;
  border: 1px solid var(--black-stroke);
  border-radius: 0.5rem;
  padding: 1rem;
}
.deltaPrice {
  width: fit-content;
}
</style>
