import {
  request
} from "../../request/index.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 左侧的菜单数组
    leftMenuList: [],
    // 右侧 商品内容数组  
    rightGoodsList: [],
    // 选中的菜单
    currentIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCategoryList()
  },
  // 获取分类数据
  getCategoryList() {
    request({
      url: "/categories"
    }).then(res => {
      console.log(res);
      let leftMenuList = res.map((v, i) => ({
        cat_name: v.cat_name,
        cat_id: v.cat_id
      }));
      // 这个是大家电对象 里面的children 数组
      let rightGoodsList = res[0].children;
      this.setData({

        leftMenuList,
        rightGoodsList

      })
    })
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
  onShareAppMessage: function () {

  }
})