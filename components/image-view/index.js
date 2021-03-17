Component({
  properties: {
    value: Object,
    index: Number,
  },
  lifetimes: {
    ready() {},
  },
  methods: {
    load(event) {
      this.triggerEvent('load', {
        ...this.data,
        value: { ...event.detail },
      })
    },
  },
})
