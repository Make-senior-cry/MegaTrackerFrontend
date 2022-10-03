<template>
  <div class="loadingContainer">
    <Loading class="loading" />
  </div>
</template>

<script>
import Loading from 'vue-material-design-icons/Loading.vue'
export default {
  components: { Loading },
}
</script>

<style scoped>
.loadingContainer {
  display: flex;
  justify-content: center;
  padding: 1rem;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.loading {
  animation-name: spin;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
</style>
