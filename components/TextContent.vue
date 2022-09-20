<script>
const textType = {
  H1: 'H1',
  H2: 'H2',
  BODY: 'BODY',
}

const tagMap = {
  [textType.BODY]: 'span',
  [textType.H2]: 'h2',
  [textType.H1]: 'h1',
}

export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    variant: {
      type: String,
      default: textType.BODY,
    },
  },
  render(h) {
    return h(tagMap[this.variant], { class: this.variant }, this.value)
  },
}
</script>


<style scoped>
  .H1 {
    font-size: 2rem;
  }

  .H2 {
    font-weight: 700;
    font-size: 1.25rem;
  }

  .BODY {
    font-size: 1rem;
    line-height: 1.5;
  }
</style>