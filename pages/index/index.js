const app = getApp();

Page({
  data: {
    verChk: false,

    _avatarUrl: '',

    SwimgUrls: [
      '../../images/switch1.jpg',
      '../../images/switch2.jpg',
      '../../images/switch3.jpg'
    ],//轮播图中图片

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
    showContent: false,
  },
  onLoad: function () {
    var that = this;
    //检查功能组件
    if (!wx.canIUse('button.open-type.getUserInfo'))
      that.setData({
        verChk: true,
      });
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function (res) {
              // 用户已经授权过,不需要显示授权页面,所以不需要改变 isHide 的值
              that.setData({
                showLogin: false,
                _avatarUrl: res.userInfo.avatarUrl
              })
              // wx.login({
              //   success: res => {
              //     // 获取到用户的 code 之后：res.code
              //     console.log("用户的code:" + res.code);
              //     // 可以传给后台，再经过解析获取用户的 openid
              //     // 或者可以直接使用微信的提供的接口直接获取 openid ，方法如下：
              //     // wx.request({
              //     //     // 自行补上自己的 APPID 和 SECRET
              //     //     url: 'https://api.weixin.qq.com/sns/jscode2session?appid=自己的APPID&secret=自己的SECRET&js_code=' + res.code + '&grant_type=authorization_code',
              //     //     success: res => {
              //     //         // 获取到用户的 openid
              //     //         console.log("用户的openid:" + res.data.openid);
              //     //     }
              //     // });
              //   }
              // });
            }
          });
        } else {
          // 用户没有授权
          wx.hideTabBar();
          that.setData({
            showLogin:true,
          });
        }
      }
    });
  },
  acceptLogin: function (e) {
    var that = this;
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      // 获取到用户的信息了，打印到控制台上看下
      console.log("用户的信息如下：");
      console.log(e.detail.userInfo);
      //授权成功后,通过改变 isHide 的值，让实现页面显示出来，把授权页面隐藏起来
      that.setData({
        showLogin:false,
        _avatarUrl: e.detail.userInfo.avatarUrl
      });
      wx.showTabBar();
    } else {
      //用户按了拒绝按钮
      that.refuseLogin;
    }
  },
  refuseLogin:function(){
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
            showLogin:true,
          })
        }
      }
    });
  },openCate: function (index) {
    wx: request({
      url: app.globalData.baseURL + "/wp/v2/posts",
      data: {
        categories: cataTerm[index],
      },
      method: "GET",
      dataType: "json",
      success: "refreshContent(res.data)"
    })
  },
  refreshContent: function (data) {

  },
onReady: function loadImage() {
    this.data._type = 1
    this.setData({ views: [], _type: 1 })
    this.getHuaBanList()
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
