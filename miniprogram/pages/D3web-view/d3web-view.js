const app = getApp()

Page({
  data: {
    url: 'https://test.com'
  },
  onLoad: function (options) {
    options.url ? this.setData({ url: options.url }) : wx.navigateBack({ delta: 2 });

  }
});
