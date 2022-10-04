<template>
  <DefaultLayout>

  </DefaultLayout>
</template>

<script>
import DefaultLayout from '~/components/DefaultLayout.vue'
export default {
  components: { DefaultLayout },
  data: () => ({
    minPrice: 0,
    maxPrice: 0,
    isRising: false,
  })
}
</script>
