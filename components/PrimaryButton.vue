<template>
  <button role="button" class="button" @click="$emit('click', $event)"><slot></slot></button>
</template>

<style scoped>
.button {
  background-color: var(--black-stroke);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  color: var(--white);
  border: none;
  border-radius: 0.5rem;
  width: 100%;
  transition: opacity 0.1s;
  font-size: 1rem;
}

.button:active {
  opacity: 0.75;
}
</style>
