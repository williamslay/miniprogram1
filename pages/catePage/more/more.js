// pages/catePage/more/more.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateName1: ['柚宠商城', '百科教程', '宠物健康', '宠物美容', '同城活动'], 
    cateImg1: [
      '../../../images/menu1.png',
      '../../../images/menu2.png',
      '../../../images/menu3.png',
      '../../../images/menu4.png',
      '../../../images/menu5.png'
    ],
    cateUrl1:[
      '../../catePage/youpetStore/youpetStore',
      '../../catePage/cyclopedia/cyclopedia',
      '../../catePage/petHelth/petHelth',
      '../../catePage/petBeauty/petBeauty',
      '../../catePage/city/city'
    ],
    cateName2: ['萌猫', '憨狗', '水族', '小型宠','鸟类','爬宠'], 
    cateImg2: [
      '../../../images/menu6.png',
      '../../../images/menu7.png',
      '../../../images/menu8.png',
      '../../../images/menu9.png',
      '../../../images/menu11.png',
      '../../../images/menu12.png',
    ],
    cateUrl2:[
      '../block/cat/cat',
      '../block/dog/dog',
      '../block/fish/fish',
      '../block/minipet/minipet',
      '../block/bird/bird',
      '../block/snake/snake'
    ],
  },
  onLoad: function (options) {

  },
  forbid:function(){},
  openCate1:function(e){
     var cateUrl=this.data.cateUrl1;
     var index=e.currentTarget.dataset.index1;
     wx.navigateTo({
      url:cateUrl[index]
    })
  },
  openCate2:function(e){
    var cateUrl=this.data.cateUrl2;
    var index=e.currentTarget.dataset.index2;
    wx.navigateTo({
     url:cateUrl[index]
   })
 }

})