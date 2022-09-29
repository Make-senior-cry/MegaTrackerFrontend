<template>
  <nav class="container">
    <div class="appBar">
      <h2 class="title">Mega tracker</h2>
      <span v-if="pageName && pageName.length > 0" class="pageName">{{
        pageName
      }}</span>
    </div>
    <div>
      <slot></slot>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    pageName() {
      return null
    },
  },
}
</script>

<style scoped>
.cotnainer {
  display: flex;
  align-items: center;
}

.title {
  margin: 0;
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.2;
}

.appBar > *:not(:last-child)::after {
  content: '/';
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.2;
  margin-left: 0.25rem;
}

.pageName {
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.2;
  color: #666666;
}

.appBar {
  display: flex;
  align-items: center;
  flex-grow: 1;
  gap: 0.25rem;
}
</style>
