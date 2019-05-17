// 除default外别的都是走H5不加载的，只需要一个页多个楼层即可
const app = getApp();
import{Floor} from'./define.js';
var strFloor = "floor";
var strColor = "color";

function ReadJsonToGeoPage() {
  var strJSON = "{\"type\":\"FeatureCollection\",\"features\":[{\"type\":\"Feature\",\"geometry\":{\"type\":\"Polygon\",\"coordinates\":[[116.35587930679321,39.758867085704416],[116.35714530944824,39.758867085704416],[116.35714530944824,39.758339229847714],[116.35587930679321,39.758339229847714]]},\"properties\":{\"floor\":\"1\",\"color\":\"#000\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[116.35562181472778,39.75889182884844]},\"properties\":{\"floor\":\"2\",\"color\":\"#000\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[116.35664105415344,39.75847944195424]},\"properties\":{\"floor\":\"2\",\"color\":\"#000\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[116.35705947875977,39.758867085704416]},\"properties\":{\"floor\":\"2\",\"color\":\"#000\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[116.35757446289062,39.75858666278429]},\"properties\":{\"floor\":\"2\",\"color\":\"#000\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Polygon\",\"coordinates\":[[116.35540723800659,39.758405212051066],[116.35649085044861,39.75888358113475],[116.35732769966125,39.75847119419119],[116.35616898536682,39.75820726525139]]},\"properties\":{\"floor\":\"3\",\"color\":\"#000\"}}]}";//TODO: request
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
        var currentFloor = feature.properties[strFloor].toString();
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
        else if (feature.geometry.type == "Polygon") {
          var points = [];
          feature.geometry.coordinates.forEach(function (geopnt) {
            points.push({
              longitude: geopnt[0],
              latitude: geopnt[1]
            });
          });
          app.globalData.floors[currentFloor].Polygons.push({
            points: points,
            strokeWidth: 4,
            fillColor: currentColor
          });
          console.log(app.globalData.floors[currentFloor].Polygons);
        }
      });
  }
  app.globalData.currentFloor = 1;
};

module.exports = {
  ReadJsonToGeoPage: ReadJsonToGeoPage
}