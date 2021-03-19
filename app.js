App({
  globalData: {
    verChk: false,
    baseURL: "https://honki.moe/wp-json",
    login: true,
    userInfo: null,
    Pet: {
      name: "",
      nickname: "",
      weight: "",
      birthday: [
        2000, 1, 1
      ],
      date: [
        2000, 1, 1
      ],
    },
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
            },
            fail: function () {
              this.globalData.login = false
            }
          })
        } else {
          this.globalData.login = false
        }
      },
      fail: function () {
        this.globalData.login = false
      }
    })
  },
})