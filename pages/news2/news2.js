// pages/news2/news2.js
Page({

    data: {
      taskLists:[],
      page:1,
      is_last:0,
      tip:""
    },

    onShow: function (options) {
      this.setData({
        taskLists:[]
      })
      console.log(wx.getStorageSync('openid'))
      this.getTasks()
    },

    getTasks: function () {
      var that = this
      wx.showLoading({
        title: '加载中',
      })
     wx.request({
       url: 'http://2022-demo.test/api/task/lists',
       data: {
        openid: wx.getStorageSync('openid'),
        page:this.data.page
       },
       method: 'GET',
       success: (res) => {
         wx.hideLoading({
           success: (res) => {},
           fail: (res) => {},
           complete: (res) => {},
         })
         wx.stopPullDownRefresh({
           success: (res) => {},
         })
          //  console.log(res)
           var result  = res.data
           if(result.status == 200){
             console.log(result)
              that.setData({
                taskLists:that.data.taskLists.concat(result.data.item)
              })
              if(result.data.is_last == 1){
                that.setData({
                  is_last:1,
                  tip:'已经到底了'
                })
              }
           }else if(result.status == 403){
               wx.showModal({

                 content: result.message,
                 showCancel: false,
                 title: '提示',
                 success: (result) => {
                     if(result.confirm){
                         wx.navigateTo({
                           url: '../news3/news3',
                         })
                     }
                 },
                 fail: (res) => {},
                 complete: (res) => {},
               })
           }
       },
       fail: (res) => {},
       complete: (res) => {},
     })   
    },
  
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
      this.setData({
        taskLists:[],
        page:1,
        is_last:0,
        tip:""
      })
      this.getTasks()
    },
    
    delete: function (e) {
      var that = this
     wx.showModal({
       cancelColor: 'cancelColor',
       cancelText: '取消',
       confirmColor: 'confirmColor',
       confirmText: '确认',
       content: '是否确认删除该备忘信息',
       editable: true,
       placeholderText: 'placeholderText',
       showCancel: true,
       title: '警告',
       success: (res) => {
         console.log(res)
         if(res.confirm){
           wx.request({
             url: 'http://2022-demo.test/api/task/delete',
             data: {
               openid:wx.getStorageSync('openid'),
               id: e.currentTarget.dataset.id
             },
             method: 'GET',
             responseType: 'text',
             timeout: 0,
             success: (res) => {
               var result = res.data
               if(result.status == 200) {
                 wx.showToast({
                   title: '操作成功',
                 })
                 var tempTask = that.data.taskLists;
                 tempTask.splice(e.currentTarget.dataset.id,index,1)
                 that.setData({
                   taskLists:tempTask
                 })
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
       },
       fail: (res) => {},
       complete: (res) => {},
     })
    },

    changeStatus: function (e) {
      var that = this
      console.log(e)
      var index = e.currentTarget.dataset.index
      var status = e.currentTarget.dataset.status
      wx.request({
        url: 'http://2022-demo.test/api/task/change-status',
        data: {
          openid:wx.getStorageSync('openid'),
          id: e.currentTarget.dataset.id,
          status:e.currentTarget.dataset.status
        },
        method: 'POST',
        success: (res) => {
          console.log(res)
          var result = res.data
          if(result.status == 200) {
            wx.showToast({
              title: '操作成功',
            })
            var tmpList = that.data.taskLists
            tmpList[index]['status'] = status
            that.setData({
            taskLists:tmpList
          })
          }
          
        },
        fail: (res) => {},
        complete: (res) => {},
      })
    },

    add: function () {
      wx.navigateTo({
        url: '../add/add',
      })
    },

    subscribe:function (e) {
      console.log(e)
      wx.requestSubscribeMessage({
        tmplIds: ['BoyAPSczBS0YlEAzlnCNDvyR6hY0sreCrZYtaDQSe6I'],
        success: function (res) {
          console.log(res['BoyAPSczBS0YlEAzlnCNDvyR6hY0sreCrZYtaDQSe6I'])
          if(res['BoyAPSczBS0YlEAzlnCNDvyR6hY0sreCrZYtaDQSe6I'] == 'accept') {
            wx.request({
              url: '',
              data: {

              },
              method: 'GET',
              success: (res) => {},
              fail: (res) => {},
              complete: (res) => {},
            })
          }
        }
      })
    },
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
      if(this.data.is_last == 0){
        this.setData({
          page:this.data.page + 1
        })
        this.getTasks()
      }
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})