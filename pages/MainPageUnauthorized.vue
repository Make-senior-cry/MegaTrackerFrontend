<!-- TODO: добавить остальные компоненты-->
<!-- TODO: настроить стили-->
<!-- TODO: сделать обработку error-->
<template>
  <div class="main">
    <TextContent value="MegaTracker" variant="H1" />
    <div class="header">
      <div class="headerLeftSide">
        <TextInput :value="inputValue" placeholder="Начните вводить тикер...">
        </TextInput>
        <PrimaryButton>
          <TextContent value="Настроить фильтры" />
        </PrimaryButton>
      </div>
      <div class="headerRightSide">
        <NuxtLink to="/auth/SignIn">
          <ActionButton>
            <TextContent
              value="Войдите в аккаунт, чтобы добавлять валюты в избранное"
            />
          </ActionButton>
        </NuxtLink>
      </div>
    </div>
    <div class="body">
      <CoinList :coins="coins" />
    </div>
  </div>
</template>

<script>
import TextContent from '~/components/TextContent'
import TextInput from '~/components/TextInput'
import PrimaryButton from '~/components/PrimaryButton'
import ActionButton from '~/components/ActionButton'
import CoinList from '~/components/CoinList'
export default {
  name: 'MainPageUnauthorized',
  components: {
    CoinList,
    ActionButton,
    PrimaryButton,
    TextInput,
    TextContent,
  },
  data: () => ({
    inputValue: '',

    url: 'http://localhost:8080/coins',
    coins: [],
  }),
  mounted() {
    this.$axios.$get(this.url).then((response) => (this.coins = response))
  },
}
</script>

<style scoped>
.main {
  display: flex;
  gap: 1rem;
  flex-direction: column;
}
.header {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.headerLeftSide {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.headerRightSide {
}
</style>
