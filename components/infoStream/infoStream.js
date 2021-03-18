Component({
  properties: {
    route: {
      type: String,
      value: "/wp/v2/posts"
    },
    args: {
      type: Object,
      default: {}
    }
  },
  data: {
    loading: false,
    options: {
      span: 30,
      column: 2,
      gap: [10, 10],
      rows: 2,
    },
    images: [],
    _page: 1,
    _type: 0
  },
  pageLifetimes: {
    show: function () {
      console.log("show called\n")
      this.data._type = 1
      this.getHuaBanList()
      this.onReachBottom()
      this.setData({ _type: 1 })
    },
  },
  methods: {
    getHuaBanList: function () {
      const app = getApp();
      const baseUrl = app.globalData.baseURL
      console.log("get called")
      let { images, _page } = this.data
      var img = {
        id: null,
        title: null,
        excerpt: null,
        url: null
      }
      wx.request({
        url: `${baseUrl}${this.properties.route}`,
        data: args + {
          per_page: 10,
          page: _page,
        },
        success: (res) => {
          img.title = res.data.title
          img.excerpt = res.data.excerpt
          img.id = res.data.id
          wx: request({
            url: `${baseUrl}/wp/v2/media/?p=${res.data.featured_media}`,
            data: {
              id: res.data.featured_media,
              _fields: link,
            },
            success: (res) => {
              img.url = res.data.link
              image.push(img)
            }
          })
          this.setData({ images, _page: ++_page })
          wx.hideLoading()
        },
      })
    },
    onReachBottom: function () {
      console.log("bottom called")
      let { loading, _type } = this.data
      if (!loading) {
        wx.showLoading({
          title: 'loading...',
        })
        loading = true
        setTimeout(() => {
          _type === 0 ? this.generateViews() : this.getHuaBanList()
          wx.hideLoading()
          loading = false
        }, 1000)
      }
    },
  }
})