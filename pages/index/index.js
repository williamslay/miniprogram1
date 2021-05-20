const app = getApp()
Page({
  data: {
    _avatarUrl: null,
    SwimgUrls: [
      'https://alxga.goho.co/storage/attachments/2021/03/24/U5eAd9J56aTFepBSTWRDnE6L4w7KiPqXXCHcDblT_thumb.jpg',
      'https://alxga.goho.co/storage/attachments/2021/03/24/DT75f9fK1FfVIurtvwbHrTRBBT9MeFucLIDpP5eq_thumb.jpg',
      'https://alxga.goho.co/storage/attachments/2021/03/24/t0Mr0TQEuBpRjRFKIpQudaoQG4acFZeKgrVtvUhU_thumb.jpg'
    ], //轮播图中图片
    current: 0,

    cateName: ['柚宠商城', '百科教程', '宠物健康', '宠物美容', '同城活动', '萌猫', '憨狗', '水族', '小型宠', '更多'], //显示名
    // cateId: [

    // ],
    cateImg: [
      '../../images/menu1.png',
      '../../images/menu2.png',
      '../../images/menu3.png',
      '../../images/menu4.png',
      '../../images/menu5.png',
      '../../images/menu6.png',
      '../../images/menu7.png',
      '../../images/menu8.png',
      '../../images/menu9.png',
      '../../images/menu10.png'
    ], //图片地址
    cateUrl: [
      '../catePage/youpetStore/youpetStore',
      '../catePage/cyclopedia/cyclopedia',
      '../catePage/petHelth/peyHelth',
      '../catePage/petBeauty/petBeauty',
      '../catePage/city/city',
      '../category/category?id=cat',
      '../category/category?id=dog',
      '../category/category?id=fish',
      '../category/category?id=minipet',
      '../catePage/more/more'
    ],

    interval: 3000,
    duration: 800,
    // 瀑布流参数
    views: [],
    loading: false,
    options: {
      span: 30,
      column: 2,
      gap: [10, 10],
      rows: 2,
    },
    images: [],
    _page: 1,
    _type: 0,

    // 登录页面参数
    showLogin: false
  },
  forbid: function () { },
  openCate: function (e) {
    var cateUrl = this.data.cateUrl;
    var index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: cateUrl[index]
    })
  },
  acceptLogin: function () {
    var that = this
    wx.getUserProfile({
      desc: '用于完善资料',
      success: (res) => {
        app.globalData.userInfo = res.userInfo
        wx.showTabBar()
        that.setData({
          showLogin: false,
          _avatarUrl: res.userInfo.avatarUrl
        })
      },
      fail: () => { this.refuseLogin() }
    })
  },
  leaveLogin: function () {
    if (this.data.showLogin == true) {
      this.refuseLogin()
      this.setData({
        showLogin: true
      })
    }
  },
  refuseLogin: function () {
    wx.showModal({
      title: 'WARNING',
      content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
      showCancel: false,
      confirmText: '返回授权',
      complete: function () {
        this.acceptLogin()
      }
    })
  },
  swiperChange: function (e) {
    var that = this;
    that.setData({
      current: e.detail.current,
    })
  },
  onReady: function () {
    if (app.globalData.userInfo == null) {
      wx.hideTabBar()
      this.setData({
        showLogin: true
      })
    }
    else {
      wx.showTabBar()
      this.setData({
        showLogin: false,
        _avatarUrl: app.globalData.userInfo.avatarUrl
      })
    }

    this.data._type = 1

    this.setData({
      views: [],
      _type: 1
    })
    this.getHuaBanList()
  },
  getHuaBanList() {
    let {
      images,
      _page
    } = this.data
    wx.request({
      url: `https://huaban.com/search/?q=萌宠&page=${_page}&per_page=10&wfl=1`,
      header: {
        accept: 'application/json',
        'accept-language': 'zh-CN,zh;q=0.9',
        'x-request': 'JSON',
        'x-requested-with': 'XMLHttpRequest',
      },
      success: (res) => {
        res.data.pins.map((v) => {
          images.push({
            url: `https://hbimg.huabanimg.com/${v.file.key}_/fw/480/format/webp`,
            title: v.raw_text,
          })
        })
        this.setData({
          images,
          _page: ++_page
        })
        wx.hideLoading()
      },
    })
  },
  onReachBottom() {
    let {
      loading,
      _type
    } = this.data
    if (!loading) {
      wx.showLoading({
        title: 'loading...',
      })
      loading = true
      setTimeout(() => {
        _type === 0 ? this.generateViews() : this.getHuaBanList()
        wx.hideLoading()
        loading = false
      }, 1000)
    }
  }
})