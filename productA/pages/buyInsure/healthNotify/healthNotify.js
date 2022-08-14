// productA/pages/buyInsure/healthNotify/healthNotify.js
import Dialog from '../../../../miniprogram_npm/@vant/weapp/dialog/dialog';

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  ShowDialog1(){
    Dialog.alert({
      title: '模拟进入客服会话',
      message: '开发则工具暂不支持打开客服会话，请使用真机调试',
      confirmButtonText:'返回',
    }).then(() => {
      // on close
      console.log('关闭');
    });
  },
  ShowDialog2(){
    Dialog.confirm({
      message: '非常抱歉,您不满足本产品投保条件,去看看其他产品吧!',
      confirmButtonText:'其他产品',
      cancelButtonText:'选错了'
    }).then(() => {
       // on confirm
    }).catch(() => {
      // on cancel
    });
  },
  toFormFill(){
    wx.navigateTo({
      url: '../formFill/formFill',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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