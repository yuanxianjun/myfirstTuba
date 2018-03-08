// pages/SetEndPoint/SetEndPoint.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      iconPath: "../resouces/myicon/poi_1.png",
      id: 0,
      latitude: 39,
      longitude: 113.324520,
      width: 25,
      height: 25
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    userInfo:'',
  },
  // 点击跳转到设置页面
  toSet:function(){
      wx.navigateTo({
        url: '../Set/Set',
      })
  },
  // 点击跳转到聊天页面
  tochat:function(){
    wx.navigateTo({
      url: '../chat/chat',
    })
  },
  getRecord:function(){
      const getRecorder = wx.getRecorderManager()
      getRecorder.onStart(()=>{
        console.log("recorder Start")
      })
      getRecorder.onStop((res)=>{
        console.log("录音停止",res)
      })
      const options={
        duration: 10000,
        sampleRate: 44100,
        numberOfChannels: 1,
        encodeBitRate: 192000,
        format: 'aac',
        frameSize: 50
      }
      getRecorder.start(options)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    // 设置头部信息
    wx.setNavigationBarTitle({
      title: '目的地',
    })
    // 获取用户信息
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              var userInfo = res.userInfo
              var nickName = userInfo.nickName
              var avatarUrl = userInfo.avatarUrl
              var gender = userInfo.gender //性别 0：未知、1：男、2：女
              var province = userInfo.province
              var city = userInfo.city
              var country = userInfo.country
             
              _this.setData({
                userInfo:userInfo
              })
              console.log(_this.data.userInfo.nickName)
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
                
              }
            }
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