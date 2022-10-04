<template>
  <label class="ExpandingTextInput">
    <textarea
      class="textarea"
      :class="{ textareaFilled: value.length > 0 }"
      v-bind="attrs"
      :value='value'
      @input="$emit('input', $event.target.value)"
    >
    </textarea>
    <div class="icon">
      <slot></slot>
      {{ label }}
    </div>
  </label>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    attrs: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style scoped>
.ExpandingTextInput {
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: 0.5rem 1rem;
  gap: 0.5rem;
  border: 1px solid var(--black-stroke);
  border-radius: 0.5rem;
}

.textarea {
  font-family: inherit;
  font-size: 1rem;
  line-height: 1.5;
  width: 100%;
  padding: 0;
  border: none;
  background-color: transparent;
  outline: none;
  resize: none;
  transition: max-height 0.3s;
  height: 1.75rem;
  max-height: 1.75rem;
  appearance: none;
  vertical-align: bottom;
}

.textarea:focus,
.textareaFilled {
  height: 7rem;
  max-height: 7rem;
}

.textarea:focus ~ .icon,
.textareaFilled ~ .icon {
  display: none;
}

.icon {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  color: var(--gray);
}
</style>
