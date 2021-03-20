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
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.stopPullDownRefresh(); //刷新完成后停止下拉刷新动效
    const app=getApp();
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
    
  },
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
    
  }
})