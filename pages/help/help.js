// pages/help/help.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      list:[{
        ques:'如何组队',
        ans:'设置目的地后,分享给好友,自动建群,创建者为群管理员,并且可以解散群'
      },
        {
          ques: '每个人最多可以建立几个群?',
          ans: '每个人创建群的数量没有限制,并且可以无限的加入朋友的群'
        },
        {
          ques: '每个群的有效期是多长?',
          ans: '直到群主解散群'
        },
        {
          ques: '解散群之后还能找回吗?',
          ans: '不能'
        },
        {
          ques: '每个群的人数上限是多少?',
          ans: '暂时没有上限'
        },
        {
          ques: '退出小程序后位置共享还会在吗',
          ans: '实时位置只会在当前的群中显示,退出小程序或者群组,实时位置消失'
        },
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.setNavigationBarTitle({
        title: '帮助',
      })
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