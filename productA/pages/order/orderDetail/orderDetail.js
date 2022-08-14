// productA/pages/order/orderDetail/orderDetail.js
import {createStoreBindings} from 'mobx-miniprogram-bindings'
import {store} from '../../../../store/store'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeNames: ['1','2'], //折叠板索引
    insureData:[]
  },
  // 折叠板
  onChangeColl(event){
    this.setData({
      activeNames: event.detail,
    });
  },
  // 复制
copy(){
  wx.setClipboardData({
    data: '1234567890',
    success(){
      wx.showToast({
        title: '复制成功',
      })
    }
  })
},
// 关闭
closeOrder(){
  wx.switchTab({
    url: '../../../../pages/home/home',
  })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.storeBindings = createStoreBindings(this,{
      store,
      fields:['insureObj','getinsureObj'],
      actions:['addInsure']
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