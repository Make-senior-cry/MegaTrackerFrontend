<template>
  <main></main>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({}),
  created() {
    this.$router.push('/MainPageUnauthorized')
  },
}
</script>

<style scoped></style>
