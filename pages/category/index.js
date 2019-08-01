import {
  request
} from "../../request/index.js";
/* 
1 页面的初次动态渲染
2 点击左侧菜单 菜单切换选中 同时 右侧的商品内容 切换显示 
  1 绑定点击事件
  2 左侧菜单的激活 在data中的 currentIndex
  3 右侧商品内容 跟着改变
3 切商品内容的时候 需要让右侧的容器的滚动条重新回到顶部吧
  设置滚动条的距离！！！
  1 以前的dom 可以直接操作 滚动条的属性 dom.scrollTop=0 
  2 scroll-view标签的 scrollTop 属性
  3 右侧内容切换的时候 再手动给它赋值即可 
 */
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
    currentIndex: 0,
    // 右侧滚动条的距离
    scrollTop:0
  },
  // 接口的返回值
  // 如果 这些数据不需要在页面中渲染，那么就没有必要放到data中
  // 因为 小程序中会对data的数据 进行传输 传输到视图层也就是 wxml中 
  Cates:[],

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
      // 给全局参数 赋值
      this.Cates=res;
      // let leftMenuList = res.map((v, i) => {
      //   return {
      //     cat_name: v.cat_name,
      //     cat_id: v.cat_id
      //   }
      // });
      let leftMenuList = this.Cates.map((v, i) => ({
        cat_name: v.cat_name,
        cat_id: v.cat_id
      }));
      // 这个是大家电对象 里面的children 数组
      let rightGoodsList = this.Cates[0].children;
      this.setData({
        leftMenuList,
        rightGoodsList

      })
    })
  },
  // 左侧菜单的点击事件
  handLeftMenu(e) {
    console.log(e);
    let {
      index
    } = e.currentTarget.dataset;
    // 实现菜单的激活选中
    let rightGoodsList =  this.Cates[index].children;
    this.setData({
      currentIndex: index,
      rightGoodsList,
      scrollTop:0
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