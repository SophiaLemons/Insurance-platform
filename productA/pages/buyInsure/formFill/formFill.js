// productA/pages/buyInsure/formFill/formFill.js
import time from '../../../../utils/formatTime'
import Dialog from '../../../../miniprogram_npm/@vant/weapp/dialog/dialog';
import Toast from '../../../../miniprogram_npm/@vant/weapp/toast/toast';
import { createStoreBindings } from "mobx-miniprogram-bindings";
import {store} from "../../../../store/store"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username1: '',
    typeId1: '',
    id1: '',
    startTime1: '',
    endTime1: '',
    phone1: '',
    email1: '',
    typeObj1: '',
    username2: '',
    typeId2: '',
    id2: '',
    startTime2: '',
    endTime2: '',
    phone2: '',
    email2: '',
    typeObj2: '',
    bank: '',
    cardNum: '',
    columns: [{
        name: '杭州'
      },
      {
        name: '宁波'
      },
      {
        name: '温州'
      },
      {
        name: '嘉兴'
      },
      {
        name: '湖州'
      }
    ],
    bankList: [{
        name: '邮政'
      },
      {
        name: '工商银行'
      },
      {
        name: '农业银行'
      },
      {
        name: '建设银行'
      }
    ],
    isShowTypeId1: false,
    isShowTypeId2: false,
    isShowBank: false,
    activeIndex1: 0,
    activeIndex2: 0,
    activeIndex3: 0,
    checked: false,
    checkedTips:false,
    longTime: '', //证件长期有效
    isShowStartTime: false,
    isShowEndTime: false,
    currentDate1: '',
    minDate1: '',
    currentDate2: '',
    minDate2: '',
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      }
      if (type === 'month') {
        return `${value}月`;
      }
      return value;
    },
    showKeFu: false,
    showTiaokuan:true,
    showXuzhi:true,
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
  showTypeId1() {
    this.setData({
      isShowTypeId1: true
    })
  },
  showTypeId2() {
    this.setData({
      isShowTypeId2: true
    })
  },
  showBank() {
    this.setData({
      isShowBank: true
    })
  },
  onConfirm1(event) {
    const {
      picker,
      value,
      index
    } = event.detail;
    console.log(value);
    this.setData({
      isShowTypeId1: false,
      typeId1: value.name
    })
  },
  onConfirm2(event) {
    const {
      picker,
      value,
      index
    } = event.detail;
    console.log(value);
    this.setData({
      isShowTypeId2: false,
      typeId2: value.name
    })
  },
  onConfirm3(event) {
    const {
      picker,
      value,
      index
    } = event.detail;
    console.log(value);
    this.setData({
      isShowBank: false,
      bank: value.name
    })
  },
  // 复选款选中
  onChange(event) {
    this.setData({
      checked: event.detail,
    });
    // 当选中 长期有效 增加一个标识
    if (this.data.checked === true) {
      this.setData({
        longTime: '证件长期有效'
      })
    } else {
      this.setData({
        longTime: ''
      })
    }
  },
  onInputStart(event) {
    let t = time(event.detail).slice(0, 10)
    this.setData({
      currentDate1: event.detail,
      startTime1: t
    });
  },
  onInputEnd(event) {
    let t = time(event.detail).slice(0, 10)
    this.setData({
      currentDate2: event.detail,
      endTime1: t
    });
  },
  // 时间框 确定按钮
  selectStartTime() {
    // 当 长期有效 选中时 时间框事件取消
    if (this.data.checked === true) {
      this.setData({
        isShowStartTime: false
      })
    } else {
      this.setData({
        isShowStartTime: true
      })
    }
  },
  // 时间框 
  confirmStartTime() {
    this.setData({
      isShowStartTime: false
    })
  },
  selectEndTime() {
    if (this.data.checked === true) {
      this.setData({
        isShowEndTime: false
      })
    } else {
      this.setData({
        isShowEndTime: true
      })
    }
  },
  confirmEndTime() {
    this.setData({
      isShowEndTime: false
    })
  },
  // 时间弹框 取消按钮
  cancleStartTime() {
    this.setData({
      isShowStartTime: false
    })
  },
  cancleEndTime() {
    this.setData({
      isShowStartTime: false
    })
  },
  // 底部复选框
  onChangeTips(event){
    this.setData({
      checkedTips: event.detail,
    })
  },
  onClickButton() {
    let {
      username1,
      typeId1,
      checked,
      longTime1,
      startTime1,
      endTime1,
      phone1,
      email1,
      typeObj1,
      longTime,
      username2,
      typeId2,
      id2,
      startTime2,
      endTime2,
      phone2,
      email2,
      typeObj2,
      bank,
      cardNum,
      checkedTips
    } = this.data
    console.log("--", username1, typeId1, checked, longTime1, startTime1, endTime1, phone1, email1, typeObj1, longTime)

    let allData = {
      username1,typeId1,checked,longTime1,startTime1,endTime1,phone1,email1,
      typeObj1,longTime,username2,typeId2,id2,startTime2,endTime2,phone2,
      email2,typeObj2,bank,cardNum,checkedTips
    }
    this.addInsure(allData)
    this.storeBindings.updateStoreBindings() //立即更新
    console.log("form",allData);
    console.log(allData.checkedTips);
    if(allData.checkedTips === false){
      console.log(111);
      Toast.fail('请阅读底部内容！');
    } else {
      wx.navigateTo({
        url: '../../order/orderDetail/orderDetail',
      })
    }
   
  },
  onClickIcon() {
    Dialog.alert({
      title: '模拟进入客服会话',
      message: '开发则工具暂不支持打开客服会话，请使用真机调试',
      confirmButtonText: '返回',
    }).then(() => {
      // on close
      console.log('关闭');
    });
  },
  onShowkefu() {
    this.setData({
      showKeFu: true
    })
  },
  onCloseKeFu() {
    this.setData({
      showKeFu: false
    })
  },
  // 复制微信号
  copyWeixi() {
    wx.setClipboardData({
      data: 'weixinhao123',
      success() {
        wx.showToast({
          title: '复制成功',
        })
      }
    })
  },
  // 
  showTiaokuan(){
    console.log(111);
    this.setData({
      showTiaokuan:false
    })
  },
  showXuzhi(){
    console.log(222);
    this.setData({
      showXuzhi:false
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