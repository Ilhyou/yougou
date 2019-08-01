// pages/goods_list/index.js
/*
1 发送请求 获取商品列表的数据 
  1 
 */

import {
  request
} from "../../request/index.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // tabs标签的标题数组
    tabs: [{
        id: 0,
        title: "综合",
        isActive: true
      },
      {
        id: 1,
        title: "销量",
        isActive: false
      },
      {
        id: 2,
        title: "价格",
        isActive: false
      }
    ],
    // 页面要渲染的商品数组
    goodsList: []
  },
  // 全局 接口参数 
  QueryParams: {
    // 关键字  小米 。。 可以为空字符串
    query: "",
    // 分类id 
    cid: "",
    // 页码 
    pagenum: 1,
    // 页容量
    pagesize: 10
  },
  // 改变tabs标签的选中效果
  handleTitleChange(e) {
    // 先获取子组件传递过来的数据
    const {
      index
    } = e.detail;
    let {
      tabs
    } = this.data;
    tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
    this.setData({
      tabs
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.QueryParams.cid = options.cid;
    this.getGoodsList();
  },
  getGoodsList() {
    request({
        url: "/goods/search",
        data: this.QueryParams
      })
      .then(res => {
        // console.log(res);
        this.setData({
          goodsList: res.goods
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