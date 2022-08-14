// productA/pages/productDetail/productDetail.js
import Dialog from '../../../miniprogram_npm/@vant/weapp/dialog/dialog';
import {createStoreBindings} from "mobx-miniprogram-bindings"
import {store} from "../../../store/store"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false, //展示计算弹窗
    planStatus:0,// 选中的计划
    insureStatus:0,
    sexStatus:0,
    wayStatus:0,
    timeStatus:0,
    showKeFu:false, //展示客服弹窗
    insure:'', //存储选中的值
    sex:'',
    payWay:'',
    insureTime:'',
    price:775.50,
    showXuzhi:true,
    showTiaokuan:true,
    // 计划列表
    planList:[
      {
        id:1,
        plan:'计划一'
      },
      {
        id:2,
        plan:'计划二'
      },
      {
        id:3,
        plan:'计划三'
      },
      {
        id:4,
        plan:'计划四'
      },
    ],
    // 保费试算
    caculatePopupList:{
      insure:[
        {
          id:1,
          text:'20万'
        },
        {
          id:2,
          text:'30万'
        },
        {
          id:3,
          text:'40万'
        },
        {
          id:4,
          text:'50万'
        },
        {
          id:5,
          text:'60万'
        },
        {
          id:6,
          text:'70万'
        },
      ],
      sex:[
        {
          id:1,
          text:"不明性别类型"
        },
        {
          id:2,
          text:"女"
        },
        {
          id:3,
          text:"男"
        }
      ],
      way:[
        {
          id:1,
          text:"10年"
        },
        {
          id:2,
          text:"20年"
        },
        {
          id:3,
          text:"30年"
        },
      ],
      time:[ 
        {
          id:1,
          text:"10年"
        },
        {
          id:2,
          text:"20年"
        },
        {
          id:3,
          text:"30年"
        },
        {
          id:4,
          text:"报至60年"
        },
      ]
    }
  },
  changePlan(event){
    console.log(event.target.dataset.index);
    this.setData({
      planStatus:event.target.dataset.index
    })
  },
  showPopup(){
    console.log(222);
    this.setData({
      show:true
    })
  },
  onClose(){
    this.setData({
      show:false
    })
  },
  // 保费计算弹窗
changeInsure(event){
    console.log(event.target.dataset);
    let {id,text} = event.target.dataset.item
    this.setData({
      insureStatus:id-1,
      insure:text
    })
  },
changeSex(event){
  let {id,text} = event.target.dataset.item
  this.setData({
    sexStatus:id-1,
    sex:text
  })
},
changeWay(event){
  let {id,text} = event.target.dataset.item
  this.setData({
    wayStatus:id-1,
    payWay:text
  })
},
changeTime(event){
  let {id,text} = event.target.dataset.item
  this.setData({
    timeStatus:id-1,
    insureTime:text
  })
},
// 底部点击投保按钮
onClickButton(){
  let {insure,sex,payWay,insureTime} = this.data
    let caculateInsure = {
      insure,
      sex,
      payWay,
      insureTime
    }
    console.log("caculateInsure:",caculateInsure);
  if(caculateInsure.insure === '' || caculateInsure.sex === '' || caculateInsure.payWay === '' || caculateInsure.insureTime === ''){
    this.setData({
      show:true
    })
  } else {
    this.addcalInsure(caculateInsure)
    wx.navigateTo({
      url: '../buyInsure/healthNotify/healthNotify',
    })
  }
 
},
ShowDialog(){
  Dialog.alert({
    title: '模拟进入客服会话',
    message: '开发则工具暂不支持打开客服会话，请使用真机调试',
    confirmButtonText:'返回',
  }).then(() => {
    // on close
    console.log('关闭');
  });
},
onClickkefu(){
  this.setData({
    showKeFu:true
  })
},
onCloseKeFu(){
  this.setData({
    showKeFu:false
  })
},
// 复制微信号
copyWeixi(){
  wx.setClipboardData({
    data: 'weixinhao123',
    success(){
      wx.showToast({
        title: '复制成功',
      })
    }
  })
},
showTiaokuan(){
  this.setData({
    showTiaokuan:false
  })
},
showXuzhi(){
  this.setData({
    showXuzhi:false
  }) 
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.storeBindings = createStoreBindings(this,{
      store,
      fields:['caculateInsure','getcalInsure'],
      actions:['addcalInsure']
    })
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
  // 页面卸载时销毁数据绑定
    this.storeBindings.destroyStoreBindings();
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})