<template>
  <DefaultLayout>
    <CoinPageInfoSection :ticker="ticker" />
    <TextContent variant="H2" value="История цен" />
    <CoinPageHistorySection :ticker="ticker" />
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '~/components/DefaultLayout.vue'
import TextContent from '~/components/TextContent.vue'
import CoinPageInfoSection from '~/components/CoinPageInfoSection.vue'
import CoinPageHistorySection from '~/components/CoinPageHistorySection.vue'

export default {
  components: {
    DefaultLayout,
    TextContent,
    CoinPageInfoSection,
    CoinPageHistorySection,
  },
  computed: {
    ticker() {
      return this.$route.params.ticker
    },
  },
  middleware: "auth",
}
</script>
