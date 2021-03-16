// components/header.js
Component({
  properties: {        
    background: {            
        type: String,            
        value: '#ffd662'        
    },        
    titleImg: {            
        type: String,            
        value: ''        
    },        
    backIcon: {            
        type: String,            
        value: ''        
     },        
    homeIcon: {            
        type: String,            
        value: ''        
    },  
    avatarUrl:{
        type: String,            
        value: ''
    },      
    fontSize: {            
        type: Number,            
        value: 16        
    },        
    iconHeight: {            
        type: Number,            
        value: 58   
    },        
    iconWidth: {            
        type:Number,            
        value: 150       
    }    
   },    
 attached: function(){        
   var that = this;        
   that.setNavSize();        
   that.setStyle();    
 },
 observers: {
  'backIcon': function (val) {
    if(val==null) return;
    console.log(val)
    if (val) {
      this.setData({
        value:'../../images/back.png'
      })
    }
  },
  'homeIcon': function (val) {
    if(val==null) return;
    console.log(val)
    if (val) {
      this.setData({
        value:'../../images/home.png'
      })
    }
  }
  },  
  methods: {
// 通过获取系统信息计算导航栏高度        
setNavSize: function() {            
  var that = this                
     , sysinfo = wx.getSystemInfoSync()                
     , statusHeight = sysinfo.statusBarHeight                
     , isiOS = sysinfo.system.indexOf('iOS') > -1                
     , navHeight;            
  if (!isiOS) {                
     navHeight = 48;            
    } else {                
     navHeight = 44;            
  }            
  that.setData({                
     status: statusHeight,                
     navHeight: navHeight            
   })        
  },        
  setStyle: function() {            
     var that  = this                
     , containerStyle                
     , textStyle                
     , iconStyle;            
     containerStyle = [                
         'background:' + that.data.background                
         ].join(';');            

         textStyle = [                
         'color:' + that.data.color,                
         'font-size:' + that.data.fontSize + 'px'            
         ].join(';');            
         iconStyle = [                
         'width: ' + that.data.iconWidth + 'rpx',                
         'height: ' + that.data.iconHeight + 'rpx'            
         ].join(';');            
         that.setData({               
              containerStyle: containerStyle,                
              textStyle: textStyle,                
              iconStyle: iconStyle            
         })        },        
         // 返回事件        
  back: function(){            
     wx.navigateBack({                
         delta: 1            
     })            
     this.triggerEvent('back', {back: 1})        
  },        
  home: function() {   
     wx.redirectTo({
       url: '../../pages/index/index',
     })        
     this.triggerEvent('home', {});       
  },
  TavatarUrl:   function() {  
      wx.switchTab({
        url: '../../pages/mine/mine',
      })
      this.triggerEvent('TavatarUrl',{});       
   }
  }
})
