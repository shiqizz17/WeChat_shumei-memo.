// pages/news3/news3.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        number:'',
        name:''
    },

    setNumber:function (e) {
        console.log(e)
        this.setData({
            number:e.detail.value
        })
    },
    setName:function (e) {
        this.setData({
            name:e.detail.value
        })
    },
    submit:function () {
        wx.request({
          url: 'http://2022-demo.test/api/user/bind',
          data: {
              openid:wx.getStorageSync('openid'),
              number:this.data.number,
              name:this.data.name
          },
          method: 'POST',
          success: (res) => {

              var result = res.data
              if(result.status == 200){
                wx.navigateBack({
                  delta: 0,
                })
              }else{
                  wx.showToast({
                    title: result.message,
                    icon:'none',
                    success: (res) => {},
                    fail: (res) => {},
                    complete: (res) => {},
                  })
              }
          },
          fail: (res) => {},
          complete: (res) => {},
        })
    }
})