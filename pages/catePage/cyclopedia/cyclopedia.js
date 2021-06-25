const app = getApp()
Page({
  data: {
    cate: null,
    cates: []
  },
  ////    ////    ////    ////
  onLoad: function () {
    wx: request({
      url: `${app.globalData.baseURL}/api/categories`,
      success: (res) => {
        for (var i = 0; i < res.data.data.length; ++i) {
          cates.push({
            id: res.data.data[i].id,
            title: res.data.data[i].attributes.name
          })
        }
      }
    })
    cate = cates[0]
  },

  cateSet: (value) => {
    cate = value
  }
})