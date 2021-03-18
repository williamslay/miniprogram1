App({
  globalData: {
    verChk: false,
    done: false,
    userInfo: null,
    baseURL: "https://honki.moe/wp-json",
  },

  onLaunch: function () {
    //检查功能组件
    if (!wx.canIUse('button.open-type.getUserInfo'))
      this.globalData.verChk = true

    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              this.globalData.userInfo = res.userInfo
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
              this.globalData.done = true
            },
            fail: function () {
              this.globalData.done = true
            }
          })
        } else {
          this.globalData.done = true
        }
      },
      fail: function () {
        this.globalData.done = true
      }
    })
  },
})
