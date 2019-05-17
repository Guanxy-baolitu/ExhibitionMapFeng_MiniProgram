var SideViewJS = require("../../views/sideSliderView/sideSliderView.js")
const app = getApp();
var _that = null;
function init(that) {
  _that = that;
  _that.setData({
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
      id: 0,
      iconPath: '../../images/Floors1.png',
      position: {
        left: 5,
        top: 200 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    },
    {
      id: 1,
      iconPath: '../../images/Filter.png',
      position: {
        left: 5,
        top: 15,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  })
}
function reFreshTheQQMap () {
  _that.setData({
    circles: app.globalData.floors[app.globalData.currentFloor].KeyPoints,
    polygons: app.globalData.floors[app.globalData.currentFloor].Polygons
  });
}
function markertap(e) {
  wx.navigateTo({
    url: '../D3web-view/d3web-view',
  })
  console.log(e.markerId)
}
function controltap(e) {
  var _this = this;
  switch (e.controlId) {
    case 0: {
      wx.showActionSheet({
        itemList: Object.keys(app.globalData.floors),
        success(res) {
          app.globalData.currentFloor = Object.keys(app.globalData.floors)[res.tapIndex];
          console.log(app.globalData.currentFloor);
          _this.reFreshTheQQMap();
        }
      })
      break;
    }
    case 1: {
      SideViewJS.tap_ch();
      break;
    }
  }
}
module.exports = {
  init: init,
  reFreshTheQQMap: reFreshTheQQMap,
  markertap: markertap,
  controltap: controltap
}