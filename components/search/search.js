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
    history: [],
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
    }, ],

    showIcon: false,
    showSearch: false,
    showBar: false,
    showRecommend: false,
    showDiscover: false,
    showResult: false,
    showNo: false,

    options: {
      span: 30,
      column: 2,
      gap: [10, 10],
      rows: 2,
    },
  },

  lifetimes: {
    attached: function () {
      if (this.properties.mode == "icon") {
        this.setData({
          showIcon: true,
        });
      }
      if (this.properties.mode == "page") {
        this.setData({
          showSearch: true,
          showBar: true,
          showRecommend: true,
        })
      }
    }
  },
  pageLifetimes: {
    show: function () {
      if (this.properties.mode == "page")
        this.setData({
          showSearch: true,
        })
    }
  },

  methods: {
    exit: function () {
      if (this.properties.mode == "icon") {
        this.setData({
          showSearch: false,
          showIcon: true
        })
      }
      if (this.properties.mode == "page") {
        this.setData({
          showSearch: false,
        })
      }
      wx.navigateBack({
        delta: 1,
      });
    },

    expand: function () {
      this.setData({
        showIcon: false,
        showSearch: true,
        showBar: true,
        showRecommend: true,
      })
    },

    searchStart: function () {
      wx.request({
        url: `${app.globalData.baseURL}/wp/v2/search`,
        success: (res) => {
          this.setData({
            discover: res.data,
            showRecommend: false,
            showDiscover: true,
          })
        }
      })
    },

    searchDiscover: function (e) {

    },

    searchNow: function (e) {
      if (e.detail.value) {
        history.push(e.detail.value);
        wx.request({
          url: app.globalData.baseURL + "/wp/v2/search",
          data: {
            search: history[0],
            type: "post"
          },
          method: "GET",
          dataType: "json",
          success: "listResult",
        });
        while (history.length > 16)
          history.pop();
      }
    },

    listResult: function (res) {
      if (res.data.length > 0) {
        result = res.data;
        this.setData({
          showRecommand: false,
          showResult: true,
        })
      } else {
        this.setData({
          showNo: true,
        })
      }
    },
  },
})