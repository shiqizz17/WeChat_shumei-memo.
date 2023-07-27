// app.js
App({
  onLaunch() {

    // console.log(wx.getStorageSync('openid'))
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    if(!wx.getStorageSync('openid')){
      wx.login({
        success: function (res) {
          var code = res.code
         wx.request({
           url: 'http://2022-demo.test/api/user/login',
           data: {
            code:res.code
           },
           method: 'GET',
           success: (res) => {
              var result = res.data
              if(result.status == 200){
                  wx.setStorageSync('openid',result.data.openid)
              }else{
                  wx.showToast({
                    title: result.message,
                  })
              }
           },
           fail: (res) => {},
           complete: (res) => {},
         })
        }
      })
    }
    
  },
  globalData: {
    userInfo: null
  }
})
