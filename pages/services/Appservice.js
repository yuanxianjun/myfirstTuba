import Promise from '../vender/bluebird.min.js'

// 引入baseservice.js
import BaseService from '../services/baseservice.js'

var url = 'https://w.mapbar.com/search2015/search/suggest'
function searchSuggest(value,longitude,latitude){
  return BaseService.get(url,{
    keywords:value,
    city:'110000',
    location:longitude+','+latitude
  })
}
module.exports={
  searchSuggest
}
