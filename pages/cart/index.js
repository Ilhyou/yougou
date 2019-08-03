// pages/cart/index.js
/*1 点击按钮 获取收货地址
  1 wx.chooseAddress -> 弹出对话框
    1 点击允许  直接获取值就ok
    2 点击取消 。。下次再点击 就没有任何效果  
  1 先获取用户对该小程序的授予权限的信息  getSetting
    1 已经授权了
      授权返回值 是true   直接调用收货地址 接口代码  
    2 没有授权
      1 用户从来没有点击过 按钮  授权返回值 undefined 
      2 用户点击了取消 按钮 ， 授权返回值 false 
  2 假设授权信息 是 true 或者  undefined
    1 直接调用获取收货地址的api 
  2 假设授权信息 是false （用户明确不授权）
    1 诱导用户 打开 授权页面( wx.openSetting)。等用户重新给与权限之后
    2 再调用获取收货地址 
 */
import regeneratorRuntime from '../../lib/runtime/runtime';
import {
  getSetting,
  openSetting,
  chooseAddress
} from "../../utils/asyncWx";
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 获取收货地址
  async handleChooseAddress() {
    // 1 获取授权信息
    var res1 = getSetting();
    const scopeAddress = res1.authSetting['scope.address'];
    // 2 对授权信息判断
    if (scopeAddress === true || scopeAddress === undefined) {
      // 2.1直接调用获取收货地址的api
      const res2 = await chooseAddress();
      console.log(res2);
    } else {
      // 2.2 诱导用户 打开授权页面
      await openSetting()
      // 2.3 获取收货地址
      const res3 = await chooseAddress();
      console.log(res3);
    }
    // wx.getSetting({
    //   success: (result1) => {
    //     // 获取到了授权信息
    //     console.log(result1);
    //     const scopeAddress = result1.authSetting['scope.address'];
    //     // 用户授权过  或者 用户 从来没有调用过收货地址  
    //     if (scopeAddress === true || scopeAddress === undefined) {
    //       // 1.1 调用收货地址
    //       wx.chooseAddress({
    //         success: (result2) => {
    //           console.log(result2);
    //         }
    //       });
    //     } else {
    //       // 2.1用户 点击 拒绝收货地址  诱导用户 打开授权页面 再调用获取收货地址
    //       wx.openSetting({
    //         success: (result) => {
    //           // 2.2 再去调用 获取收货地址
    //           wx.chooseAddress({
    //             success: (result3) => {
    //               console.log(result3);
    //             },
    //             fail: () => {},
    //             complete: () => {}
    //           });
    //         }
    //       });

    //     }
    //   },
    //   fail: () => {},
    //   complete: () => {}
    // });

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