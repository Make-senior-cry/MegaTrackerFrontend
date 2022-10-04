<template>
  <DefaultLayout>
    <form class='group group_col' @submit.prevent>
      <fieldset class='group group_col group_dense'>
        <TextContent variant="H2" value="Минимальная цена" />
        <TextInput
          v-model="minPrice"
          :attrs="{
            required: true,
            type: 'number',
            placeholder: 'Введите минимальную цену',
            min: 0,
          }"
        />
      </fieldset>
      <fieldset class='group group_col group_dense'>
        <TextContent variant="H2" value="Максимальная цена" />
        <TextInput
          v-model="maxPrice"
          :attrs="{
            required: true,
            type: 'number',
            min: minPrice,
          }"
        />
        <TextContent variant="BODY" value="0, чтобы не учитывать" />
      </fieldset>
      <fieldset class='group group_col group_dense'>
        <TextContent variant="H2" value="Растущие коины" />
        <CheckBox v-model="isRising" text="Показывать только растущие коины" />
      </fieldset>

      <PrimaryButton type='submit'>
        Применить
      </PrimaryButton>
    </form>
  </DefaultLayout>
</template>

<script>
import CheckBox from '../components/CheckBox.vue'
import DefaultLayout from '~/components/DefaultLayout.vue'
import TextContent from '~/components/TextContent.vue'
import TextInput from '~/components/TextInput'
import CoinsAPI from '~/api/CoinsAPI'
import PrimaryButton from '~/components/PrimaryButton'
export default {
  components: { PrimaryButton, TextInput, DefaultLayout, TextContent, CheckBox },
  data: () => ({
    minPrice: 0,
    maxPrice: 0,
    isRising: false,
  }),
  methods: {
    handleChangeMinPrice(value) {
      CoinsAPI.setFiltersMinPrice(value)
      this.minPrice = CoinsAPI.filters.minPrice
    },
    handleChangeMaxPrice(value) {
      CoinsAPI.setFiltersMaxPrice(value)
      this.maxPrice = CoinsAPI.filters.maxPrice
    },
    handleChangeIsRising(isRising) {
      CoinsAPI.setFiltersRising(isRising)
      this.isRising = CoinsAPI.filters.isRising
    },
  }
}
</script>
