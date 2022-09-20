<template>
  <button role="button" class="button"><slot></slot></button>
</template>

<style>
  .button {
    background-color: var(--black-stroke);
    display: flex;
    align-content: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    color: var(--white);
    border: none;
    border-radius: 0.5rem;
    width: 100%;
  }
</style>