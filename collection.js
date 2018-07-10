var util = require('../../../utils/util.js');

//打点 必备
import dot from '../../../dotLib/dot'
var deviceInfo = wx.getSystemInfoSync()
var now = new Date().getTime();
var addition
/**
* author by wangtao
*/
Page({

  /**
   * 页面的初始数据
   */
  data: {

    /** 
       * 页面配置 
       */
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,
    "currentItem": "",
    "selectId": 0,
    "taga": [
      { "text": "问答", "id": 0 }, 
      { "text": "专业", "id": 1 }, 
      { "text": "院校", "id": 2 }, 
      { "text": "文章", "id": 3 }],
  },
  /**
* 页面信息的打点配置
*/
  __dot_page: function () {
    return {
      title: '专业院校打点',
      category: '用户信息打点',
      addition: '',
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this

    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });



  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  // onShareAppMessage: function () {

  // },

  /**
   * 点击切换tab选项
   */
  select: function (e) {
    var that = this
    // console.log(e.target.dataset.id)
    that.setData({
      'currentItem': e.target.dataset.id,
    })

    if (that.data.currentTab === e.target.dataset.id) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.id
      })
    }
  },


  /**
   * 跳转到专业详情
   */
  linkToDetails: function (e) {
    wx.navigateTo({
      url: '/pages/College/professDetails/professDetails?name=' + e.currentTarget.dataset.name + "&education=" + e.currentTarget.dataset.education
    })
  },

  /**
  * 跳转到院校详情
  */
  linkToSchoolDetails: function (e) {
    wx.navigateTo({
      url: '/pages/College/universityDetails/universityDetails?name=' + e.currentTarget.dataset.name
    })
  },


  /** 
       * 滑动切换tab 
       */
  bindChange: function (e) {
    console.log(e.detail.current)
    var that = this;
    //埋点
    var name
    if (e.detail.current == 0) {
   
    }
    else {
    
    }
    that.setData({ currentTab: e.detail.current });

  },

})