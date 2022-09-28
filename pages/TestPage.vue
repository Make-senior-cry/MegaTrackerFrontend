<template>
  <div>
    <div class="showcase">
      <CoinDeltaPrice delta-price="0" />
      <CoinDeltaPrice delta-price="-45500" large />
    </div>
    <div class="showcase">
      <ActionButton><TextContent value="Hello fuckers!" /></ActionButton>
    </div>
    <div class="showcase">
      <PrimaryButton><TextContent value="Primary button" /></PrimaryButton>
    </div>
    <div class="showcase">
      <TextInput v-model="inputValue" placeholder="Text input" />
    </div>
    <div>
      <CoinListItem
        :coin="{
            ticker: 'BTC',
            name: 'Bitcoin',
            currentPrice: 49500,
            deltaPrice: 480,
            iconURL: '',
          }"
      />
    </div>
    <div>
      <coin-list
        :coins="[
            {
              ticker: 'BTC',
              name: 'Bitcoin',
              currentPrice: 49500,
              deltaPrice: 480,
              iconURL: '',
            },
            {
              ticker: 'ETH',
              name: 'Etherium',
              currentPrice: 20000,
              deltaPrice: -200,
              iconURL: '',
            },
          ]"
        :show-favourite="true"
      />
    </div>
    <div class="showcase">
      <CoinHeader name="Bitcoin" ticker="btc" :is-favourite="false" />
    </div>
    <div class="showcase">
      <CoinHistoryListItem
        :coin-price-item="{
            date: '22.09.2022',
            currentPrice: 58000,
            deltaPrice: 480,
          }"
      />
    </div>
    <div class="showcase">
      <CoinHistoryList
        :coin-price-items="[
            {
              date: '22.09.2022',
              currentPrice: 5600,
              deltaPrice: 200,
            },
            {
              date: '22.09.2022',
              currentPrice: 5800,
              deltaPrice: -100,
            },
          ]"
      />
    </div>
    <div class="showcase">
      <CoinInfoBlock :title="'Текущая цена'">
        <TextContent value="59000" variant="H3" />
      </CoinInfoBlock>
      <CoinInfoBlock :title="'Изменение цены'">
        <CoinDeltaPrice delta-price="480" />
      </CoinInfoBlock>
    </div>
  </div>

</template>

<script>
import CoinInfoBlock from "~/components/CoinInfoBlock";
import CoinHistoryList from "~/components/CoinHistoryList";
import CoinHistoryListItem from "~/components/CoinHistoryListItem";
import CoinDeltaPrice from "~/components/CoinDeltaPrice";
import ActionButton from "~/components/ActionButton";
import TextContent from "~/components/TextContent";
import PrimaryButton from "~/components/PrimaryButton";
import CoinListItem from "~/components/CoinListItem";
import CoinList from "~/components/CoinList";
import CoinHeader from "~/components/CoinHeader";
import TextInput from "~/components/TextInput";

export default {
  name: "testPage",
  components: {
    CoinInfoBlock,
    CoinHistoryList,
    CoinHistoryListItem,
    CoinDeltaPrice,
    ActionButton,
    TextContent,
    PrimaryButton,
    CoinListItem,
    CoinList,
    CoinHeader,
    TextInput,
  },
  data: () => ({
    inputValue: '',

    url: 'http://localhost:8080/coins',
    coins: [],
  }),
};
</script>

<style scoped>
.showcase {
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
}
</style>
