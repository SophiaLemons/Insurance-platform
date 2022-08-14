// productA/pages/productList/productList.js
import {getProductListByNavItem} from "../../../service/api"
import * as watch from "../../../utils/watch"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    acyive:1,
    keyWord:'',
    // 商品列表
    goodsList:[],
    // 导航列表
    tabList:[
      {
        id:1,
        title:'重疾'
      },
      {
        id:2,
        title:'健康'
      },
      {
        id:3,
        title:'意外'
      },
      {
        id:4,
        title:'航旅'
      },
      {
        id:5,
        title:'医疗'
      },
      {
        id:6,
        title:'家财'
      },
      {
        id:7,
        title:'定寿'
      },
    ]
  },
  onClick(event){
    this.setData({
      keyWord:event.detail.title
    })
  },
  toProductDetail(){
    wx.navigateTo({
      url: '/productA/pages/productDetail/productDetail',
    })
  },

  watch:{
    keyWord:function(newVal,oldVal){
      console.log(newVal,oldVal);
      this.getData(newVal)
    }
  },

  getData(params){
    getProductListByNavItem(params).then(
      res => {
        console.log(res);
        this.setData({
          goodsList:res.data.data
        })
      }
    ).catch(
      err => {
        console.log(err);
      }
    )
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    watch.setWatcher(this)
    this.getData(this.data.keyWord)
    
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