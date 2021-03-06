// pages/my/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderList: [{
        title: '全部订单',
        src: '../../../assets/usericon/icon 全部订单@2x.png'
      },
      {
        title: '待出行',
        src: '../../../assets/usericon/icon 待出行@2x.png'
      },
      {
        title: '待支付',
        src: '../../../assets/usericon/待支付@2x.png'
      },
      {
        title: '退款单',
        src: '../../../assets/usericon/icon 退款单@2x.png'
      }
    ],
    cellList: ['邀请好友', '攻略', '收藏', '我的银行卡', '房券', '地址', '安全中心'],
    isLogin: false,
    growthValue: 150, //获得多少成长值
    totalGrowth: 300, //总成长值
    growthWidth: 0, //成长值长度得初始值
    isOpenWallet: true, //是否开通钱包
    userInfo: {},
    headerImg: "../../../assets/usericon/img 头像@2x.png"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.initGrow();
    this.setData({
      userInfo: getApp().globalData.userInfo
    })
    if (getApp().globalData.userInfo.avatarUrl) {
      console.log(getApp().globalData.userInfo.avatarUrl)
      this.setData({
        headerImg: getApp().globalData.userInfo.avatarUrl
      })
    }
  },
  //计算成长值长度
  initGrow() {
    let that = this;
    //创建节点选择器
    var item = wx.createSelectorQuery();
    item.select('#bgview').boundingClientRect() //里面需要绑定 view组件的id
    item.exec(function(res) { //res为绑定元素信息的数组
      let w = that.data.growthValue * res[0].width / that.data.totalGrowth;
      that.setData({
        growthWidth: w,
      })
    })
  },

  //跳转到用呗账号
  accountClick() {
    wx.navigateTo({
      url: '/pages/routes/my/account/index'
    })
  },
  //充值
  topUp() {
    wx.navigateTo({
      url: '/pages/routes/my/topup/index'
    })
  },
  withdrawal() {
    wx.navigateTo({
      url: '/pages/routes/my/withdrawal/index'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})