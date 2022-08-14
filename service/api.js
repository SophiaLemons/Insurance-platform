import service from './request'

// 首页获取商品列表
export function getGoodsList(){
  return service.get('/getGoodsList',{})
}
// 商品列表获取数据
export function getProductListByNavItem(params){
  return service.get('/getProductListByNavItem/?navItem=+'+params)
}
//获取理赔可选列表
export function getLiPeiList(){
  return service.get('/getLiPeiList',{})
}
//获取保险可选列表
export function getBaoXianList(){
  return service.get('/getBaoXianList',{})
}