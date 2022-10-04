<template>
  <nav class="container">
    <div class="appBar">
      <NuxtLink to="/"><h2 class="title">Mega tracker</h2></NuxtLink>
      <template v-if="pageName && pageName.length > 0">
        <span class="separator">/</span>
        <span class="pageName">{{ pageName }}</span>
      </template>
    </div>
    <div>
      <slot></slot>
    </div>
  </nav>
</template>

<script>
import { pageNames } from '~/constants'

export default {
  computed: {
    pageName() {
      return pageNames[this.$route.name](this.$route.params)
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
}

.title {
  margin: 0;
  font-style: normal;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1.2;
  color: var(--black-stroke);
  text-decoration: none;
  white-space: nowrap;
}

.separator {
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.2;
}

.pageName {
  font-size: 1.5rem;
  line-height: 1.2;
  color: #666666;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow-x: hidden;
}

.appBar {
  display: flex;
  align-items: center;
  flex-grow: 1;
  gap: 0.25rem;
  max-width: 100%;
}
</style>
