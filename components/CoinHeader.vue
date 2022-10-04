<template>
  <header class="CoinHeader">
    <div class="info">
      <TextContent :value="ticker.toUpperCase()" variant="H1" />
      <span class="name">{{ name }}</span>
    </div>
    <button class="buttonFavourite" @click="$emit('clickFavorite')">
      <HeartIcon v-if="isFavorite" :size="32" color="black" />
      <HeartOutlineIcon v-else :size="32" color="black" />
    </button>
  </header>
</template>

<script>
import HeartIcon from 'vue-material-design-icons/Heart.vue'
import HeartOutlineIcon from 'vue-material-design-icons/HeartOutline.vue'
import TextContent from './TextContent.vue'

export default {
  components: { TextContent, HeartIcon, HeartOutlineIcon },
  props: {
    name: {
      type: String,
      required: true,
    },
    ticker: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style scoped>
.CoinHeader {
  display: flex;
  align-content: center;
  justify-content: space-between;
  width: 100%;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.name {
  font-size: 0.875rem;
  line-height: 1.2;
  color: var(--gray);
}

.buttonFavourite {
  background: transparent;
  border: none;
  transition: opacity 0.1s;
}

.buttonFavourite:active {
  opacity: 0.75;
}
</style>
