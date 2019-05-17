var ReadJsonJS = require("../../js/readFromJSON.js");
var timeJS = require("../../js/util_time.js");
const app = getApp();
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
    },
    markers: [{
      iconPath: '../../images/DetailPage.png',
      latitude: 39.75861437,
      longitude: 116.3558386,
      width: 50,
      height: 50
    }],
    circles: [],
    polyline: [],
    polygons: [],
    controls: [{
      id: 1,
      iconPath: '../../images/Floors1.png',
      position: {
        left: 5,
        top: 200 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }],
    activityList: [
      {
        name: "活动一",
        time: timeJS.formatDate(new Date(), "MM.dd hh:mm~") + timeJS.formatDate(new Date(), "MM.dd hh:mm"),
        location: "体育场C座"
      },
      {
        name: "活动二",
        time: timeJS.formatDate(new Date(), "MM.dd hh:mm~") + timeJS.formatDate(new Date(), "MM.dd hh:mm"),
        location: "体育场C座"
      },
      {
        name: "活动三",
        time: timeJS.formatDate(new Date(), "MM.dd hh:mm~") + timeJS.formatDate(new Date(), "MM.dd hh:mm"),
        location: "体育场C座"
      },
      {
        name: "活动四",
        time: timeJS.formatDate(new Date(), "MM.dd hh:mm~") + timeJS.formatDate(new Date(), "MM.dd hh:mm"),
        location: "体育场C座"
      }

    ]
  },

  reFreshTheQQMap : function () {
    this.setData({
      circles: app.globalData.floors[app.globalData.currentFloor].KeyPoints,
      polygons: app.globalData.floors[app.globalData.currentFloor].Polygons
    });
    console.log(this.data);
  },
  // 搜索页面跳回
  onLoad: function (options) {
    var geoPage = ReadJsonJS.ReadJsonToGeoPage();
    this.reFreshTheQQMap();
    if (options && options.searchValue) {
      this.setData({
        searchValue: "搜索：" + options.searchValue
      });
    };
  },
  controltap(e) {
    var _this = this;
    wx.showActionSheet({
      itemList: Object.keys(app.globalData.floors),
      success(res) {
        app.globalData.currentFloor = Object.keys(app.globalData.floors)[res.tapIndex];
        console.log(app.globalData.currentFloor);
        _this.reFreshTheQQMap();
      }})
  },
  markertap(e) {
    wx.navigateTo({
      url: '../D3web-view/d3web-view',
    })
    console.log(e.markerId)
  },
  // 搜索入口  
  wxSearchTab: function () {
    wx.navigateTo({
      url: '../search/search'
    })
  }
})