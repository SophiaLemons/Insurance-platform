// lipeiB/pages/lipeiInputInfo/lipeiInputInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shigu_text:"请选择您报案的事故类型",
    // shigu_type:1,
    shigu: ['美国', '中国', '巴西', '日本'],
    shiguTypeDefaultColor:'#9E9E9E',
    shigu_time:"请选择事件发生时间",
    shiguTimeDefaultColor:'#9E9E9E',
    detail:false,  //默认显示安卓的
    showXuzhi:true,
    showTiaokuan:true,
    checkXuzhi:false
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
  bindShiguTypeChange(e){
    this.setData({
        shigu_type: e.detail.value,
        shigu_text:this.data.shigu[e.detail.value],
        shiguTypeDefaultColor:"#282828"
      })    
  },
  bindShiguTime(e){
    this.setData({
      shigu_time: e.detail.value,
      shiguTimeDefaultColor:"#282828"
    })
  },
  toLipeiDetails:function(){
      wx.navigateTo({
        url: '../lipeiOrderDetails/lipeiOrderDetails',
      })
  },
  checkXuzhi(){
    this.setData({
      checkXuzhi:!this.data.checkXuzhi
    })
  },
  showXuzhi(){
    this.setData({
      showXuzhi:false
    })
  }, 
  showTiaokuan(){
    this.setData({
      showTiaokuan:false
    })
  }
})