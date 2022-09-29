<template>
  <div
    class="container"
    :class="{
      container_increased: isIncreased,
      container_null: isNull,
      container_large: large,
    }"
  >
    <TextContent :value="price + ' $ (' + (isIncreased ? '+' : '') + deltaPricePercent + '%)'" />
  </div>
</template>
<!-- TODO исправить deltaPricePercent required на true-->
<script>
import TextContent from './TextContent.vue'
export default {
  components: { TextContent },
  props: {
    deltaPrice: {
      type: Number,
      required: true,
    },
    deltaPricePercent: {
      type: Number,
      required: false,
    },
    large: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isNull() {
      return this.deltaPrice === 0
    },
    isIncreased() {
      return this.deltaPrice > 0
    },
    price() {
      return `${this.isNull ? '' : this.isIncreased ? '+' : '-'} ${Math.abs(
        this.deltaPrice
      )}`
    },
  },
}
</script>

<style scoped>
.container {
  color: var(--black-stroke);
  font-size: 0.875rem;
  line-height: 1.2;
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
  text-align: center;
  background-color: var(--red-background);
  display: flex;
  align-items: center;
}

.container_large {
  font-size: 1.25rem;
}

.container_increased {
  background-color: var(--green-background);
}

.container_null {
  background-color: var(--light-gray);
}
</style>
