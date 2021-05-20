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
    history: ["猫粮", "幼猫饲养", "美容"],
    results: [{
      title: "简明仓鼠饲养法",
      img: "https://alxga.goho.co/storage/attachments/2021/03/27/AzXrXhrpVpn9iv2JP2NrWITxDaLFTP8iFLPoCWzR_thumb.jpg",
      excerpt: "从仓鼠原始生活环境到饲养需求, 带你开启仓鼠饲养之旅",
      url: "../post/post"
    }, {
      title: "狗粮选择",
      img: "https://alxga.goho.co/storage/attachments/2021/03/27/YnSAr488yNaRBEbnO4ngz0uHveSqe7OoMo4idmHZ_thumb.jpg",
      excerpt: "带你寻找营养丰富, 助于增肌的优质狗粮",
      url: "../post/post"
    }, {
      title: "选购健康的金鱼",
      img: "https://alxga.goho.co/storage/attachments/2021/03/27/eJxOrYnlYP9eat8AFyiGrdI2r1KEl0yB8D9KFXWy_thumb.jpg",
      excerpt: "什么样的鱼较为健康, 如何从健康的表象中读出真实状况",
      url: "../post/post"
    }, {
      title: "主子不开心了怎么办",
      img: "https://alxga.goho.co/storage/attachments/2021/03/27/bdXptzLAJmm7r90C8TiLwbw75p9NrrRme7Z4yvuq_thumb.jpg",
      excerpt: "一只猫奴的日常",
      url: "../post/post"
    }, {
      title: "乌龟品种概述",
      img: "https://alxga.goho.co/storage/attachments/2021/03/27/yJULa5XNgqjelRjP1ylnavTZdHDzA8e7QkMnfibQ_thumb.jpg",
      excerpt: "各品种乌龟习性与体态特征",
      url: "../post/post"
    }, {
      title: "猫咪毛发保养",
      img: "https://alxga.goho.co/storage/attachments/2021/03/27/qKjBwalKWhm8NnWk38DFZcT358iLeHNbXX7hMJFt_thumb.jpg",
      excerpt: "如何让猫咪拥有入手即化的柔顺毛发",
      url: "../post/post"
    }, {
      title: "兔子窝?",
      img: "https://alxga.goho.co/storage/attachments/2021/03/27/zzMZaiNeGhdRnEdvyuksl3XIIkyBffQ9PPnLkUbX_thumb.jpg",
      excerpt: "给兔兔一个温暖的家",
      url: "../post/post"
    }, {
      title: "仓鼠选购指南",
      img: "https://alxga.goho.co/storage/attachments/2021/03/27/AQcVq89fqtIz6CuKRVpJLgKQS1h2kQA0WPX8j0dN_thumb.jpg",
      excerpt: "找到心仪的另一半毛茸茸",
      url: "../post/post"
    }, {
      title: "背着主子去踏青",
      img: "https://alxga.goho.co/storage/attachments/2021/03/27/pcxur4nWAw7qjoluQBtBa0Sdi8MfhJxA0iTDM3X1_thumb.jpg",
      excerpt: "运输箱选购指南",
      url: "../post/post"
    }, {
      title: "从零开始的养狗生活",
      img: "https://alxga.goho.co/storage/attachments/2021/03/27/v6KphIVQhH1Hp1MhgPIXlCL3TbvWVR2vNpIR65JG_thumb.jpg",
      url: "../post/post"
    }],
    recommend: [{
      title: "简明仓鼠饲养法",
      img: "https://alxga.goho.co/storage/attachments/2021/03/27/AzXrXhrpVpn9iv2JP2NrWITxDaLFTP8iFLPoCWzR_thumb.jpg",
      url: "../post/post"
    }, {
      title: "狗粮选择",
      img: "https://alxga.goho.co/storage/attachments/2021/03/27/YnSAr488yNaRBEbnO4ngz0uHveSqe7OoMo4idmHZ_thumb.jpg",
      url: "../post/post"
    }, {
      title: "选购健康的金鱼",
      img: "https://alxga.goho.co/storage/attachments/2021/03/27/eJxOrYnlYP9eat8AFyiGrdI2r1KEl0yB8D9KFXWy_thumb.jpg",
      url: "../post/post"
    }, {
      title: "主子不开心了怎么办",
      img: "https://alxga.goho.co/storage/attachments/2021/03/27/bdXptzLAJmm7r90C8TiLwbw75p9NrrRme7Z4yvuq_thumb.jpg",
      url: "../post/post"
    }],
    discover: [{
      title: "乌龟品种概述",
      img: "https://alxga.goho.co/storage/attachments/2021/03/27/yJULa5XNgqjelRjP1ylnavTZdHDzA8e7QkMnfibQ_thumb.jpg",
      url: "../post/post"
    }, {
      title: "猫咪毛发保养",
      img: "https://alxga.goho.co/storage/attachments/2021/03/27/qKjBwalKWhm8NnWk38DFZcT358iLeHNbXX7hMJFt_thumb.jpg",
      url: "../post/post"
    }, {
      title: "兔子窝?",
      img: "https://alxga.goho.co/storage/attachments/2021/03/27/zzMZaiNeGhdRnEdvyuksl3XIIkyBffQ9PPnLkUbX_thumb.jpg",
      url: "../post/post"
    }, {
      title: "仓鼠选购指南",
      img: "https://alxga.goho.co/storage/attachments/2021/03/27/AQcVq89fqtIz6CuKRVpJLgKQS1h2kQA0WPX8j0dN_thumb.jpg",
      url: "../post/post"
    }, {
      title: "背着主子去踏青",
      img: "https://alxga.goho.co/storage/attachments/2021/03/27/pcxur4nWAw7qjoluQBtBa0Sdi8MfhJxA0iTDM3X1_thumb.jpg",
      url: "../post/post"
    }, {
      title: "皇上的寝殿",
      img: "https://alxga.goho.co/storage/attachments/2021/03/27/2VpzmWYuQbHq0luSUZdZeRiT0oJQjpdm8R9t9PlX_thumb.png",
      url: "../post/post"
    }],
    category: [{
      title: "综合",
      id: null
    }, {
      title: "好物",
      id: null
    }, {
      title: "服务",
      id: null
    }, {
      title: "交易",
      id: null
    }, {
      title: "经验",
      id: null
    }, {
      title: "用户",
      id: null
    }],

    showIcon: false,
    showSearch: false,
    showHistory: true,
    showRecommend: true,
    showDiscover: false,
    showCate: false,
    showResult: false,
    showNo: false,
    searched: false,

    showOver: false,
    searchVal: "",
    searchCate: null,
  },

  lifetimes: {
    attached: function () {
      if (this.properties.mode == "icon") {
        this.setData({
          showIcon: true,
          showOver: true,
        })
      }
      if (this.properties.mode == "page") {
        this.setData({
          showSearch: true,
          showHistory: true,
          showRecommend: true
        })
      }
      // let {
      //   recommend
      // } = this.data
      // wx.request({
      //   url: `${app.globalData.baseURL}/api/threads?isEssence=true`,
      //   success: (res) => {
      //     var ii, jj
      //     var image
      //     for (ii = 0; recommend.length <= 4 & ii < res.data.data.length; ++ii) {
      //       wx.request({
      //         url: `${app.globalData.baseURL}/api/threads/${res.data.data[ii].id}`,
      //         success: (res) => {
      //           image = null
      //           for (jj = 0; jj < res.data.included.length; ++jj) {
      //             if (res.data.included[jj].type == "attachments") {
      //               image = res.data.included[jj].attributes.url
      //               break
      //             }
      //           }
      //         }
      //       })
      //       recommend.push({
      //         title: res.data.data[ii].attributes.title,
      //         img: image,
      //         url: `/pages/post/post?thread=${res.data.data[ii].id}`,
      //       })
      //     }
      //   }
      // })
      // this.setData({
      //   recommend
      // })
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
      this.exit()
    }
  },

  methods: {
    exit: function () {
      if (this.data.searched) {

      } else {
        this.setData({
          showRecommend: true,
          showHistory: true,
          showCate: false,
          showDiscover: false,
          showResult: false,
        })
        if (this.properties.mode == "page") {
          this.setData({
            showIcon: false,
            showSearch: true
          })
          wx.navigateBack({
            delta: 1
          })
        }
      }
      if (this.properties.mode == "icon") {
        this.setData({
          showSearch: false,
          showIcon: true,
          showSearch: false
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
        showResult: false,
        showCate: true,
        showDiscover: true
      })
      this.data.searched = false
      // let {
      //   discover
      // } = this.data
      // discover = []
      // wx.request({
      //   url: `${app.globalData.baseURL}/api/threads?${e.detail.value ? "filter[q]=" + e.detail.value : null}&isEssence=true${this.data.searchCate != null ? "&filter[categoryId]=" + this.data.searchCate : null}`,
      //   success: (res) => {
      //     var ii, jj
      //     var image
      //     for (ii = 0; discover.length <= 4 & ii < res.data.data.length; ++ii) {
      //       wx.request({
      //         url: `${app.globalData.baseURL}/api/threads/${res.data.data[ii].id}`,
      //         success: (res) => {
      //           image = null
      //           for (jj = 0; jj < res.data.included.length; ++jj) {
      //             if (res.data.included[jj].type == "attachments") {
      //               image = res.data.included[jj].attributes.url
      //               break
      //             }
      //           }
      //         }
      //       })
      //       discover.push({
      //         title: res.data.data[ii].attributes.title,
      //         img: image,
      //         url: `/pages/post/post?thread=${res.data.data[ii].id}`,
      //       })
      //     }
      //   }
      // })
      // this.setData({
      //   discover
      // })
    },

    onBlur: function () {
      this.exit()
    },

    onInput: function (e) {
      if (e.detail.value) {
        // let {
        //   discover
        // } = this.data
        // discover = []
        // wx.request({
        //   url: `${app.globalData.baseURL}/api/threads?${e.detail.value ? "filter[q]=" + e.detail.value : null}&isEssence=true${this.data.searchCate != null ? "&filter[categoryId]=" + this.data.searchCate : null}`,
        //   success: (res) => {
        //     var ii, jj
        //     var image
        //     for (ii = 0; discover.length <= 4 & ii < res.data.data.length; ++ii) {
        //       wx.request({
        //         url: `${app.globalData.baseURL}/api/threads/${res.data.data[ii].id}`,
        //         success: (res) => {
        //           image = null
        //           for (jj = 0; jj < res.data.included.length; ++jj) {
        //             if (res.data.included[jj].type == "attachments") {
        //               image = res.data.included[jj].attributes.url
        //               break
        //             }
        //           }
        //         }
        //       })
        //       discover.push({
        //         title: res.data.data[ii].attributes.title,
        //         img: image,
        //         url: `/pages/post/post?thread=${res.data.data[ii].id}`,
        //       })
        //     }
        //   }
        // })
        // this.setData({
        //   discover
        // })
      }
    },

    onConfirm: function (e) {
      this.setData({
        showDiscover: false,
        showRecommend: false,
        showCate: false,
        showHistory: false,
        showResult: true,
        showNo: false
      })
      this.data.searched = true
      let {
        history,
        //   results
      } = this.data
      if (e.detail.value) {
        this.data.searched = true
        history.push(e.detail.value)
        while (history.length > 10)
          history.pop()
        //   results = []
        //   wx.request({
        //     url: `${app.globalData.baseURL}/api/threads?filter[q]=${e.detail.value}${this.data.searchCate != null ? "&filter[categoryId]=" + this.data.searchCate : null}`,
        //     success: (res) => {
        //       if (res.data.data != '') {
        //         var info = res.data.data
        //         var ii, jj
        //         var image
        //         for (ii = 0; ii < info.length; ++ii) {
        //           wx.request({
        //             url: `${app.globalData.baseURL}/api/threads/${info[ii].id}`,
        //             success: (res) => {
        //               var infom = res.data
        //               image = null
        //               // var infom = res.data.data.contentHtml.match(/<img[^<\/>]*src ?= ?"|'(https:)?\/\/[\w-\.~!\*'\(\);:@&=+\$,\/?#\[\]]*"|'[^<\/>]*>/)
        //               // var infoma = infom.match(/src ?= ?"|'(https:)?\/\/[^"']"|'/)
        //               // var infomat = infoma.match(/(?<="|').*(?="|')/)
        //               for (jj = 0; jj < infom.included.length; ++jj) {
        //                 if (infom.included[jj].type == "attachments") {
        //                   image = infom.included[jj].attributes.url
        //                   break
        //                 }
        //               }
        //               results.push({
        //                 title: infom.data.attributes.title,
        //                 img: image,
        //                 url: `/pages/post/post?thread=${info[ii].id}`,
        //                 excerpt: infom.data.attributes.postContent
        //               })
        //             }
        //           })
        //         }
        this.setData({
          // results,
          history
        })
        //       } else {
        //         this.setData({
        //           showNo: true,
        //           results, history
        //         })
        //       }
        //     },
        //     fail: function () {
        //       this.setData({
        //         showNo: true,
        //         results, history
        //       })
        //     }
        //   })
      }
    },

    openHistory: function (item) {
      this.setData({
        searchVal: item
      })
    },
    openCate: function (item) {
      searchCate = item.id
    },

    navclk: function () {
      this.data.searched = true
    }
  }
})