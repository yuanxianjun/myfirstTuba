// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   currentIndex:'',
   longitude:'',
   lattitude:'',
   autoplay:true,
   interval:3000,
   imgUrls:[
      'http://img1.imgtn.bdimg.com/it/u=3440016527,164210732&fm=27&gp=0.jpg',
      'http://img0.imgtn.bdimg.com/it/u=1228808579,387563929&fm=27&gp=0.jpg',
      'http://img1.imgtn.bdimg.com/it/u=2521608309,4277977610&fm=27&gp=0.jpg',    
   ],
    markers: [{
        id: 1,
        latitude: '39.54245',
        longitude: '116.23456',
        iconPath: '../resouces/myicon/poi_1.png',
        width: 25,
        height: 25
      },
      {
        id: 2,
        latitude: '39.33',
        longitude: '116.23456',
        iconPath: '../resouces/myicon/poi_2x.png',
        width: 25,
        height: 30
      },
      {
        id: 3,
        latitude: '39.444',
        longitude: '116.23456',
        iconPath: '../resouces/myicon/poi_3x.png',
        width: 25,
        height: 30
      },
      {
        id: 4,
        latitude: '39',
        longitude: '116.234',
        iconPath: '../resouces/myicon/poi_4x.png',
        width: 25,
        height: 30
      },
      {
        id: 5,
        latitude: '39.55',
        longitude: '116',
        iconPath: '../resouces/myicon/poi_5x.png',
        width: 25,
        height: 30
      },
      {
        id: 6,
        latitude: '39',
        longitude: '116.66',
        iconPath: '../resouces/myicon/poi_6x.png',
        width: 25,
        height: 30
      },
      {
        id: 7,
        latitude: '39.77',
        longitude: '116',
        iconPath: '../resouces/myicon/poi_7x.png',
        width: 25,
        height: 30
      },
      {
        id: 8,
        latitude: '39',
        longitude: '116.88',
        iconPath: '../resouces/myicon/poi_8x.png',
        width: 25,
        height: 30
      },
      {
        id: 9,
        latitude: '39.99',
        longitude: '116',
        iconPath: '../resouces/myicon/poi_9x.png',
        width: 25,
        height: 30
      },
      {
        id: 10,
        latitude: '39',
        longitude: '116',
        iconPath: '../resouces/myicon/poi_10x.png',
        width: 25,
        height: 30
      },
    ],
    scale:10,
    covers: [{
      latitude: 23.099794,
      longitude: 113.324520,
      icaonPath: '../images/car.png',
      rotate: 10
    }, {
      latitude: 23.099298,
      longitude: 113.324129,
      iconPath: '../images/car.png',
      rotate: 90
    }]
  },
  // 点击按钮跳转到设终点的页面
  toEndPoint:function(){
    wx.navigateTo({
      url:'../SetEndPoint/SetEndPoint',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 设置头部
    wx.setNavigationBarTitle({
      title: '地图',
    })
      var _this=this
      wx.getLocation({
        type: 'wgs84',
        success: function(res) {
          console.log(res)
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
          recommond:JSON.parse(options.recommond)
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