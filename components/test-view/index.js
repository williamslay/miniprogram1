Component({
  properties: {
    value: Object,
    index: Number,
  },
  lifetimes: {
    ready() {
      const { index } = this.data
      const timer = 1000 + 300 * String(index).charAt(index.length - 1)
      setTimeout(() => this.load(), timer)
    },
  },
  methods: {
    load() {
      this.triggerEvent('load', {
        ...this.data,
      })
    },
  },
})
