// pages/add/add.js
Page({
    data: {
        title:'',
        complete_date:''
    },

    setTitle:function (e) {
       this.setData({
           title:e.detail.value
       })
    },
    setDate:function (e) {
        this.setData({
            complete_date:e.detail.value
        })
    },
    add:function () {
        wx.showLoading({
          title: '请稍后',
        })
        wx.request({
          url: 'http://2022-demo.test/api/task/add',
          data: {
            openid:wx.getStorageSync('openid'),
            title:this.data.title,
            complete_date:this.data.complete_date
          },
          method: 'POST',
          success: (res) => {
              wx.hideLoading()
              var result = res.data
              if(result.status ==200){
                wx.navigateBack({})
              }else{
                  wx.showToast({
                    title: result.message,
                    icon:'none'
                  })
              }
          },
          fail: (res) => {},
          complete: (res) => {},
        })
    }
})