<script>
const textType = {
  H1: 'H1',
  H2: 'H2',
  H3: 'H3',
  BODY: 'BODY',
}

const tagMap = {
  [textType.BODY]: 'span',
  [textType.H2]: 'h2',
  [textType.H1]: 'h1',
  [textType.H3]: 'h3',
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
    return h(
      tagMap[this.variant],
      { class: [this.variant, 'text'].join(' ') },
      this.value
    )
  },
}
</script>

<style scoped>
.text {
  margin: 0;
  padding: 0;
}

.H1 {
  font-size: 2rem;
  font-weight: 400;
}

.H2 {
  font-weight: 700;
  font-size: 1.25rem;
}

.H3 {
  font-weight: 700;
  font-size: 1rem;
}

.BODY {
  font-size: 1rem;
  line-height: 1.5;
}
</style>
