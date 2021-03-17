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
    showBar: false,
    showrecommend: false,
    showResult: false,
    showNo: false,
  },

  observers: {
    mode: function () {
      if (term == "icon") {
        this.setData({
          showIcon:true,
        });
      } else if (term == "page") {
        this.setData({
          showBar:true,
          showRecommend:true,
        })
      }
    },
  },

  methods: {
    expand: function () {
      this.setData({
        showBar : true, showIcon : false, showrecommend : true,
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
        while(history.length>16)
        history.pop();
      }
    },

    listResult: function (res) {
      if (res.data.length > 0) {
        result = res.data;
        this.setData({
          showRecommand:false,
          showResult:true,
        })
      } else {
        this.setData({
          showNo:true,
        })
      }
    },
  },
})