// pages/pay/index.js
/**
 * 1 动态渲染的商品应该是 checked=true的这些商品
 */
import regeneratorRuntime from '../../lib/runtime/runtime';
// import { getSetting, openSetting, chooseAddress, showModal } from "../../utils/asyncWx";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: {},
    cart: {},
    totalNum: 0,
    totalPrice: 0
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
  // 页面切换显示的时候 触发 onShow
  onShow: function () {
    //  1 获取本地存储中的 收货地址数据  默认值 空字符串
    const address = wx.getStorageSync("address") || {};
    // 1 获取购物车数据
    const cart = wx.getStorageSync("cart") || {};
    // 2 把address存入到data中
    this.setData({
      address
    });
    this.setCart(cart);
  },
  setCart(cart) {
    // 0 把购物车对象转成 数组 
    let cartArr = Object.values(cart);
    console.log(cartArr);
    // 1 计算是否都选中了
    // every 会接收一个回调函数 当所有循化项都返回 true的时候 cartArr.every的返回值 才会是true 
    // every 当是空数组调用它的时候 返回值就是true
    // 2 计算总价格 只计算了勾选的商品的价格 
    let totalPrice = 0;
    // 3 计算总数量 
    let totalNum = 0;
    cartArr.forEach(v => {
      if (v.checked) {
        totalPrice += v.num * v.goods_price;
        totalNum += v.num;
      }
    })
    this.setData({
      cart,
      totalPrice,
      totalNum
    });
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