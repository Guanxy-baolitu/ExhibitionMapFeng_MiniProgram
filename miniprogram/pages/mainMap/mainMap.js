// TODO: 合这几个文件夹以及D3View
var ReadJsonJS = require("../../js/readFromJSON.js");
var QQMapViewJS = require("../../views/qqMapView/qqMapView.js")
var SideViewJS = require("../../views/sideSliderView/sideSliderView.js")
const app = getApp();
Page({
  data: { searchPage: false, mapOn:false},
  // 搜索页面跳回
  onLoad: function (options) {
    var that = this;
    QQMapViewJS.init(that);
    ReadJsonJS.ReadJsonToGeoPage();
    SideViewJS.init(that);
    QQMapViewJS.reFreshTheQQMap();
  },
  tapCat(event) { SideViewJS.selectFromCat(event);},
  black_cover_tap(){SideViewJS.close();},
  reFreshTheQQMap: function () {QQMapViewJS.reFreshTheQQMap();},
  controltap(e) { QQMapViewJS.controltap(e);},
  markertap(e) { QQMapViewJS.markertap(e);}
})