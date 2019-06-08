//index.js
const app = getApp()
var ActListViewJS = require("../../views/activityListView/activityListView.js")
Page({
  data: {
    activityList: [
      {
        name: "活动一",
        startTime: (new Date()).toString(),
        endTime: (new Date()).toString(),
        location: "体育场C座"
      },
      {
        name: "活动二",
        startTime: (new Date()).toString(),
        endTime: (new Date()).toString(),
        location: "体育场C座"
      },
      {
        name: "活动三",
        startTime: (new Date()).toString(),
        endTime: (new Date()).toString(),
        location: "体育场C座"
      },
      {
        name: "活动四",
        startTime: (new Date()).toString(),
        endTime: (new Date()).toString(),
        location: "体育场C座"
      }

    ]
  },
  onLoad: function (options) {
    var that = this;
    ActListViewJS.init(that);
  },
  // 搜索入口  
  wxSearchTab: function () {
    wx.navigateTo({
      url: '../search/search'
    })
  }
})
