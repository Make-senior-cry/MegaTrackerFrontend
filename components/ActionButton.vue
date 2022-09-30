<template>
  <button class="button" @click="$emit('click', $event)">
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
  text-align: left;
  gap: 1rem;
  transition: opacity 0.1s;
  font-size: 1rem;
}

.button:active {
  opacity: 0.75;
}
</style>
