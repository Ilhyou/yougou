// pages/goods_list/index.js
/*
1 发送请求 获取商品列表的数据 
2 上拉加载下一页 
  1 什么时候触发上拉加载下一页 也是 滚动条触底 才触发事件 
    onReachBottom 存在于小程序的页面 生命周期中！！！
  2 先判断 有没有下一页数据
    1 当前的页码  和 总页数 （未知）
      总页数 = Math.ceil(总的条数 / 页容量 ) 
              21 / 10= 2.1  Math.ceil(2.1)=3 
      当前的页码 >=  总页数  没有下一页数据 
    2 什么地方写获取总页数 
      接口请求成功之后 有了total属性之后就可以获取 
  3 有下一页数据 
    pagenum++;
    发送请求。。
      不能再对goodsList 全部替换 
      对旧的数组进行拼接 
  4 没有下页
    弹出提示。
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
  // 总页数
  TotalPages: 1,
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
        // 计算总页数
        // 总页数 = Math.ceil(总的条数 / 页容量 )
        this.TotalPages = Math.ceil(res.total / this.QueryParams.pagesize);
        this.setData({
          // 为了做加载下一页 改成拼接
          goodsList: [...this.data.goodsList, ...res.goods]
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
   * 滚动条触底 上拉加载下一页 事件
   */
  onReachBottom: function () {
    console.log(123);
    //  1 先判断还有没有下一页数据
    if (this.QueryParams.pagenum > this.TotalPages) {
      // 没有下一页数据
      console.log("没有下一页数据");
      wx.showToast({
        title: '没有下一页数据了',
        icon: 'none'
      });
    } else {
      // 还有下页数据
      // console.log("还有下页数据");
      this.QueryParams.pagenum++;
      this.getGoodsList();
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})