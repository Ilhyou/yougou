export const request = (params) => {
  // 统一的接口的前缀
  const baseUrl = "https://api.zbztb.cn/api/public/v1";
  return new Promise((reslove, reject) => {
    var reqTask = wx.request({
      ...params,
      url: baseUrl + params.url,
      success: (result) => {
        reslove(result.data.message)
      },
      fail: () => {}
    });

  })
}