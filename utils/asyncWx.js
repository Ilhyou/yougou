/**
 * promise的 wx.getSetting
 */
export const getSetting = () => {
  return new Promise((reslove, reject) => {
    wx.getSetting({
      success: (result) => {
        reslove(result)
      },
      fail: (err) => {
        reject(err)
      }
    });
  })
}
/**
 * promise的 wx.chooseAddress
 */
export const chooseAddress = () => {
  return new Promise((reslove, reject) => {
    wx.chooseAddress({
      success: (result) => {
        reslove(result)
      },
      fail: (err) => {
        reject(err)
      }
    });
  })
}

/**
 * promise的 wx.openSetting
 */
export const openSetting = () => {
  return new Promise((reslove, reject) => {
    wx.openSetting({
      success: (result) => {
        reslove(result)
      },
      fail: (err) => {
        reject(err)
      }
    });
  })
}