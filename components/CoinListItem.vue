<template>
  <div class="coinContainer">
    <div class="leftSide">
      <img class="coinIcon" :src="coin.iconUrl" :alt="coin.name" />
      <div class="info">
        <TextContent :value="coin.ticker" variant="H3" />
        <span class="coinName">
          {{ coin.name }}
        </span>
      </div>
    </div>
    <div class="rightSide">
      <div class="priceInfo">
        <TextContent :value="coin.currentPrice + ' $'" variant="H3" />
        <CoinDeltaPrice :delta-price="coin.deltaPrice" :delta-price-percent='coin.deltaPricePercent'/>
      </div>
      <button
        v-if="showFavourite"
        class="buttonFavourite"
        @click="$emit('clickFavourite')"
      >
        <HeartIcon v-if="coin.isFavorite" :size="32" color="black" />
        <HeartOutlineIcon v-else :size="32" color="black" />
      </button>
    </div>
  </div>
</template>

<script>
import HeartIcon from 'vue-material-design-icons/Heart.vue'
import HeartOutlineIcon from 'vue-material-design-icons/HeartOutline.vue'
import TextContent from './TextContent.vue'
import CoinDeltaPrice from '~/components/CoinDeltaPrice'
import { CoinListItemDTO } from '~/dto/CoinListItemDTO'

export default {
  components: { CoinDeltaPrice, TextContent, HeartIcon, HeartOutlineIcon },
  props: {
    coin: {
      type: CoinListItemDTO,
      required: true,
    },
    showFavourite: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.coinContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  padding: 0.5rem 1rem;
  transition: opacity 0.1s;
}

.coinContainer:active {
  opacity: 0.75;
}

.leftSide {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.coinIcon {
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  background-color: var(--black-stroke);
}

.info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.coinName {
  font-size: 0.875rem;
  line-height: 1.2;
  color: var(--gray);
}

.rightSide {
  display: flex;
  align-items: stretch;
  gap: 0.5rem;
}

.priceInfo {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 0.25rem;
}

.buttonFavourite {
  background-color: transparent;
  border: none;
}
</style>
