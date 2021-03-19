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
    result: [],
    hot: [],

    showIcon: false,
    showSearch: false,
    showBar: false,
    showRecommend: false,
    showResult: false,
    showNo: false,
  },

  // lifetimes: {
  //   attached: {
  //     if (mode == "icon") {
  //       this.setData({
  //         showIcon: true,
  //       });
  //     }
  //     if (mode == "page") {
  //       this.setData({
  //         showBar: true,
  //         showRecommend: true,
  //       })
  //     }
  //   }
  // },

  methods: {
    expand: function () {
      this.setData({
        showBar: true,
        showIcon: false,
        showrecommend: true,
      })
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