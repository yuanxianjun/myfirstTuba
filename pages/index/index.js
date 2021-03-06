//index.js
//获取应用实例
const app = getApp()
import  wxService from '../services/Wxservice.js';
import  AppService from '../services/Appservice.js';
Page({
  data: {
    array: [{
      src: "../resouces/myicon/index_a.png",
      content: "设置目的地，自动建群"
    }, {
      src: "../resouces/myicon/share.png",
      content: "分享给好友"
    }, {
      src: "../resouces/myicon/group.png",
      content: "好友加入群组"
    }, {
      src: "../resouces/myicon/distance.png",
      content: "查看群成员剩余距离"
    }, {
      src: "../resouces/myicon/time.png",
      content: "查看群成员剩余时间"
    }, {
      src: "../resouces/myicon/groupchat.png",
      content: "群组语音聊天"
    }],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  clickEvent:function(){
    wx.navigateTo({
      url: '../search/search',
    })
  },
  // 点击弹出输入群号码
  showModel(){
    wx.showModal({
      title: '请输入群号码',
      content: `这里是一个输入框`
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // 点击跳转到帮助页面
  tohelp:function(){
      wx.navigateTo({
        url: '../help/help',
      })
  },
  onLoad: function () {
    // 登录获取code码
    wxService.login().then((res)=>{
      var data = {};
       data.code=res.code
      return wxService.getUserInfo().then((res)=>{
        var  res = JSON.parse(res.rawData)      
        data.name = res.nickName
        data.avatarUrl = res.avatarUrl
        return data
      })
    }).then((res) => {
        AppService.login(res).then((res)=>{
          console.log(res)
        })
    }).catch((err)=>{
      console.log(err)
    })
    
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
