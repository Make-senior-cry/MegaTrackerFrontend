<template>
  <label class='container'>
    <input
      v-model='isChecked'
      name='rememberMe'
      type='checkbox'
      @input="$emit('input', $event.target.isChecked)"
    />
    <span class='checkmark'/>
    <TextContent :value='value'/>
  </label>
</template>

<script>
import TextContent from '~/components/TextContent'
export default {
  components: { TextContent },
  props: {
    value: {
      type: String,
      default: 'Запомнить меня',
    }
  },
  data: () => ({
    isChecked: false,
  }),
}
</script>

<style scoped>
.container {
  font-size: 0.875rem;
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 1.5rem;
  width: 1.5rem;
  border: 1px solid black;
  border-radius: 0.25rem;
}

/* When the checkbox is checked, add a background */
.container input:checked ~ .checkmark {
  background-color: var(--green-background);
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 7px;
  top: 4px;
  width: 6px;
  height: 10px;
  border: solid black;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
