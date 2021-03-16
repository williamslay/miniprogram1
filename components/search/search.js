Component({
  properties: {
    mode: {
      type: String,
      //页面模式或图标模式
      value: "icon"
      //icon, page
    }
  },
  data: {
    history: [],
    result: [],
    hot: [],

    showIcon: false,
    showBar: false,
    showrecommend: false,
    showResult: false,
    showNo: false
  },
  lifetimes: {
    attached: function () {
      if (mode == "icon") {
        showIcon.setData(true);
      } else if (mode == "page") {
        showBar.setData(true);
        showRecommand.setData(true);
      }
    }
  },
  methods: {
    expand: function () {
      showBar = true; showIcon = false; showrecommend = true;
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
        })
      }
    },
    listResult: function (res) {
      if (res.data.length > 0) {
        result = res.data;
        showResult.setData(true);
      } else {
        showNo.setData(true);
      }
    },
  }
})