<template>
  <div class="error">Error: {{ error.message || 'Undefined error' }}</div>
</template>

<script>
export default {
  props: {
    error: {
      type: Error,
      required: true,
    },
  },
}
</script>

<style>
.error {
  color: var(--red-background);
  font-size: 1rem;
}
</style>
