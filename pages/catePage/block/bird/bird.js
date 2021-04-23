const app = getApp()
Page({
  data: {
    cate: {
      title: null,
      id: null
    },
    subCate: [{
      id: null,
      title: null
    }],
    top: [],
    content: []
  },
  // onLoad: function (options) {
  //   cate.id = options.cate
  //   wx.request({
  //     url: `${app.globalData.baseURL}/api/threads?filter[categoryId]=${cate}`,
  //     success: (res) => {
  //       cate.title=res.data.
  //       var threads = res.data.data
  //       for (var idx = 0; threads.length >= 0; ++idx) {
  //         wx.reques({
  //           url: `${app.globalData.baseURL}/api/threads/${threads[idx].id}`
  //         })
  //       }
  //     }
  //   })
  // },
  // onPullDownRefresh: function () {
  //   this.onLoad()
  //   wx.stopPullDownRefresh()
  // }
})