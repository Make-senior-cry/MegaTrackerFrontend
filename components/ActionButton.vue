<template>
  <button class="container">
    <slot></slot>
  </button>
</template>

<style scoped>
.container {
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: var(--green-background);
  border: 1px solid var(--black-stroke);
  display: flex;
  gap: 1rem;
}
</style>
