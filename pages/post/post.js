Page({
  data: {
    id:0,
    type:"",
    showPage:false,
    showComment:false,
    show_viewComment:false,
    showMore:false,
    approved:false,
    favored:false
  },
  onLoad: function (options) {
    id=options.id;
  },
  writeComment:function(){
    this.setData({
      showPage:true,
      showComment:true,
      show_viewComment:false,
      showMore:false
    })
  },
  More:function(){
    this.setData({
      showPage:true,
      showComment:false,
      show_viewComment:false,
      showMore:true
    })
  },
  // viewComment:function(){
  //   this.setData({
  //     showPage:true,
  //     showComment:false,
  //     show_viewComment:true,
  //     showMore:false
  //   })
  // },
  Approve:function(){
    this.setData({approved:!this.data.approved})
  },
  Favor:function(){
    this.setData({favored:!this.data.favored})
  }
})