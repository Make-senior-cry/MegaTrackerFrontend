<template>
  <div class="container" :style="{ '--item-width': itemWidth }" :class="{PaginationBlockSmall: this.count < 6}">
    <button
      v-for="(pageNumber, index) in pageLinks"
      :key="index"
      class="pageButton"
      :class="{
        pageButtonActive: pageNumber === current,
        pageButtonArrow: isArrow(pageNumber),
      }"
      @click="handleClickPage(pageNumber)"
    >
      {{ pageNumber }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      required: true,
    },
    current: {
      type: Number,
      required: true,
    },
  },
  computed: {
    pageLinks() {
      if (this.count < 6) {
        return new Array(this.count).fill(null).map((_, index) => index + 1)
      }
      if (this.current < 4) {
        return [1, 2, 3, '→', this.count]
      }
      if (this.count - this.current < 3) {
        return [1, '←', this.count - 2, this.count - 1, this.count]
      }

      return [1, '←', this.current, '→', this.count]
    },
    itemWidth() {
      return this.count.toString().length + 1 + 'ch'
    },
  },
  methods: {
    handleClickPage(pageNumber) {
      if (this.isArrow(pageNumber)) {
        pageNumber = this.current + (pageNumber === '←' ? -1 : 1)
      }

      this.$emit('clickPage', pageNumber)
    },
    isArrow(char) {
      return char === '←' || char === '→'
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid var(--black-stroke);
}

.pageButton {
  width: var(--item-width, 4ch);
  border: none;
  background-color: transparent;
  color: var(--black-stroke);
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.2;
  margin: 0;
  display: flex;
  justify-content: center;
}

.pageButtonActive {
  border-radius: 0.25rem;
  background-color: var(--green-background);
}

.pageButtonArrow {
  color: var(--gray);
}

.PaginationBlockSmall {
  flex-grow: 0;
  flex-shrink: 1;
  width: min-content;
}
</style>
