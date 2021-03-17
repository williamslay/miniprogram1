Component({
  properties: {
    views: Array,
    options: {
      type: Object,
      default: {
        span: 20,
        column: 2,
        gap: [10, 10],
        rows: 2,
      },
    },
  },
  data: {
    childNode: {},
  },
  methods: {
    load({ detail }) {
      this.setData({ childNode: detail })
    },
  },
})
