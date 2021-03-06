import Promise from '../vender/bluebird.min.js'

// 引入baseservice.js
import BaseService from '../services/baseservice.js'

var url = 'https://w.mapbar.com/search2015/search/suggest'
// 联想搜索
function searchSuggest(value,longitude,latitude){
  return BaseService.get(url,{
    keywords:value,
    city:'110000',
    location:longitude+','+latitude
  })
}
// 搜索具体的位置引导
function searcResult(value,longitude,latitude){
  return BaseService.get(`https://w.mapbar.com/search2015/search`, {
    keywords: value,
    city: '110000',
    location: longitude + ',' + latitude
  })
}
// 登录领取code码之后调取数据
function login(data){
  return BaseService.get("https://wireless.mapbar.com/api/3n1-wxgroup/wxGroup/login.json",data)
}
module.exports={
  searchSuggest,
  searcResult,
  login
}
