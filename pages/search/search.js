// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue:"北京",
    historyList:[]
  },
  // 清除历史记录
  clearhistory:function(){
    console.log(111)
    this.setData({
      historyList:[]
    })
    // 清除缓存
    wx.clearStorageSync()
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
    // 获取输入框的内容
    var input = this.data.inputValue;
    // 如果input框为空的话就提示请输入搜索内容
    !input && wx.showModal({
      title: '提示',
      content: '请输入搜索内容',
    })
    // 获取到storage中的内容
    var list = wx.getStorageSync("list")
    !list && (list=[]) 
    input && !list.includes(input)  && list.push(input)
    wx.setStorageSync("list", list)//将输入框的值填加到storage中(去重)
    wx.navigateTo({
      url: '../searchHistory/searchHistory?data=${input}',
    })
  },
  //点击图标获取到改行的值将值赋给input框
  fuzhi:function(e){
    // console.log(e)

    // 将值赋给input输入框
    this.setData({
      inputValue :e.target.dataset.index
    })
   
    console.log(e.target.dataset.index)
  },
  // 清空输入框中的value
  clearCon:function(){
    this.setData({
      inputValue:""
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