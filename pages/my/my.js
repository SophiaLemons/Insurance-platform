// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productLunbo:[1,2,3],
    user_menu:[
        {
            id:1,
            image:"http://file.baozhixing.com/baodan.png",
            text:"保单",
            nav:"toBaodan",
        },
        {
            id:2,
            image:"http://file.baozhixing.com/lipei.png",
            text:"理赔",
            nav:"toLipei",
        },
        {
            id:3,
            image:"http://file.baozhixing.com/zixunmy.png",
            text:"咨询",
        }
    ],
    option_menu:[
        {
            id:1,
            image:"http://file.baozhixing.com/my_problem.png",
            text:"问题中心",
            nav:"/othersD/pages/commonProblems/commonProblems"
        },
        {
            id:2,
            image:"http://file.baozhixing.com/my_kefu.png",
            text:"投诉反馈",
            nav:"/othersD/pages/feedback/feedback"
        },
        {
            id:3,
            image:"http://file.baozhixing.com/my_about.png",
            text:"关于",
            jumperl:"#"
        }
    ]
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
      setTimeout(() => {
          wx.stopPullDownRefresh()
      }, 2000);

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
  toBaodan:function(){
      wx.navigateTo({
        url: '/baodanC/pages/baodanList/baodanList',
      })
  },
  toLipei:function(){
      wx.navigateTo({
        url: '/lipeiB/pages/lipeiChoosebaodan/lipeiChoosebaodan',
      })
  },
  toProduct:function(){
      wx.navigateTo({
        url: '/productA/pages/productDetail/productDetail',
      })
  }
})