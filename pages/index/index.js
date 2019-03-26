//index.js
Page({
  data: {
    isInput3Focus: false
  },
  onInputTap(e) {
    const id = e.target.id
    Promise.all([
      this.calcElemPosById(id),
      this.calcViewportPos(),
      this.calcViewportHeight()
    ]).then(([
      inputRectPos,
      pageScrollTop,
      viewportHeight
    ]) => {
      // 假设键盘不超过视口高度的一半，则当输入框在页面上半部分，不滚动
      if (inputRectPos.bottom < viewportHeight / 2) {
        this.setData({ isInput3Focus: true })
        return
      }
      // 滚动位置 = 输入框距离视口顶部距离 + 页面已经滚动的距离 - 顶部栏的高度 - 滚动后输入框和顶部栏的距离
      const scrollTop = inputRectPos.top + Math.abs(pageScrollTop) - 66 - 20
      wx.pageScrollTo({
        scrollTop,
        duration: 300,
        complete: () => {
          this.setData({ isInput3Focus: true })
        }
      })
    })
  },
  onInputBlur(e) {
    // 失去焦点后要保证输入框是禁用状态
    this.setData({ isInput3Focus: false })
  },
  // 计算输入框位置
  calcElemPosById(id) {
    return new Promise((resolve, reject) => {
      wx.createSelectorQuery()
        .select(`#${id}`)
        .boundingClientRect((rect) => {
          resolve(rect)
        }).exec()
    })
  },
  // 计算页面滚动位置
  calcViewportPos() {
    return new Promise((resolve, reject) => {
      wx.createSelectorQuery()
        .selectViewport()
        .scrollOffset((res) => {
          resolve(res.scrollTop)
        }).exec()
    })
  },
  calcViewportHeight() {
    return new Promise((resolve, reject) => {
      wx.createSelectorQuery()
        .selectViewport()
        .boundingClientRect((rect) => {
          resolve(rect.height)
        }).exec()
    })
  }
})
