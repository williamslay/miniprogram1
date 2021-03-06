Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo:null,
    cateName: ['我的关注', '常去版块', '我的宠物', '我的服务', '客服反馈'], //显示名
    cateTerm: [], //后台名
    cateImg: [
      '../../images/MineFocus.png',
      '../../images/MineUsual.png',
      '../../images/MinePet.png',
      '../../images/Mineservice.png',
      '../../images/MineOfficial.png',
    ], //图片地址
    Read:666,
    favor:666,
    startX: 0,
    endX: 0,
    iCenter: 3,
    datas: [{
      id: 1,
      zIndex: 2,
      opacity: 0.2,
      left: -20,
      iamge: "https://alxga.goho.co/storage/attachments/2021/03/23/gjj5Dsk93Qm2KNWLvbtsPvkATQ6s34MP1Lumrzoh_thumb.jpg",
      animation: null
    },
    {
      id: 2,
      zIndex: 4,
      opacity: 0.4,
      left: 0,
      iamge: "https://alxga.goho.co/storage/attachments/2021/03/23/BLhNYUaVj9pt8X9zdxD0Pd5AQ25btLd3efuom4wA_thumb.jpg",
      animation: null
    },
    {
      id: 3,
      zIndex: 6,
      opacity: 0.6,
      left:20,
      iamge: "https://alxga.goho.co/storage/attachments/2021/03/23/I5j38yACSJfANX5r87qCm8zEdSFapcFYengS6c5b_thumb.jpg",
      animation: null
    },
    {
      id: 4,
      zIndex: 8,
      opacity: 1,
      left: 40,
      iamge: "https://alxga.goho.co/storage/attachments/2021/03/23/IFJ8eTGkbWC159TpotNqUGQkEHygN6ZJ7EWTMgaF_thumb.jpg",
      animation: null
    },
    {
      id: 5,
      zIndex: 6,
      opacity: 0.6,
      left: 60,
      iamge: "https://alxga.goho.co/storage/attachments/2021/03/23/6Pp6Yq2EpRbM2CGgWRLnGjoAI13Bmr3tI7otgLyj_thumb.jpg",
      animation: null
    },
    {
      id: 6,
      zIndex: 4,
      opacity: 0.4,
      left: 80,
      iamge: "https://alxga.goho.co/storage/attachments/2021/03/23/BGKTrVV6us9saGqgu7KzpLs5RryaLxTXydV9OIEn_thumb.jpg",
      animation: null
    },
    {
      id: 7,
      zIndex: 2,
      opacity: 0.2,
      left: 100,
      iamge: "https://alxga.goho.co/storage/attachments/2021/03/23/77P8XZjDqwZNLGtIOynGzpDg9BfHJxRjI1SsJJk6_thumb.jpg",
      animation: null
    },
    ],
    order: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.stopPullDownRefresh(); //刷新完成后停止下拉刷新动效
    const app=getApp();
    this.__set__();
    this.move();
    this.setData({
      userInfo:app.globalData.userInfo,
      backgroundColor: '#ffd662'
    });
    wx.setBackgroundColor({
      
    })
  },
  forbid:function(){},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },
  minePet:function(){
    
  },//pet卡片跳转函数
  mineComunity:function(){
    
  },//Comunity卡片跳转函数
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    var that = this;
    that.setData({
      currentTab: 0 //当前页的一些初始数据，视业务需求而定
    })
    this.onLoad(); //重新加载onLoad()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  move: function () {
    var datas = this.data.datas;
    /*图片分布*/
    for (var i = 0; i < datas.length; i++) {
      var data = datas[i];
      var animation = wx.createAnimation({
        duration: 200
      });
      animation.translateX(data.left).step();
      this.setData({
        ["datas[" + i + "].animation"]: animation.export(),
        ["datas[" + i + "].zIndex"]: data.zIndex,
        ["datas[" + i + "].opacity"]: data.opacity,
      })
    }
  },
  left: function () {
    //
    var last = this.data.datas.pop(); //获取数组的最后一个
    this.data.datas.unshift(last);//放到数组的第一个
    var orderFirst = this.data.order.shift();
    this.data.order.push(orderFirst);
    this.move();
  },
  right: function () {
    var first = this.data.datas.shift(); //获取数组的第一个
    this.data.datas.push(first);//放到数组的最后一个位置
    var orderLast = this.data.order.pop();
    this.data.order.unshift(orderLast);
    this.move();
  },
  /**点击某项 */
  choose: function (e) {
    var that = this;
    var id = e.currentTarget.dataset.id;
    var order = that.data.order;
    var index = 0;
    for (var i = 0; i < order.length; i++) {
      if (id == order[i]) {
        index = i;
        break;
      };
    }
    if (index < that.data.iCenter) {
      for (var i = 0; i < that.data.iCenter - index; i++) {
        this.data.datas.push(this.data.datas.shift()); //获取第一个放到最后一个
        this.data.order.unshift(this.data.order.pop());
        // this.right()  
      }
    } else if (index > that.data.iCenter) {
      for (var i = 0; i < index - that.data.iCenter; i++) {
        this.data.datas.unshift(this.data.datas.pop()); //获取最后一个放到第一个
        this.data.order.push(this.data.order.shift());
        // this.left();
      }
    }
    this.move();
  },
  /**新的排列复制到新的数组中 */
  __set__: function () {
    var that = this;
    var order = that.data.order;
    var datas = that.data.datas;
    for (var i = 0; i < datas.length; i++) {
      that.setData({
        ["order[" + i + "]"]: datas[i].id
      })
    }
  },
  //手指触发开始移动
  moveStart: function (e) {
    var startX = e.changedTouches[0].pageX;
    this.setData({
      startX: startX
    });
  },
  //手指触摸后移动完成触发事件
  moveItem: function (e) {
    var that = this;
    var endX = e.changedTouches[0].pageX;
    this.setData({
      endX: endX
    });
    //计算手指触摸偏移剧距离
    var moveX = this.data.startX - this.data.endX;
    //向左移动
    if (moveX > 20) {
      this.left();
    }
    if (moveX < -20) {
      this.right();
    }
    if (moveX == 0){
      wx.navigateTo({
        url: "../post/post"
      });
    }
  },
})
