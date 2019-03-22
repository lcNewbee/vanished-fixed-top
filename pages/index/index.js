//index.js
Page({
  data: {
    topDistBeforeScroll: '',
    topDistAfterScroll: '',
  },
  onButtonClick() {
    this.createSelectorQuery().select('#input3')
        .boundingClientRect()
        .exec((res) => {
          this.setData({ topDistBeforeScroll: res[0].top })
        })
  },
  onInput3Focus() {
    setTimeout(() => {
      this.createSelectorQuery().select('#input3')
          .boundingClientRect()
          .exec((res) => {
            this.setData({ topDistAfterScroll: res[0].top })
          })
    }, 1000)
  }
})
