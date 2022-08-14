// lipeiB/pages/lipeiChoosebaodan/lipeiChoosebaodan.js
import {getLiPeiList} from '../../../service/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
      active:0,
      steps:[
          {     
              desc:"选择保单",
              inactiveIcon: 'shield-o',
              activeIcon:'shield-o'  
          },
          {  
            desc:"填写材料",
            inactiveIcon: 'records',
            activeIcon:'records'
            
        },
        {    
            desc:"提交申请",
            inactiveIcon: 'upgrade',
            activeIcon:'upgrade'
        }
      ],
      baodanItems:[
        // {
        //     id:1,
        //     image:"http://file.baozhixing.com/kids.png",
        //     navOrder:"toOrderDetails",
        //     navApply:"toApplyLipei",
        //     textOrder:"申请理赔",
        //     textApply:"查看订单",
        // }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    getLiPeiList().then(
      res => {
        console.log(res.data.data);
        this.setData({
          baodanItems:res.data.data
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
  toOrderDetails:function(){
    wx.navigateTo({
        url:'../lipeiOrderDetails/lipeiOrderDetails'
    })
  },
    toApplyLipei:function(){
        wx.navigateTo({
            url:'../lipeiInputInfo/lipeiInputInfo'
        })
    }
})