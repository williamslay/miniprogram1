const app = getApp()
Page({
  data: {
    cate: {
      title: "猫",
      id: null
    },
    subCate: [{
      id: null,
      title: "品种"
    }, {
      id: null,
      title: "经验"
    }, {
      id: null,
      title: "问题"
    }, {
      id: null,
      title: "交易"
    }],
    top: [{
      title: "主子不开心了怎么办",
      img: "https://alxga.goho.co/storage/attachments/2021/03/27/bdXptzLAJmm7r90C8TiLwbw75p9NrrRme7Z4yvuq_thumb.jpg",
      excerpt: "一只猫奴的日常",
      url: null
    }, {
      title: "猫咪毛发保养",
      img: "https://alxga.goho.co/storage/attachments/2021/03/27/qKjBwalKWhm8NnWk38DFZcT358iLeHNbXX7hMJFt_thumb.jpg",
      excerpt: "如何让猫咪拥有入手即化的柔顺毛发",
      url: null
    }],
    content: [{
      title: "主子不开心了怎么办",
      img: "https://alxga.goho.co/storage/attachments/2021/03/27/bdXptzLAJmm7r90C8TiLwbw75p9NrrRme7Z4yvuq_thumb.jpg",
      excerpt: "一只猫奴的日常",
      url: null
    }, {
      title: "猫咪毛发保养",
      img: "https://alxga.goho.co/storage/attachments/2021/03/27/qKjBwalKWhm8NnWk38DFZcT358iLeHNbXX7hMJFt_thumb.jpg",
      excerpt: "如何让猫咪拥有入手即化的柔顺毛发",
      url: null
    }, {
      title: "背着主子去踏青",
      img: "https://alxga.goho.co/storage/attachments/2021/03/27/pcxur4nWAw7qjoluQBtBa0Sdi8MfhJxA0iTDM3X1_thumb.jpg",
      excerpt: "运输箱选购指南",
      url: null
    }, {
      title: "皇上的寝殿",
      img: "https://alxga.goho.co/storage/attachments/2021/03/27/2VpzmWYuQbHq0luSUZdZeRiT0oJQjpdm8R9t9PlX_thumb.png",
      excerpt: "让猫咪对纸箱不屑一顾",
      url: null
    }]
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