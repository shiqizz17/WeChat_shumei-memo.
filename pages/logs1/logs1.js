// pages/logs1/logs1.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // newsLists: [
        //     {
        //       id: 1,
        //       title: '我校召开2022年创建全国文明城市暨全国文明校园工作会议'
        //     },{
        //      id: 2,
        //      title: '凝心聚力、共促发展——我校赴饶阳县考察调研'
        //     },{
        //      id: 3,
        //      title: '我校统战工作荣获多项市级表彰'
        //     },{
        //       id:4,
        //       title:' 我校成功举办青年教师教学能力提升工作坊'
        //     },{
        //       id:5,
        //       title:'新学期新征程：我校开展2021-2022春季学期教育教学巡查'
        //     }]

    },
    //页面跳转
    jumpToNotices1: function() {
        wx.navigateTo({
          url: '../notices1/notices1',
        })
      },
      jumpToNotices2: function() {
        wx.redirectTo({
          url: '../notices2/notices2',
        })
      },
      jumpToNotices3: function() {
        wx.navigateTo({
          url: '../notices3/notices3',
        })
      },
      jumpToNotices4: function() {
        wx.navigateTo({
          url: '../notices4/notices4',
        })
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
        console.log('执行下拉刷新事件')
        this.getData()
    },
    getData: function() {
        console.log('获取数据成功')
        wx.stopPullDownRefresh() 
      },
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
       console.log('上拉加载开始')
    wx.showLoading({
        title: '加载中',
    }) ,
    setTimeout(() => {
      wx.hideLoading()
    }, 2000);
  
    }
})