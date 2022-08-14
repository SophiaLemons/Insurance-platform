// lipeiB/pages/lipeiOrderDetails/lipeiOrderDetails.js
import Toast from '@vant/weapp/toast/toast';

Page({
  /**
   * 页面的初始数据
   */
  data: {
      date:'',
      show:false,
      toshow:false,
      lipeitypeArr:['重大疾病', '恶性肿瘤', '瘫痪', '良性脑肿瘤', '双耳失聪'],
      lipeitype:0,
      steps: [
            {
            text: '身份证信息不符',
            desc: '身份证上传信息与被保人信息不符，请修改后重新上传',
            inactiveIcon: 'success',
            activeIcon: 'success',
            },
            {
            text: '身份证信息不符',
            desc: '身份证上传信息与被保人信息不符，请修改后重新上传',
            inactiveIcon: 'success',
            activeIcon: 'success',
            },
            {
            text: '身份证信息不符',
            desc: '身份证上传信息与被保人信息不符，请修改后重新上传',
            inactiveIcon: 'success',
            activeIcon: 'success',
            }
        ],
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
  showPopup() {
    this.setData({ toshow: true });
  },
  onLPConfirm(event) {
    this.setData({
      toshow:false,
      data:this.data.lipeitype[event.detail.value],
    })  
  },
  onLPCancel() {
    this.setData({toshow:false})
  },
  onClose() {
    this.setData({ toshow: false });
  },
  onTimeDisplay() {
    this.setData({ show: true });
  },
  onTimeClose() {
    this.setData({ show: false });
  },

  formatDate(date) {
    date = new Date(date);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  },
  onConfirm(event) {
    this.setData({
      show: false,
      date: this.formatDate(event.detail),
    });
  },
})