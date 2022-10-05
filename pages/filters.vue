<template>
  <DefaultLayout>
    <form class="group group_col" @submit.prevent>
      <fieldset class="group group_col group_dense">
        <TextContent variant="H2" value="Минимальная цена" />
        <TextInput
          :value="minPrice"
          :attrs="{
            required: true,
            type: 'number',
            placeholder: 'Введите минимальную цену',
            min: '0',
          }"
          @input="handleChangeMinPrice"
        />
      </fieldset>
      <fieldset class="group group_col group_dense">
        <TextContent variant="H2" value="Максимальная цена" />
        <TextInput
          :value="maxPrice"
          :attrs="{
            required: true,
            type: 'number',
            placeholder: 'Введите максимальную цену',
            min: minPrice,
          }"
          @input="handleChangeMaxPrice"
        />
        <TextContent variant="BODY" value="0, чтобы не учитывать" />
      </fieldset>
      <fieldset class="group group_col group_dense">
        <TextContent variant="H2" value="Растущие коины" />
        <CheckBox
          :value="isRising"
          text="Показывать только растущие коины"
          @input="handleChangeIsRising"
        />
      </fieldset>
      <NuxtLink class='no-shrink' to='/'>
        <PrimaryButton type="submit"> Применить </PrimaryButton>
      </NuxtLink>

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
  components: {
    PrimaryButton,
    TextInput,
    DefaultLayout,
    TextContent,
    CheckBox,
  },
  data: () => ({
    minPrice: String(CoinsAPI.filters.minPrice),
    maxPrice: String(CoinsAPI.filters.maxPrice),
    isRising: CoinsAPI.filters.isRising,
  }),
  methods: {
    handleChangeMinPrice(value) {
      CoinsAPI.setFiltersMinPrice(+value)
      this.minPrice = String(CoinsAPI.filters.minPrice)
      console.log(CoinsAPI.filters)
    },
    handleChangeMaxPrice(value) {
      CoinsAPI.setFiltersMaxPrice(+value)
      this.maxPrice = String(CoinsAPI.filters.maxPrice)
    },
    handleChangeIsRising(isRising) {
      CoinsAPI.setFiltersRising(isRising)
      this.isRising = CoinsAPI.filters.isRising
    },
  },
}
</script>
