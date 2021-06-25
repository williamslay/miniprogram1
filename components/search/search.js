const app = getApp()
Component({
  properties: {
    mode: {
      type: String,
      //页面模式或图标模式
      value: 'icon'
      //icon, page
    },
  },

  data: {
    //主题分类
    category: [{
      title: '综合',
      id: null
    }, {
      title: '好物',
      id: null
    }, {
      title: '服务',
      id: null
    }, {
      title: '交易',
      id: null
    }, {
      title: '经验',
      id: null
    }, {
      title: '用户',
      id: null
    }],
    //搜索历史
    history: ['猫粮', '幼猫饲养', '美容'],
    //点开页面显示的推荐内容
    recommend: [{
      title: '简明仓鼠饲养法',
      img: 'https://alxga.goho.co/storage/attachments/2021/03/27/AzXrXhrpVpn9iv2JP2NrWITxDaLFTP8iFLPoCWzR_thumb.jpg',
      url: '../post/post'
    }, {
      title: '狗粮选择',
      img: 'https://alxga.goho.co/storage/attachments/2021/03/27/YnSAr488yNaRBEbnO4ngz0uHveSqe7OoMo4idmHZ_thumb.jpg',
      url: '../post/post'
    }, {
      title: '选购健康的金鱼',
      img: 'https://alxga.goho.co/storage/attachments/2021/03/27/eJxOrYnlYP9eat8AFyiGrdI2r1KEl0yB8D9KFXWy_thumb.jpg',
      url: '../post/post'
    }, {
      title: '主子不开心了怎么办',
      img: 'https://alxga.goho.co/storage/attachments/2021/03/27/bdXptzLAJmm7r90C8TiLwbw75p9NrrRme7Z4yvuq_thumb.jpg',
      url: '../post/post'
    }],
    //搜索框输入后弹出的搜索推荐
    discover: [{
      title: '乌龟品种概述',
      img: 'https://alxga.goho.co/storage/attachments/2021/03/27/yJULa5XNgqjelRjP1ylnavTZdHDzA8e7QkMnfibQ_thumb.jpg',
      url: '../post/post'
    }, {
      title: '猫咪毛发保养',
      img: 'https://alxga.goho.co/storage/attachments/2021/03/27/qKjBwalKWhm8NnWk38DFZcT358iLeHNbXX7hMJFt_thumb.jpg',
      url: '../post/post'
    }, {
      title: '兔子窝?',
      img: 'https://alxga.goho.co/storage/attachments/2021/03/27/zzMZaiNeGhdRnEdvyuksl3XIIkyBffQ9PPnLkUbX_thumb.jpg',
      url: '../post/post'
    }, {
      title: '仓鼠选购指南',
      img: 'https://alxga.goho.co/storage/attachments/2021/03/27/AQcVq89fqtIz6CuKRVpJLgKQS1h2kQA0WPX8j0dN_thumb.jpg',
      url: '../post/post'
    }, {
      title: '背着主子去踏青',
      img: 'https://alxga.goho.co/storage/attachments/2021/03/27/pcxur4nWAw7qjoluQBtBa0Sdi8MfhJxA0iTDM3X1_thumb.jpg',
      url: '../post/post'
    }, {
      title: '皇上的寝殿',
      img: 'https://alxga.goho.co/storage/attachments/2021/03/27/2VpzmWYuQbHq0luSUZdZeRiT0oJQjpdm8R9t9PlX_thumb.png',
      url: '../post/post'
    }],
    //按下搜索键后得到结果
    results: [{
      title: '简明仓鼠饲养法',
      img: 'https://alxga.goho.co/storage/attachments/2021/03/27/AzXrXhrpVpn9iv2JP2NrWITxDaLFTP8iFLPoCWzR_thumb.jpg',
      excerpt: '从仓鼠原始生活环境到饲养需求, 带你开启仓鼠饲养之旅',
      url: '../post/post'
    }, {
      title: '狗粮选择',
      img: 'https://alxga.goho.co/storage/attachments/2021/03/27/YnSAr488yNaRBEbnO4ngz0uHveSqe7OoMo4idmHZ_thumb.jpg',
      excerpt: '带你寻找营养丰富, 助于增肌的优质狗粮',
      url: '../post/post'
    }, {
      title: '选购健康的金鱼',
      img: 'https://alxga.goho.co/storage/attachments/2021/03/27/eJxOrYnlYP9eat8AFyiGrdI2r1KEl0yB8D9KFXWy_thumb.jpg',
      excerpt: '什么样的鱼较为健康, 如何从健康的表象中读出真实状况',
      url: '../post/post'
    }, {
      title: '主子不开心了怎么办',
      img: 'https://alxga.goho.co/storage/attachments/2021/03/27/bdXptzLAJmm7r90C8TiLwbw75p9NrrRme7Z4yvuq_thumb.jpg',
      excerpt: '一只猫奴的日常',
      url: '../post/post'
    }, {
      title: '乌龟品种概述',
      img: 'https://alxga.goho.co/storage/attachments/2021/03/27/yJULa5XNgqjelRjP1ylnavTZdHDzA8e7QkMnfibQ_thumb.jpg',
      excerpt: '各品种乌龟习性与体态特征',
      url: '../post/post'
    }, {
      title: '猫咪毛发保养',
      img: 'https://alxga.goho.co/storage/attachments/2021/03/27/qKjBwalKWhm8NnWk38DFZcT358iLeHNbXX7hMJFt_thumb.jpg',
      excerpt: '如何让猫咪拥有入手即化的柔顺毛发',
      url: '../post/post'
    }, {
      title: '兔子窝?',
      img: 'https://alxga.goho.co/storage/attachments/2021/03/27/zzMZaiNeGhdRnEdvyuksl3XIIkyBffQ9PPnLkUbX_thumb.jpg',
      excerpt: '给兔兔一个温暖的家',
      url: '../post/post'
    }, {
      title: '仓鼠选购指南',
      img: 'https://alxga.goho.co/storage/attachments/2021/03/27/AQcVq89fqtIz6CuKRVpJLgKQS1h2kQA0WPX8j0dN_thumb.jpg',
      excerpt: '找到心仪的另一半毛茸茸',
      url: '../post/post'
    }, {
      title: '背着主子去踏青',
      img: 'https://alxga.goho.co/storage/attachments/2021/03/27/pcxur4nWAw7qjoluQBtBa0Sdi8MfhJxA0iTDM3X1_thumb.jpg',
      excerpt: '运输箱选购指南',
      url: '../post/post'
    }, {
      title: '从零开始的养狗生活',
      img: 'https://alxga.goho.co/storage/attachments/2021/03/27/v6KphIVQhH1Hp1MhgPIXlCL3TbvWVR2vNpIR65JG_thumb.jpg',
      url: '../post/post'
    }],

    searchVal: '', //搜索输入
    searchCate: null, //选择类别

    //flags
    showIcon: false,
    showPage: false,
    showCate: false,
    showHistory: false,
    showRecommend: false,
    showDiscover: false,
    showResult: false,

    searched: false,
  },

  lifetimes: { //组件载入
    attached: function () {
      //模式选择
      if (this.properties.mode == 'icon') {
        this.setData({
          showIcon: true
        })
      }
      if (this.properties.mode == 'page') {
        this.setData({
          showPage: true,
          showHistory: true,
          showRecommend: true
        })
        this.enter()
      }
    }
  },

  pageLifetimes: {
    show: function () { //切到页面
      if (this.properties.mode == 'page') {
        this.setData({
          showPage: true
        })
        this.enter()
      }
    },
    hide: function () { //切出页面
      this.exit()
    }
  },

  methods: {
    enter: function () { //进入搜索页
      let {
        recommend
      } = this.data
      wx.request({
        url: `${app.globalData.baseURL}/api/threads?filter[isEssence]=true`,
        success: (res) => {
          recommend = []
          var ii, jj, image
          for (ii = 0; recommend.length <= 4 & ii < res.data.data.length; ++ii) {
            wx.request({
              url: `${app.globalData.baseURL}/api/threads/${res.data.data[ii].id}`,
              success: (res) => {
                for (jj = 0; jj < res.data.included.length; ++jj)
                  if (res.data.included[jj].type == 'attachments') {
                    image = res.data.included[jj].attributes.url
                    break
                  }
                if (image == null)
                  image = '/images/YouPet.png'
              }
            })
            recommend.push({
              title: res.data.data[ii].attributes.title,
              img: res.data.data[ii].relationships.firstPost.images,
              url: `/pages/post/post?thread=${res.data.data[ii].id}`
            })
          }
        }
      })
      this.setData({
        recommend
      })
    },

    exit: function () { //关闭搜索页
      if (!this.data.searched)
        this.setData({
          showRecommend: true,
          showHistory: true,
          showCate: false,
          showDiscover: false,
          showResult: false
        })
      if (this.properties.mode == 'icon') {
        this.setData({
          showPage: false,
          showIcon: true
        })
      }
    },

    exitOvlay: function () { //点击遮罩层离开
      if (this.properties.mode == 'page')
        wx.navigateBack({
          delta: 1
        })
      this.exit()
    },

    iconClk: function () {
      this.setData({
        showIcon: false,
        showPage: true,
      })
    },

    barFoc: function (e) {
      this.setData({
        showCate: true,
        showDiscover: true,
        showResult: false
      })
      this.data.searched = false
      let {
        discover
      } = this.data

      wx.request({
        url: `${app.globalData.baseURL}/api/threads?${e.detail.value ? 'filter[q]=' + e.detail.value : null}&isEssence=true${this.data.searchCate != null ? '&filter[categoryId]=' + this.data.searchCate : null}`,
        success: (res) => {
          discover = []
          var ii, jj
          var image
          for (ii = 0; discover.length <= 4 & ii < res.data.data.length; ++ii) {
            wx.request({
              url: `${app.globalData.baseURL}/api/threads/${res.data.data[ii].id}`,
              success: (res) => {
                image = null
                for (jj = 0; jj < res.data.included.length; ++jj) {
                  if (res.data.included[jj].type == 'attachments') {
                    image = res.data.included[jj].attributes.url
                    break
                  }
                }
              }
            })
            discover.push({
              title: res.data.data[ii].attributes.title,
              img: image,
              url: `/pages/post/post?thread=${res.data.data[ii].id}`,
            })
          }
        }
      })
      this.setData({
        discover
      })
    },

    barBlr: function () {
      this.exit()
    },

    barIpt: function (e) {
      if (e.detail.value) {
        let {
          discover
        } = this.data
        wx.request({
          url: `${app.globalData.baseURL}/api/threads?${e.detail.value ? 'filter[q]=' + e.detail.value : null}&isEssence=true${this.data.searchCate != null ? '&filter[categoryId]=' + this.data.searchCate : null}`,
          success: (res) => {
            discover = []
            var ii, jj
            var image
            for (ii = 0; discover.length <= 4 & ii < res.data.data.length; ++ii) {
              wx.request({
                url: `${app.globalData.baseURL}/api/threads/${res.data.data[ii].id}`,
                success: (res) => {
                  image = null
                  for (jj = 0; jj < res.data.included.length; ++jj) {
                    if (res.data.included[jj].type == 'attachments') {
                      image = res.data.included[jj].attributes.url
                      break
                    }
                  }
                }
              })
              discover.push({
                title: res.data.data[ii].attributes.title,
                img: image,
                url: `/pages/post/post?thread=${res.data.data[ii].id}`,
              })
            }
          }
        })
        this.setData({
          discover
        })
      }
    },

    barCfm: function (e) {
      this.setData({
        showDiscover: false,
        showRecommend: false,
        showCate: false,
        showHistory: false,
        showResult: true,
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
        wx.request({
          url: `${app.globalData.baseURL}/api/threads?filter[q]=${e.detail.value}${this.data.searchCate != null ? '&filter[categoryId]=' + this.data.searchCate : null}`,
          success: (res) => {
            if (res.data.data != '') {
              results = []
              var info = res.data.data
              var ii, jj
              var image
              for (ii = 0; ii < info.length; ++ii) {
                wx.request({
                  url: `${app.globalData.baseURL}/api/threads/${info[ii].id}`,
                  success: (res) => {
                    var infom = res.data
                    image = null
                    // var infom = res.data.data.contentHtml.match(/<img[^<\/>]*src ?= ?'|'(https:)?\/\/[\w-\.~!\*'\(\);:@&=+\$,\/?#\[\]]*'|'[^<\/>]*>/)
                    // var infoma = infom.match(/src ?= ?'|'(https:)?\/\/[^'']'|'/)
                    // var infomat = infoma.match(/(?<='|').*(?='|')/)
                    for (jj = 0; jj < infom.included.length; ++jj) {
                      if (infom.included[jj].type == 'attachments') {
                        image = infom.included[jj].attributes.url
                        break
                      }
                    }
                    results.push({
                      title: infom.data.attributes.title,
                      img: image,
                      url: `/pages/post/post?thread=${info[ii].id}`,
                      excerpt: infom.data.attributes.postContent
                    })
                  }
                })
              }
              this.setData({
                // results,
                history
              })
            } else {
              this.setData({
                results,
                history
              })
            }
          },
          fail: function () {
            this.setData({
              results,
              history
            })
          }
        })
      }
    },

    setHty: function (item) {
      this.setData({
        searchVal: item
      })
    },

    openCate: function (item) {
      searchCate = item.id
    },

    navClk: function () {
      this.data.searched = true
    }
  }
})