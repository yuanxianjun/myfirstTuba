// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue:"",
    historyList:[]
  },
  // 清除历史记录
  clearhistory:function(){
    console.log(111)
    this.setData({
      historyList:[]
    })
  },
  // 获取到输入框中的内容
  inputHistory:function(e){
    console.log(e)
    this.setData({
      inputValue : e.detail.value 
    })
  }, 
   // 跳转到搜索到的内容
  searchhistory:function(){
    var input = this.data.inputValue;
    !input && wx.showModal({
      title: '提示',
      content: '请输入搜索内容',
    });
    var list = wx.getStorageSync("list")
    !list && (list=[]) 
    input && !list.includes(input)  && list.push(input)
    wx.setStorageSync("list", list)
  },
  

  toMap:function(){
      wx.navigateTo({
        url: '../searchHistory/searchHistory',
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      historyList: wx.getStorageSync("list")
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