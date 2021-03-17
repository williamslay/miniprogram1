Page({
  data: {
    history: [],
    result: [],
    hot: [],

    showBar: true,
    showRecommend: true,
    showResult: false,
    showNo: false,

    that: this,
  },

  exit: function () {
    wx.navigateBack({
      delta: 1
    })
  },

  expand: function () {
    that.setData({
      showBar: true,
      showIcon: false,
      showrecommend: true,
    })
  },

  searchClear: function () {
    that.setData({
      showRecommend: true,
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
})