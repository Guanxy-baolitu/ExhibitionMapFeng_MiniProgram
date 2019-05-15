// 除default外别的都是走H5不加载的，只需要一个页多个楼层即可
const app = getApp();
import{Floor} from'./define.js';
var strFloor = "floor";
var strColor = "color";

function ReadJsonToGeoPage() {
  var strJSON = "{\"type\":\"FeatureCollection\",\"features\":[{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[116.35634064674377,39.76008563383252]},\"properties\":{\"floor\":\"1\",\"color\":\"#000\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[116.35659277439117,39.7594835585747]},\"properties\":{\"floor\":\"1\",\"color\":\"#000\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[116.35753154754639,39.76001140566055]},\"properties\":{\"floor\":\"1\",\"color\":\"#000\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[116.3579660654068,39.759611396912085]},\"properties\":{\"floor\":\"1\",\"color\":\"#000\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Polygon\",\"coordinates\":[[116.35569155216217,39.76013099545379],[116.35537505149841,39.75943819652697],[116.35567545890808,39.758951583590154],[116.35631382465363,39.75941345357927]]},\"properties\":{\"floor\":\"1\",\"color\":\"#000\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Polygon\",\"coordinates\":[[116.35759055614471,39.759574282580516],[116.35830402374268,39.759574282580516],[116.35830402374268,39.75886910648042],[116.35759055614471,39.75886910648042]]},\"properties\":{\"floor\":\"1\",\"color\":\"#000\"}}]}";//TODO: request
  // wx.request({
  //   url: 'http://tp5.me/api/v1/banner/' + id,
  //   method: 'GET',
  //   success: function (res) {
  //     console.log(res);
  //     return res;
  //   }
  // })
  if (strJSON != "") {
    var geoStorageObj = JSON.parse(strJSON); 
    if (geoStorageObj !== null)
      geoStorageObj.features.forEach(function (feature) {
        var currentFloor = feature.properties[strFloor];
        var currentColor = feature.properties[strColor];
        if (app.globalData.floors[currentFloor] == undefined)
          app.globalData.floors[currentFloor] = new Floor();
        if (feature.geometry.type == "Point") {
          app.globalData.floors[currentFloor].KeyPoints.push({
            latitude: feature.geometry.coordinates[1],
            longitude: feature.geometry.coordinates[0],
            fillColor: currentColor,
            radius:3,
            strokeWidth:4
          });
        }
        // else if (feature.geometry.type == "Polygon") {
        //   var newPolygon = new Polygon(currentColor);
        //   GeojsonPages[currentPageName].floors[currentFloor].MapCovers.push(newPolygon);
        //   feature.geometry.coordinates.forEach(function (geopnt) {
        //     doAddPolygonNewPos(geopnt[1], geopnt[0], newPolygon);
        //   });
        // }
      });
  }
  app.globalData.currentFloor = 1;
};

module.exports = {
  ReadJsonToGeoPage: ReadJsonToGeoPage
}