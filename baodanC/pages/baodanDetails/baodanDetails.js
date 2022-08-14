// baodanC/pages/baodanDetails/baodanDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // image:'//files.huizecdn.com/file1/M00/3B/2B/wKgls1seJ1mAblGNAAAPICY-ZQM441.png',
    // activeNames:['1'],
    showXuzhi:true,
    showTiaokuan:true
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

  },
  onChange(event){
      this.setData({
          activeNames:event.detail
      })
  },
  showXuzhi:function(){
    this.setData({
      showXuzhi:false
    })
  },
  showTiaokuan:function(){
    this.setData({
      showTiaokuan:false
    })
  }
})