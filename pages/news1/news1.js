// pages/news1/news1.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // isCreated:true,
        //     isHidden:true,
        username:'' ,
        currentDate:'2022-5-25'    
    },
    // handleTop:function () {
    //     this.setData({
    //         isCreated:false,
    //         isHidden:false,
    //     })
    // },
    

    setGender: function(e) {
      this.setData({
        gender: e.detail.gender
      })
    },

    setDate: function(e) {
      this.setData({
        currentDate: e.detail.value
      })
    },

    setUsername: function(e) {
      console.log(e)
        this.setData({
          username: e.detail.value
        })
      },
      register: function() {
        console.log(this.data.username)
      },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})