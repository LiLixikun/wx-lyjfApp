// pages/routes/use/hotel/home/index.js
import api from '../../../../../utils/api.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [],
    url: api.hotel.findHotelList
  },

  //获取数据列表
  getDataList: function (e) {
    this.setData({
      dataList: e.detail.dataList
    })
  },

  goToDetail(e) {
    const id = e.currentTarget.dataset.id;
    if (!!id)
      wx.navigateTo({
        url: '/pages/routes/use/hotel/detail/index?id=' + id
      })
  },
})