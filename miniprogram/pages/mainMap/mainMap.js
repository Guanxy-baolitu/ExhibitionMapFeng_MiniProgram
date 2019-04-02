Page({
  data: {
    searchValue: '',
    wxSearchData: {
      configconfig: {
        style: "wxSearchNormal"
      },
      view: {
        hidden: true
      },
      hotKeys: [], //自定义热门搜索
      his: [] //历史搜索关键字
    }
  },

  // 搜索页面跳回
  onLoad: function (options) {
    if (options && options.searchValue) {
      this.setData({
        searchValue: "搜索：" + options.searchValue
      });
    }
  },

  // 搜索入口  
  wxSearchTab: function () {
    wx.navigateTo({
      url: '../search/search'
    })
  }
})