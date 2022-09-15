<template>
  <div
    class="bord"
    :class="{green: isIncreased}">
    {{ deltaPrice }}
  </div>
</template>

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
<!--
TODO: Изменить размеры(сделать адаптивными), отцентрировать текст по вертикали, добавить логику добавления "+" или "-"
TODO: Подобрать шрифт для текста
-->
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
.green {
  background: #9EF8C2;
  width: 56px;
}
</style>
