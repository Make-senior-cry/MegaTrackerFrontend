<template>
  <div class="layout">
    <nav>Navigation</nav>
    <slot></slot>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  padding: 1rem 0.75rem;
  flex-direction: column;
  gap: 1rem;
}
</style>
