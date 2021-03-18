Page({
  data: {
    // verChk: false,

    _avatarUrl: null,

    SwimgUrls: [
      '../../images/switch1.jpg',
      '../../images/switch2.jpg',
      '../../images/switch3.jpg'
    ],//轮播图中图片
    current: 0,

    cateName: ['柚宠商城', '百科教程', '宠物健康', '宠物美容', '同城活动', '萌猫', '憨狗', '水族', '小型宠', '更多'],//显示名
    cateTerm: [],//后台名
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
      '../../images/menu10.png'],//图片地址

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
    showLogin: false,
  },
  onLoad: function () {
 
  },
  acceptLogin: function (e) {
    const app = getApp();
    var that = this;
    if (e.detail.userInfo) {
      app.globalData.userInfo = e.detail.userInfo;
      that.setData({
        showLogin: false,
        _avatarUrl: e.detail.userInfo.avatarUrl
      });
      console.log(app.globalData.userInfo);
      wx.showTabBar();
    } else {
      //用户按了拒绝按钮
      that.refuseLogin();
    }
  },
  refuseLogin: function refuseLogin() {
    const app = getApp();
    var that = this;
    wx.showModal({
      title: '警告',
      content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
      showCancel: false,
      confirmText: '返回授权',
      success: function (res) {
        // 用户没有授权成功，不需要改变 isHide 的值
        if (res.confirm) {
          console.log('用户点击了“返回授权”');
          that.setData({
            showLogin: true,
          })
        }
      }
    });
  },
  swiperChange: function (e) {
    var that = this;
    that.setData({
      current: e.detail.current,
    })
  },
  onReady: function () {
    const app = getApp();
    var that = this;

    if (!app.globalData.done) {
var sleep=setInterval(function () {
          if (!app.globalData.done) {
            sleep();
          }
        }, 250);
        clearInterval();
    }

    if (app.globalData.userInfo === null) {
      wx.hideTabBar();
      that.setData({
        showLogin: true,
      });
    } else {
      that.setData({
        showLogin: false,
        _avatarUrl: app.globalData.userInfo.avatarUrl
      })
    }

    this.data._type = 1
    this.setData({ views: [], _type: 1 })
    this.getHuaBanList()
    this.onReachBottom()
  },
  getHuaBanList() {
    let { images, _page } = this.data
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
        this.setData({ images, _page: ++_page })
        wx.hideLoading()
      },
    })
  },
  onReachBottom() {
    let { loading, _type } = this.data
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
  },
})
