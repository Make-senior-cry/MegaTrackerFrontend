<template>
  <DefaultLayout>
    <NuxtLink v-if="!isLoggedIn" to="/signIn">
      <ActionButton>
        <AccountPlusOutline />
        Войдите аккаунт, чтобы добавлять валются в избранное
      </ActionButton>
    </NuxtLink>
    <div class="group">
      <TextInput
        v-model="search"
        :attrs="{
          placeholder: 'Начните вводить тикер...',
          type: 'text',
        }"
      >
        <Magnify />
      </TextInput>
      <PrimaryButton><FilterMultipleOutline />Настроить фильтры</PrimaryButton>
    </div>
    <ErrorFallback v-if="error" :error="error" />
    <coin-list v-else :coins="coins" />
    <PaginationBlock
      :current="currentPage"
      :count="pageCount"
      @clickPage="handleClickPage"
    />
  </DefaultLayout>
</template>

<script>
import AccountPlusOutline from 'vue-material-design-icons/AccountPlusOutline.vue'
import FilterMultipleOutline from 'vue-material-design-icons/FilterMultipleOutline.vue'
import Magnify from 'vue-material-design-icons/Magnify.vue'
import CoinList from '~/components/CoinList'
import ErrorFallback from '~/components/ErrorFallback.vue'
import DefaultLayout from '~/components/DefaultLayout.vue'
import ActionButton from '~/components/ActionButton.vue'
import TextInput from '~/components/TextInput.vue'
import PrimaryButton from '~/components/PrimaryButton.vue'
import AuthService from '~/services/AuthService'
import PaginationBlock from '~/components/PaginationBlock.vue'
import CoinsAPI from '~/api/CoinsAPI'

export default {
  name: 'IndexPage',
  components: {
    CoinList,
    ErrorFallback,
    DefaultLayout,
    ActionButton,
    AccountPlusOutline,
    TextInput,
    PrimaryButton,
    FilterMultipleOutline,
    Magnify,
    PaginationBlock,
  },
  data: () => ({
    coins: [],
    error: null,
    search: '',
    currentPage: 1,
    pageCount: 10,
  }),
  computed: {
    isLoggedIn() {
      return !!AuthService.getUserEmail()
    },
  },
  mounted() {
    this.fetchCoins()
  },
  methods: {
    handleClickPage(newPage) {
      this.currentPage = newPage
      this.fetchCoins()
    },
    async fetchCoins() {
      this.error = null
      try {
        this.coins = await CoinsAPI.getCoins({ page: this.currentPage })
      } catch (e) {
        console.error(e)
        this.error = e
      }
    },
  },
}
</script>

<style scoped>
.showcase {
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
}
</style>
