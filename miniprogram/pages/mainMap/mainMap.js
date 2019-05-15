var ReadJsonJS = require("../../js/readFromJSON.js");
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
      iconPath: '../../images/map-marker-alt.png',
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
      iconPath: '../../images/地图 (1).png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },

  // 搜索页面跳回
  onLoad: function (options) {
    var geoPage = ReadJsonJS.ReadJsonToGeoPage();
    this.setData(
      {
        circles: app.globalData.floors[app.globalData.currentFloor].KeyPoints,
        polygons: app.globalData.floors[app.globalData.currentFloor].Polygons
      });
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
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    wx.navigateTo({
      url: '../D3web-view/d3web-view',
    })
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  }
})