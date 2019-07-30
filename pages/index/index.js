	// 1 引入自己写异步请求的方法 promise
	// 2 在微信小程序中引入 js文件的时候 建议 一定要把路径补充完整
	import {
	  request
	} from "../../request/index.js";
	Page({

	  /**
	   * 页面的初始数据
	   */
	  data: {
	    // 轮播图数据
	    swiperList: [],
	    // 2 分类导航数组
	    navCateList: [],
	    // 3 楼层数组
	    floorList: []

	  },

	  /**
	   * 生命周期函数--监听页面加载
	   */
	  onLoad: function (options) {
	    this.getSwiperList();
	    this.getNavCateList();
	    this.getFloorList();
	  },
	  // 获取轮播图数据
	  getSwiperList() {

	    // wx.request({
	    //   url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
	    //   success: (result) => {
	    //     console.log(result);
	    //     this.setData({
	    //       swiperList: result
	    //     })
	    //   }
	    // });

	    request({
	      url: '/home/swiperdata'
	    }).then(res => {
	      this.setData({
	        swiperList: res
	      })
	    })
	  },
	  // 获取导航数据
	  getNavCateList() {
	    // wx.request({
	    //   url: 'https://api.zbztb.cn/api/public/v1/home/catitems',
	    //   success: (result) => {
	    //     this.setData({
	    //       navCateList: result.data.message
	    //     })
	    //   }
	    // });
	    request({
	        url: '/home/catitems'
	      })
	      .then(res => {
	        this.setData({
	          navCateList: res
	        })
	      })

	  },
	  // 获取 楼层数据
	  getFloorList() {
	    // wx.request({
	    //   url: 'https://api.zbztb.cn/api/public/v1/home/floordata',
	    //   success: (result) => {
	    //     this.setData({
	    //       floorList: result.data.message
	    //     })
	    //   }
	    // });

	    request({
	        url: '/home/floordata'
	      })
	      .then(res => {
	        this.setData({
	          floorList: res
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