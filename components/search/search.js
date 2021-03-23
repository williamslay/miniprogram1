const app = getApp()
Component({
  properties: {
    mode: {
      type: String,
      //页面模式或图标模式
      value: "icon"
      //icon, page
    },
  },

  data: {
    history: ["123", "123", "123"],
    results: [{
      title: 1,
      img: "/images/Edit.png",
      excerpt: 123,
      url: null
    }, {
      title: 1,
      img: "/images/Edit.png",
      excerpt: 123,
      url: null
    }, {
      title: 1,
      img: "/images/Edit.png",
      excerpt: 123,
      url: null
    }, {
      title: 1,
      img: "/images/Edit.png",
      excerpt: 123,
      url: null
    }],
    recommend: [{
      title: 1,
      img: "/images/Edit.png",
      excerpt: 123,
      url: null
    }, {
      title: 1,
      img: "/images/Edit.png",
      excerpt: 123,
      url: null
    }, {
      title: 1,
      img: "/images/Edit.png",
      excerpt: 123,
      url: null
    }],
    discover: [{
      title: 1,
      img: "/images/Edit.png",
      excerpt: 123,
      url: null
    }, {
      title: 1,
      img: "/images/Edit.png",
      excerpt: 123,
      url: null
    }, {
      title: 1,
      img: "/images/Edit.png",
      excerpt: 123,
      url: null
      },],
    category:[""],

    showIcon: false,
    showSearch: false,
    showHistory: true,
    showRecommend: true,
    showDiscover: false,
    showResult: false,
    showNo: false,
    searched: false,

    showOver: false,
    searchVal: "",
  },

  lifetimes: {
    attached: function () {
      if (this.properties.mode == "icon") {
        this.setData({
          showIcon: true,
          showOver: true
        })
      }
      if (this.properties.mode == "page") {
        this.setData({
          showSearch: true,
          showHistory: true,
          showRecommend: true
        })
      }
    }
  },
  pageLifetimes: {
    show: function () {
      if (this.properties.mode == "page") {
        this.setData({
          showSearch: true
        })
      }
    },
    hide: function () {
      this.setData({
        showSearch: false,
        showRecommend: true,
        showHistory: true,
        showDiscover: false,
        showResult: false,
        searched: false
      })
      if (this.properties.mode == "icon") {
        this.setData({
          showIcon: true
        })
      }
    }
  },

  methods: {
    exit: function () {
      this.setData({
        showSearch: false,
        showRecommend: true,
        showHistory: true,
        showDiscover: false,
        showResult: false,
        searched: false
      })
      if (this.properties.mode == "icon") {
        this.setData({
          showIcon: true
        })
      }
      if (this.properties.mode == "page") {
        wx.navigateBack({
          delta: 1,
        })
      }
    },

    onClick: function () {
      this.setData({
        showIcon: false,
        showSearch: true,
      })
    },

    onFocus: function (e) {
      this.setData({
        showRecommend: false,
        showHistory: false,
        showResult: false,
        searched: false
      })
      wx.request({
        url: `${app.globalData.baseURL}/wp/v2/search`,
        data: {
          type: "post",
          search: e.detail.value
        },
        success: (res) => {
          this.setData({
            discover: res.data,
            showDiscover: true,
          })
        }
      })
    },

    onBlur: function () {
      if (this.data.searched == false) {
        if (this.properties.mode == "icon") {
          this.setData({
            showIcon: true,
            showHistory: true,
            showRecommend: true,
            showDiscover: false,
            showResult: false,
            showSearch: false
          })
        }
        if (this.properties.mode == "page") {
          this.setData({
            showIcon: false,
            showHistory: true,
            showRecommend: true,
            showDiscover: false,
            showResult: false,
            showSearch: true
          })
        }
      }
    },

    onInput: function (e) {
      wx.request({
        url: `${app.globalData.baseURL}/wp/v2/search`,
        data: {
          search: e.detail.value,
          type: "post"
        },
        success: (res) => {
          this.setData({
            discover: res.data,
          })
        }
      })
    },

    onConfirm: function (e) {
      let {
        history
      } = this.data
      if (e.detail.value) {
        this.setData({
          searched: true
        })
        history.push(e.detail.value);
        wx.request({
          url: `${app.globalData.baseURL}/wp/v2/search`,
          data: {
            search: e.detail.value,
            type: "post"
          },
          success: (res) => {
            if (res.data != '') {
              this.setData({
                results: res.data,
                showResult: true,
                showNo: false,
                showDiscover: false,
              })
            } else {
              this.setData({
                showResult: true,
                showNo: true,
                showDiscover: false,
              })
            }
          }
        })
      }
      while (history.length > 10)
        history.pop()
      this.setData({
        history
      })
    },

    openHistory: function (item) {
      this.setData({
        searchVal: item
      })
    }
  },
})