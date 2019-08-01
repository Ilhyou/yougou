// pages/goods_detail/index.js

/* 
1 点击轮播图 调出 图片预览功能
  1 绑定点击事件  
 */
import {
  request
} from "../../request/index.js";
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsObj: {}
  },
  // 点击图片 进行大屏预览
  handlePreviewImage(e) {
    const {
      index
    } = e.currentTarget.dataset;
    const urls = this.data.goodsObj.pics.map(v => v.pics_big);
    const current = urls[index];
    wx.previewImage({
      current,
      urls
    });

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    let msg = "111-222-333-222";
    let newMsg = msg.replace('222', 'aaa');

    // let newMsg=msg.replace(/222/g,'aaa');
    console.log(newMsg);
    this.getGoodsDetail(options.goods_id);
  },
  // 获取商品的详情数据
  async getGoodsDetail(goods_id) {
    const res = await request({
      url: "/goods/detail",
      data: {
        goods_id
      }
    });
    this.setData({
      // 只存放要用到的数据
      goodsObj: {
        goods_name: res.goods_name,
        goods_price: res.goods_price,
        goods_introduce: res.goods_introduce.replace(/\.webp/g, '.jpg'),
        pics: res.pics
      }
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