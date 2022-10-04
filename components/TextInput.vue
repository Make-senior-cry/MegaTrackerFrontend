<template>
  <label class="container">
    <slot></slot>
    <input
      v-bind="attrs"
      class="input"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </label>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    attrs: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  gap: 1rem;
  border: 1px solid var(--black-stroke);
  border-radius: 0.5rem;
}

.input {
  font-size: 1rem;
  line-height: 1.5;
  width: 100%;
  border: none;
  outline: none;
}

.input::placeholder {
  color: var(--gray);
}
</style>
