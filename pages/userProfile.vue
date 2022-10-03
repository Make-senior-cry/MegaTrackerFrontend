<template>
  <DefaultLayout>
    <template #actions>
      <button @click="logout"><AccountMinusOutline /></button>
    </template>
    <TextContent variant="H1" :value="userEmail" />
    <ActionButton>
      <LockOutline />
      Я хочу поменять пароль
    </ActionButton>
    <TextContent variant="H2" value="Избранное" />
    <ErrorFallback v-if="error" :error="error" />
    <coin-list
      v-else
      :coins="coins"
      :loading="loading"
      :show-favourite="true"
    />
    <PaginationBlock
      :current="currentPage"
      :count="pageCount"
      @clickPage="handleClickPage"
    />
  </DefaultLayout>
</template>

<script>
import LockOutline from 'vue-material-design-icons/LockOutline.vue'
import AccountMinusOutline from 'vue-material-design-icons/AccountMinusOutline.vue'
import TextContent from '../components/TextContent.vue'
import DefaultLayout from '~/components/DefaultLayout.vue'
import AuthService from '~/services/AuthService'
import ActionButton from '~/components/ActionButton.vue'
import CoinList from '~/components/CoinList.vue'
import PaginationBlock from '~/components/PaginationBlock.vue'
import CoinsAPI from '~/api/CoinsAPI'

export default {
  components: {
    TextContent,
    DefaultLayout,
    ActionButton,
    LockOutline,
    AccountMinusOutline,
    CoinList,
    PaginationBlock,
  },
  data: () => ({
    loading: false,
    coins: [],
    error: null,
    pageCount: 100,
    currentPage: 1,
  }),
  computed: {
    userEmail() {
      return AuthService.getUserEmail()
    },
  },
  mounted() {
    this.fetchCoins()
  },
  methods: {
    logout() {
      AuthService.removeUser()
      this.$router.replace('/')
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
    handleClickPage(newPage) {
      this.currentPage = newPage
      this.fetchCoins()
    },
  },
}
</script>
