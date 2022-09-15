<template>
  <div
    class="bord"
    :class="{greenBackground: isIncreased}">
    {{ deltaPrice }}
  </div>
</template>
<!--
TODO: Изменить размеры(сделать адаптивными), отцентрировать текст по вертикали, добавить логику добавления "+" или "-"
TODO: Подобрать шрифт для текста
-->
<script>
export default {
  name: "CoinDeltaPrice",
  props: {
    deltaPrice: {
      type: Number,
      required: true,
    },
    isIncreased: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style scoped>
.bord {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  border-radius: 8px;
  text-align: center;
  width: 54px;
  height: 25px;
  background: #FE6868;
}
.greenBackground {
  background: #9EF8C2;
  width: 56px;
}
</style>
