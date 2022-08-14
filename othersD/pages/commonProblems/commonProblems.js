// othersD/pages/commonProblems/commonProblems.js
var sliderWidth = 20; // 需要设置slider的宽度，用于计算中间位置
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["投保", "保单", "理赔",'其他'],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0,
        navWidth:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var that = this;
    wx.getSystemInfo({
        success: function(res) {
            wx.createSelectorQuery().selectAll('.weui-navbar__item').boundingClientRect(function (rect) {
                that.setData({
                    sliderLeft: (rect[0].width - sliderWidth)/ 2 ,
                    sliderOffset: rect[0].width * that.data.activeIndex
                });
            }).exec()
        }
    });

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
  tabClick: function (e) {
    this.setData({
        sliderOffset: e.currentTarget.offsetLeft,
        activeIndex: e.currentTarget.id
    });
},
onPullDownRefresh: function () {
    setTimeout(function(){
        wx.stopPullDownRefresh()
    }, 5000);
}
})