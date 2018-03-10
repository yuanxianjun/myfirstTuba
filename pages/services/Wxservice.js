// 封装微信中的方法
import Promise from '../vender/bluebird.min.js'
function login(){
  return new Promise((resolve,reject)=>{
    wx.login({
      success:resolve,
      fail:reject
    })
  }) 
}
// 获取用户数据
function getUserInfo(){
  return new Promise((resolve,reject)=>{
    wx.getUserInfo({
        success:resolve,
        fail:reject
    })
  })
}
module.exports={
  login,getUserInfo
}