// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
     url:"",
     path:'',
     title:''
    },
    upload: function () {
        //选择一个图片
        var that = this
        wx.chooseImage({
          count: 1,
          sizeType: ['original','compressed'],
          sourceType: ['album','camera'],
          success: (res) => {
              console.log(res.tempFilePaths[0])
              //上传图片
              wx.uploadFile({
                filePath: res.tempFilePaths[0],
                name: 'avatar',
                url: 'http://2022-demo.test/api/user/upload', //服务器端完成图片上传的接口地址
                formData: {
                    openid:wx.getStorageSync('openid')
                },
                success: (res) => {
                    console.log(res.data)
                    var result = JSON.parse(res.data)
                    console.log(result)
                    that.setData({
                        url:result.data.url,
                        path:result.data.path
                    })
                },
                fail: (res) => {},
                complete: (res) => {},
              })
          },
          fail: (res) => {
              console.log(res)
          },
          complete: (res) => {},
        })
    } ,
    
    submit: function () {
        if(this.data.path == '') {

        }
        if(this.data.title == ''){

        }
        wx.request({
          url: '',
          data: {
            openid:'',
            path:this.data.path,
            title:this.data.title
          },
          method: 'GET',
          success: (res) => {},
          fail: (res) => {},
          complete: (res) => {},
        })
    }
   
})