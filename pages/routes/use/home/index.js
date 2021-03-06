// pages/routes/use/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 1, //默认展示那个组件
    refresh: false, //是否是下拉刷新动作
    loadMore: false,//是否加载是加载更多动作
    tabs: [
      { title: "这好玩", show: false },
      { title: "那座城", show: true },
      { title: "一键启程", show: false }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    console.log("下拉刷新")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  change(event) {
    const { index } = event.detail;
    let tabs = this.data.tabs;
    tabs[index].show = true;
    this.setData({ tabs, active: index })
  },

  loadData() {
    const { active, refresh } = this.data;
    //如果是下拉刷新
    if (refresh) {

    }

  }
})