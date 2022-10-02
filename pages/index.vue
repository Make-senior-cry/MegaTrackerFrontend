<template>
  <DefaultLayout>
    <template v-if="isLoggedIn" #actions>
      <NuxtLink to="/userProfile"><AccountCircleOutline /></NuxtLink>
    </template>
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
    <coin-list v-else :coins="coins" :loading="loading" />
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
import AccountCircleOutline from 'vue-material-design-icons/AccountCircleOutline.vue'
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
    AccountCircleOutline,
    AccountPlusOutline,
    TextInput,
    PrimaryButton,
    FilterMultipleOutline,
    Magnify,
    PaginationBlock,
  },
  data: () => ({
    loading: false,
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
      this.loading = true
      try {
        const { coins, pageCount } = await CoinsAPI.getCoins({
          page: this.currentPage,
        })
        this.coins = coins
        this.pageCount = pageCount
      } catch (e) {
        console.error(e)
        this.error = e
      } finally {
        this.loading = false
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
