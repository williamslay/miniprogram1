// pages/catePage/more/more.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateName: ['柚宠商城', '百科教程', '宠物健康', '宠物美容', '同城活动', '萌猫', '憨狗', '水族', '小型宠', '更多'], //显示名
    cateImg: [
      '../../../images/menu1.png',
      '../../../images/menu2.png',
      '../../../images/menu3.png',
      '../../../images/menu4.png',
      '../../../images/menu5.png',
      '../../../images/menu6.png',
      '../../../images/menu7.png',
      '../../../images/menu8.png',
      '../../../images/menu9.png',
      '../../../images/menu10.png'
    ], //图片地址
    cateUrl:[
      '../catePage/youpetStore/youpetStore',
      '../catePage/cyclopedia/cyclopedia',
      '../catePage/petHelth/petHelth',
      '../catePage/petBeauty/petBeauty',
      '../catePage/city/city',
      '../catePage/block/cat/cat',
      '../catePage/block/dog/dog',
      '../catePage/block/fish/fish',
      '../catePage/block/minipet/minipet',
      '../catePage/more/more'
    ]
  },
  onLoad: function (options) {

  },
  forbid:function(){},
  openCate:function(e){
     var cateUrl=this.data.cateUrl;
     var index=e.currentTarget.dataset.index;
     wx.navigateTo({
      url:cateUrl[index]
    })
  }

})