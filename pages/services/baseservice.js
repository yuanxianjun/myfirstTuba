// 封装了一个get 一个post
import Promise from '../vender/bluebird.min.js'
// 封装get 方法
function get(url,data){
  return new Promise((resolve,reject)=>{
    wx.request({
      url: url, //仅为示例，并非真实的接口地址
      data: data,
      method:"GET",     
      header: {
        'content-type': 'application/json' // 默认值
      },
      success:resolve,
      fail:reject
    })
  })
}
// 抛出方法
module.exports={
  get : get 
}