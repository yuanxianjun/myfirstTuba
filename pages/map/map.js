// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   currentIndex:'',
   longitude:'',
   lattitude:'',
   autoplay:false,
  //  interval:3000,
   current:0,
   include_markers:[],
   imgUrls:[
      'http://img1.imgtn.bdimg.com/it/u=3440016527,164210732&fm=27&gp=0.jpg',
      'http://img0.imgtn.bdimg.com/it/u=1228808579,387563929&fm=27&gp=0.jpg',
      'http://img1.imgtn.bdimg.com/it/u=2521608309,4277977610&fm=27&gp=0.jpg',    
   ],
    markers: [{
        id: 1,
        latitude: '39.54245',
        longitude: '116.23456',
        iconPath1: '../resouces/myicon/poi_1.png',
        iconPath: '../resouces/myicon/poi_1x.png',
        width: 25,
        height: 25,
        name1:"重庆麻辣烫(西二旗大街)",
        name2:"东北1km 西二旗b侧门出"
      },
      {
        id: 2,
        latitude: '39.33',
        longitude: '116.23456',
        iconPath1: '../resouces/myicon/poi_2.png',
        iconPath: '../resouces/myicon/poi_2x.png',
        width: 25,
        height: 30,
         name1: "黄焖鸡",
        name2: "东北1km 西二旗b侧门出"
      },
      {
        id: 3,
        latitude: '39.444',
        longitude: '116.23456',
        iconPath1: '../resouces/myicon/poi_3.png',
        iconPath: '../resouces/myicon/poi_3x.png',
        width: 25,
        height: 30,
        name1: "烧饼",
        name2: "东北1km 西二旗b侧门出"
      },
      {
        id: 4,
        latitude: '39',
        longitude: '116.234',
        iconPath1: '../resouces/myicon/poi_4.png',
        iconPath: '../resouces/myicon/poi_4x.png',
        width: 25,
        height: 30,
        name1: "烤羊肉",
        name2: "东北1km 西二旗b侧门出"
      },
      {
        id: 5,
        latitude: '39.55',
        longitude: '116',
        iconPath1: '../resouces/myicon/poi_5.png',
        iconPath: '../resouces/myicon/poi_5x.png',
        width: 25,
        height: 30,
        name1: "二锅头",
        name2: "东北1km 西二旗b侧门出"
      },
      {
        id: 6,
        latitude: '39',
        longitude: '116.66',
        iconPath1: '../resouces/myicon/poi_6.png',
        iconPath: '../resouces/myicon/poi_6x.png',
        width: 25,
        height: 30,
        name1: "顺丰",
        name2: "东北1km 西二旗b侧门出"
      },
      {
        id: 7,
        latitude: '39.77',
        longitude: '116',
        iconPath1: '../resouces/myicon/poi_7.png',
        iconPath: '../resouces/myicon/poi_7x.png',
        width: 25,
        height: 30,
        name1: "智联",
        name2: "东北1km 西二旗b侧门出"
      },
      {
        id: 8,
        latitude: '39',
        longitude: '116.88',
        iconPath1: '../resouces/myicon/poi_8.png',
        iconPath: '../resouces/myicon/poi_8x.png',
        width: 25,
        height: 30,
        name1: "京东",
        name2: "东北1km 西二旗b侧门出"
      },
      {
        id: 9,
        latitude: '39.99',
        longitude: '116',
        iconPath1: '../resouces/myicon/poi_9.png',
        iconPath: '../resouces/myicon/poi_9x.png',
        width: 25,
        height: 30,
        name1: "腾讯",
        name2: "东北1km 西二旗b侧门出"
      },
      {
        id: 10,
        latitude: '39',
        longitude: '116',
        iconPath1: '../resouces/myicon/poi_10.png',
        iconPath: '../resouces/myicon/poi_10x.png',
        width: 25,
        height: 30,
        name1: "阿里",
        name2: "东北1km 西二旗b侧门出"
      },
    ],
    scale:10,
    covers: [{
      latitude: 23.099794,
      longitude: 113.324520,
      icaonPath: '../images/car.png',
      rotate: 10,
     
    }, {
      latitude: 23.099298,
      longitude: 113.324129,
      iconPath: '../images/car.png',
      rotate: 90
    }]
  },
  // 点击每个坐标点进行变化
  markersEvent:function(e){  
    console.log(e)
    this.setData({
      current: e.markerId-1
    }, () => {
      this.dealMarkers()
    })
  },
  SwiperEvent:function(e){
    this.setData({
      current:e.detail.current
    },()=>{
      this.dealMarkers()
    })
  },
  // 处理markers
  dealMarkers:function(){
    var markers = this.data.markers
    var index = this.data.current
    var arr = markers.map((item,idx)=>{
         if(idx == index){
           item.iconPath = "../resouces/myicon/poi_"+(idx+1)+".png"
           item.longitude = item.longitude 
           item.latitude = item.latitude
         }else{
           item.iconPath = "../resouces/myicon/poi_"+(idx+1)+"x.png"
         }
          return item;
    })
    this.setData({
      markers:arr
    })
  },
  // 点击全览
  watchAll:function(){
    this.setData({
      include_markers : this.data.markers
    })
  },
  // 点击按钮跳转到设终点的页面
  toEndPoint:function(){
    wx.navigateTo({
      url:'../SetEndPoint/SetEndPoint',
    })
  },
  // 点击缩放视野
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 设置头部
    wx.setNavigationBarTitle({
      title: '地图',
    })
      var _this=this
      this.dealMarkers()
      wx.getLocation({
        type: 'wgs84',
        success: function(res) {
          var longitude = res.longitude
          var latitude = res.latitude
          var speed = res.speed
          var accuracy = res.accuracy;
          _this.setData({
            longitude,
            latitude
          })
        },
      })
      this.setData({
          recommond:options.recommond
      })
      console.log("地图页面",this.data.recommond)
     
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
        console.log(this.data.current)
        this.setData({
          
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