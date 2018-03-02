import Appservie from '../services/Appservice.js'
import Promise from '../vender/bluebird.min.js'
// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue:"",
    historyList:[],
    recommond:[]
  },
  // 清除历史记录
  clearhistory:function(){
    console.log(111)
    this.setData({
      historyList:[]
    })
    // 清除缓存(这个方法把所有的缓存2都清理了而我们现在只是想清除历史记录所以不能用这个方法)
    // wx.clearStorageSync()
    wx.removeStorageSync("list")
  },
  // 获取到输入框中的内容
  inputHistory:function(e){
    var _this = this
    console.log(e)
    this.setData({
      inputValue : e.detail.value     
    })
    var input = this.data.inputValue;

    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy

        // 使用封装service
        Appservie.searchSuggest("北京",longitude,latitude).then((res)=>{
          console.log("封装结果",res)
          var arr = res.data.pois
          var newlist = arr.map(function (item) {
            return item.name
          })

          var detailList = _this.detailKey(newlist, _this.data.inputValue)
          // console.log(detailList)
          _this.setData({
            recommond: detailList
          })

        })
      },
    })
    
  }, 
  // 关键字标蓝
  detailKey:function(list,important){
    var left,middle,right
    var mylist = list.map((item,index)=>{
        var obj = new Object()
        var strIndex = item.indexOf(important)
        obj.left = item.substring(0,strIndex)
        obj.middle = important
        obj.right = item.substring(strIndex+important.length,item.length)
        return obj
    })
    return mylist
  },
   // 跳转到搜索到的内容
  searchhistory:function(){
    var _this = this
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
    input && !list.includes(input)  && list.push(input) && detailArr(list)
    wx.setStorageSync("list", list)//将输入框的值填加到storage中(去重)
    // 内容不超过10条
    function detailArr(list){
        if(list.length>10){
          list.shift()
        }
        
    }
    wx.navigateTo({
      url: '../searchHistory/searchHistory?data=${input}',
    })

    // 如果浏览器不支持includes这个方法使用js进行
    // var tag = true;
    // for(var i=0;i<list.length;i++){
    //   if(input == list[i]){
    //     tag = false;
    //   }
    // }
    // input && tag && list.push(input)
    
    // 点击搜索进行接口搜索
wx.getLocation({
  type:'wgs84',
  success: function(res) {
    var latitude = res.latitude
    var longitude = res.longitude
    var speed = res.speed
    var accuracy = res.accuracy
    var requestTask = wx.request({
      url: 'https://w.mapbar.com/search2015/search/suggest',
      data: {
        keywords:input ,
        city: '110000',
        location: latitude + ',' + longitude
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log('搜索结果', res.data)
        var arr = res.data.pois
        var newlist = arr.map(function(item){
              return item.name
        })
        _this.setData({
          recomond : newlist
        })
        
      }
    })
  },
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
      //reverse()不支持的情况下使用js实现
      var arr=[]
      for (var i = 0; i < wx.getStorageSync("list").length;i++){
        arr.unshift(wx.getStorageSync("list")[i])
      } 
      this.setData({
        historyList: arr
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
    //reverse()不支持的情况下使用js实现
    var arr = []
    for (var i = 0; i < wx.getStorageSync("list").length; i++) {
      arr.unshift(wx.getStorageSync("list")[i])
    }
    this.setData({
      historyList: arr
    }) 
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