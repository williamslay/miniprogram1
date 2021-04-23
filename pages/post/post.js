Page({
  data: {
    id: 0,
    type:"",
    showComment:"true"
  },
  onLoad: function (options) {
    id=options.id;
  },
  writeComment:function(){
    this.showComment=="true"
  }
})