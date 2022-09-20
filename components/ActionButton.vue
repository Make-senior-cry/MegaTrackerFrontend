<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: var(--green-background);
  border: 1px solid var(--black-stroke);
  display: flex;
  gap: 1rem;
  transition: opacity 0.1s;
}

.button:active {
  opacity: 0.75;
}
</style>
