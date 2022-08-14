import {observable,action} from 'mobx-miniprogram'

export const store = observable({
  // 存储订单数据
  insureObj:{},
  // 存储产品详情中的保费计算
  caculateInsure:{},

  // 获取订单数据
  get getinsureObj(){
    console.log("getinsureObj:",this.insureObj);
    return this.insureObj
  },
// 新增订单
  addInsure:action(function(data){
    console.log("data:",data);
    this.insureObj = data
    console.log("store:", this.insureObj);
  }),
  // 新增保费计算
  addcalInsure:action(function(data){
    this.caculateInsure = data
    console.log("this.caculateInsure:",data);
    console.log("this.caculateInsure:",this.caculateInsure);
  }),
    // 获取保费计算
    get getcalInsure(){
      return this.caculateInsure
    },

})