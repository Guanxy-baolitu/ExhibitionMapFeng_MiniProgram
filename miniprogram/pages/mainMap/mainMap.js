var ReadJsonJS = require("../../js/readFromJSON.js");
var QQMapViewJS = require("../../views/qqMapView/qqMapView.js")
var ActListViewJS = require("../../views/activityListView/activityListView.js")
var SideViewJS = require("../../views/sideSliderView/sideSliderView.js")
const app = getApp();
Page({
  data: {searchPage : false},
  // 搜索页面跳回
  onLoad: function (options) {
    var that = this;
    QQMapViewJS.init(that);
    ReadJsonJS.ReadJsonToGeoPage();
    QQMapViewJS.reFreshTheQQMap();
    ActListViewJS.init(that);
    SideViewJS.init(that);
    
  },
  // 搜索入口  
  wxSearchTab: function () {
    wx.navigateTo({
      url: '../search/search'
    })
  },
  tapCat(event) { SideViewJS.selectFromCat(event);},
  black_cover_tap(){SideViewJS.close();},
  reFreshTheQQMap: function () {QQMapViewJS.reFreshTheQQMap();},
  controltap(e) { QQMapViewJS.controltap(e);},
  markertap(e) { QQMapViewJS.markertap(e);}
})