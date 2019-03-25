//index.js
Page({
  data: {
    isInput3Focus: false
  },
  onInputTap(e) {
    wx.pageScrollTo({
      scrollTop: 600,
      duration: 300,
      complete: () => {
        this.setData({ isInput3Focus: true })
      }
    })
  },
  onInputBlur(e) {
    // 失去焦点后要保证输入框是禁用状态
    this.setData({ isInput3Focus: false })
  }
})
