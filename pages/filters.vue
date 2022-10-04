<template>
  <DefaultLayout>
    <TextContent variant="H2" value="Минимальная цена" />
    <TextContent variant="H2" value="Максимальная цена" />
    <TextContent variant="BODY" value="0, чтобы не учитывать" />
    <TextContent variant="H2" value="Растущие коины" />
    <CheckBox v-model="isRising" text="Показывать только растущие коины" />
  </DefaultLayout>
</template>

<script>
import CheckBox from '../components/CheckBox.vue'
import DefaultLayout from '~/components/DefaultLayout.vue'
import TextContent from '~/components/TextContent.vue'
export default {
  components: { DefaultLayout, TextContent, CheckBox },
  data: () => ({
    minPrice: 0,
    maxPrice: 0,
    isRising: false,
  }),
}
</script>
