// pages/searchHistory/searchHistory.js
import Appservice from '../services/Appservice.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recommond:[]
  },
  toMap: function () {
    var  string = JSON.stringify(this.data.recommond)
    wx.navigateTo({
      url: '../map/map?recommond=' + string,
    })
  },
  toEndPoint: function () {
    wx.navigateTo({
      url: '../SetEndPoint/SetEndPoint',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
      console.log(options.keywords)
      wx.setNavigationBarTitle({
        title: options.keywords,
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
      var arr = []
      var value = options.keywords
      wx.getLocation({
        type: 'wgs84',
        success: function (res) {
          var latitude = res.latitude
          var longitude = res.longitude
          var speed = res.speed
          var accuracy = res.accuracy
      // 使用封装service
      Appservice.searchSuggest(value, longitude, latitude).then((res) => {
        console.log("封装结果", res)
        var arr = res.data.pois
        var newlist = arr.map(function (item) {
          return item
        })
        _this.setData({
          recommond: newlist
        })
      })
        },
      })
      

  console.log(this.data.recommond)
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