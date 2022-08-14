// baodanC/pages/baodanList/baodanList.js
import { getBaoXianList } from '../../../service/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active:0,
    // product:[
    //     {
    //         id:1,
    //         title:"全部",
    //         productname:"保险名称",
    //         status:'待支付状态',
    //         people:'李白',
    //         policynumber:99999,
    //         protectiontime:'2022-01-01 00:00 2022-01-01 00:00',
    //         image:'http://file.baozhixing.com/kids.png',

    //     },
    //     {
    //         id:2,
    //         title:"待支付",
    //         productname:"保险名称",
    //         status:'待支付状态',
    //         people:'李白',
    //         policynumber:99999,
    //         protectiontime:'2022-01-01 00:00 2022-01-01 00:00',
    //         image:'http://file.baozhixing.com/kids.png',
    //     },
    //     {
    //         id:3,
    //         title:"已支付",
    //         productname:"保险名称",
    //         status:'已支付',
    //         people:'李白',
    //         policynumber:99999,
    //         protectiontime:'2022-01-01 00:00 2022-01-01 00:00',
    //         image:'http://file.baozhixing.com/kids.png',
    //     },

        
    // ],
    baodanlistall:[
        // {   
        //     id:1,
        //     productname:"保险名称",
        //     status:'待支付状态',
        //     people:'李白',
        //     policynumber:99999,
        //     protectiontime:'2022-01-01 00:00 2022-01-01 00:00',
        //     image:'http://file.baozhixing.com/kids.png',
        // },
        // {   
        //     id:2,
        //     productname:"保险名称",
        //     status:'待支付状态',
        //     people:'李白',
        //     policynumber:99999,
        //     protectiontime:'2022-01-01 00:00 2022-01-01 00:00',
        //     image:'http://file.baozhixing.com/kids.png',
        // },
        // {   
        //     id:3,
        //     productname:"保险名称",
        //     status:'已支付状态',
        //     people:'李白',
        //     policynumber:99999,
        //     protectiontime:'2022-01-01 00:00 2022-01-01 00:00',
        //     image:'http://file.baozhixing.com/kids.png',
        // }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    getBaoXianList().then(
      res => {
        console.log(res.data.data);
        this.setData({
          baodanlistall:res.data.data
        })
        console.log(this.data.baodanItems);
      }
    )

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
//   onChange(event){
//       wx.showToast({
//           title:`切换到标签${event.detail.name+1}`,
//           icon:'none'
//       })
//   },
  onbaodanDetails:function(){
      wx.navigateTo({
        url: '../baodanDetails/baodanDetails',
      })
  }
})