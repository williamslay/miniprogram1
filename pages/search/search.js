Page({
  data: {
    images: [
      "https://hbimg.huabanimg.com/d90b60a52080b7d632e1b1afca2724d2b5bdcdc63b0c8-DpUdb1_fw658/format/webp",
      "https://hbimg.huabanimg.com/c9f9b544f8fa6558cd74fccb27bcaa853c97125b636e3-nd3UhF_fw658/format/webp",
      "https://hbimg.huabanimg.com/19fb5e427443a46ae1d619e5ccf6d439bab401b83bca7-KqSK18_fw658/format/webp",
      "https://hbimg.huabanimg.com/3d789101aa1ac56c84b74fcb5b7bbf4430de82545f22f-nY2hAD_fw658/format/webp",
      "https://hbimg.huabanimg.com/cb02fb87dbb6cff4dbcfefe1a6f285264ad15fd751b88-RyHT3p_fw658/format/webp",
      "https://hbimg.huabanimg.com/3e6c9189e3899a7a7312438cfb8f3408498099d24c0ea-jtHzNl_fw658/format/webp",
      "https://hbimg.huabanimg.com/a0cdaa21b3a45c6c2140b48c6ff1d5098abc6d79b162-Bdhiek_fw658/format/webp",
      "https://hbimg.huabanimg.com/9f1a4b65da457f44d8b9ea77b67f56bfebf70e78ee1d-CLUB2Y_fw658/format/webp",
      "https://hbimg.huabanimg.com/424d9d63a16a0b63bc3902e1107c171987aefd274fa5-Qxqb6A_fw658/format/webp",
      "https://hbimg.huabanimg.com/d1cfbfcf5be7ab54130bbcbbe7eff7c3aca441211619e-4EE72Z_fw658/format/webp",
      "https://hbimg.huabanimg.com/9376d4a050fbcfe19a92240624a5989f504700e97055-qR4O0Y_fw658/format/webp",
    ],
  },

  // onLoad: function () {
  //   let {
  //     images,
  //   } = this.data
  //   var page = Math.ceil(Math.random() * 5)
  //   wx.request({
  //     url: `https://huaban.com/search/?q=可爱+宠物&page=${page}&per_page=10&wfl=1`,
  //     header: {
  //       accept: 'application/json',
  //       'accept-language': 'zh-CN,zh;q=0.9',
  //       'x-request': 'JSON',
  //       'x-requested-with': 'XMLHttpRequest',
  //     },
  //     success: (res) => {
  //       res.data.pins.map((v) => {
  //         images.push(`https://hbimg.huabanimg.com/${v.file.key}_/fw/480/format/webp`)
  //       })
  //       this.setData({
  //         images
  //       })
  //     }
  //   })
  // }
})