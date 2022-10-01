<template>
  <div class="layout">
    <AppBar>
      <slot name="actions"></slot>
    </AppBar>
    <slot></slot>
  </div>
</template>

<script>
import AppBar from './AppBar.vue'
export default {
  components: { AppBar },
}
</script>

<style scoped>
.layout {
  display: flex;
  padding: 1rem 0.75rem;
  flex-direction: column;
  gap: 1rem;
  max-width: 50.5rem;
  margin: 0 auto;
}
</style>
