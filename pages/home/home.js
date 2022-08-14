// pages/home/home.js
import {getGoodsList} from '../../service/api'
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollTop:0, //滚动条高度
    bannerHight:0, //banner高度
    activeCate:0, //分类默认索引
    activeBudget:0,
    show:false, //是否展示顶部的分类菜单
    bugState:0, //默认初始预算为 索引值为0的值
    cateState:0,
    popupState:0,
    isFixed:false, //针对点击分类 进行分类导航的固定
    // 功能菜单
    menu:[
      {
        id:2,
        image:"http://file.baozhixing.com/lp.png",
        text:"理赔",
        jumpurl:"/lipeiB/pages/lipeiChoosebaodan/lipeiChoosebaodan"
      },
      {
        id:3,
        image:"http://file.baozhixing.com/baodan1.png",
        text:"保单",
        jumpurl:"/baodanC/pages/baodanList/baodanList"
      },
      {
        id:4,
        image:"http://file.baozhixing.com/productList_icon.png",
        text:"产品",
        jumpurl:"/productA/pages/productList/productList"
      }
    ],
    // 分类
    cateMenu:[
      {
        id:1,
        text:'重疾险'
      },
      {
        id:2,
        text:'防癌险'
      },
      {
        id:3,
        text:'医疗险'
      },
      {
        id:4,
        text:'寿险'
      },
      {
        id:5,
        text:'综合意外险'
      },
      {
        id:6,
        text:'旅行意外险'
      },
      {
        id:7,
        text:'孕妇险'
      },
      {
        id:8,
        text:'成人组合'
      },
      {
        id:9,
        text:'儿童组合'
      },
    ],
    budget:[
      {
        id:1,
        context:'1000元预算'
      },
      {
        id:2,
        context:'2000元预算'
      },
      {
        id:3,
        context:'3000元预算'
      },
      {
        id:4,
        context:'4000元预算'
      },
      {
        id:5,
        context:'5000元预算'
      },
    ],
    //文章
    articleList:[
      {
        id:1,
        title:'重疾险测评：泰瑞超级玛丽别出心裁了',
        time:'2020年2月18日',
        tag:'原创',
        imgUrl:'http://file.baozhixing.com/WechatIMG2098.jpeg'
      },
      {
        id:1,
        title:'重疾险测评：泰瑞超级玛丽别出心裁了',
        time:'2022年5月23日',
        tag:'原创',
        imgUrl:'http://file.baozhixing.com/WechatIMG2098.jpeg'
      },
      {
        id:1,
        title:'重疾险测评：泰瑞超级玛丽别出心裁了',
        time:'2021年9月09日',
        tag:'原创',
        imgUrl:'http://file.baozhixing.com/WechatIMG2098.jpeg'
      },
    ],
    // 课堂
    classList:[
      {
        id:1,
        title:'教你挑保险-老人组合方案',
        text:'想给父母选保险，又怕没办法通过保险公司核保？来教你给老人购进最全面的保障方案',
        imgUrl:'http://file.baozhixing.com/ketang.jpeg'
      },
      {
        id:2,
        title:'教你挑保险-老人组合方案',
        text:'想给父母选保险，又怕没办法通过保险公司核保？来教你给老人购进最全面的保障方案',
        imgUrl:'http://file.baozhixing.com/ketang.jpeg'
      },
      {
        id:3,
        title:'教你挑保险-老人组合方案',
        text:'想给父母选保险，又怕没办法通过保险公司核保？来教你给老人购进最全面的保障方案',
        imgUrl:'http://file.baozhixing.com/ketang.jpeg'
      },
    ],
    // 商品列表
    goodsList:[],
    // 底部弹出层 内容
    popupList:[
      {
        id:1,
        text:'重疾险'
      },
      {
        id:2,
        text:'防癌险'
      },
      {
        id:3,
        text:'医疗险'
      },
      {
        id:4,
        text:'寿险'
      },
      {
        id:5,
        text:'综合意外险'
      },
      {
        id:6,
        text:'旅行意外险'
      },
      {
        id:7,
        text:'孕妇险'
      },
      {
        id:8,
        text:'成人组合'
      },
      {
        id:9,
        text:'儿童组合'
      },
    ]
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
  // 分类点击事件
  onClick(event){
    console.log(event.detail);
  },
  showPopup(){
    this.setData({
      show:true
    })
  },
  onClose(){
    this.setData({show:false})
  },
  changeCate(event){
    this.setData({
      cateState:event.target.dataset.index
    })
  },
  changeBug(event){
    this.setData({
      bugState:event.target.dataset.index
    })
  },
  changePopup(event){
    let {item,id} = event.target.dataset.item
    let data = this.data.cateMenu
    let selectId = data.filter((i)=> {
     return i.id === id
   })
    this.setData({
      popupState:id-1,
      cateState:selectId[0].id-1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
  wx.createSelectorQuery().select('.category-box').boundingClientRect((rect) => {
    this.setData({
      bannerHight:rect.top
    })
  }).exec()
   
   getGoodsList().then(
      res => {
        console.log(res.data.data);
        this.setData({
          goodsList:res.data.data
        })
        console.log(this.data.goodsList);
      }
    )
  },

  // 滚动条监听
  onPageScroll:function(e){
    this.setData({
      scrollTop:e.scrollTop
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