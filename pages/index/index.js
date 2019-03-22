//index.js
Page({
  data: {
    topDistBeforeScroll: '',
    topDistAfterScroll: '',
  },
  onButtonClick() {
    // 该API或去元素相对于显示窗口的位置，top属性为距离显示窗口顶部的高度距离
    this.createSelectorQuery().select('#input3')
        .boundingClientRect()
        .exec((res) => {
          this.setData({ topDistBeforeScroll: res[0].top })
        })
  },
  onInput3Focus() {
    // 获取焦点后，延迟一秒后再获取元素位置，保证键盘完全弹起
    setTimeout(() => {
      this.createSelectorQuery().select('#input3')
          .boundingClientRect()
          .exec((res) => {
            this.setData({ topDistAfterScroll: res[0].top })
          })
    }, 1000)
  }
})
