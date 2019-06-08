// 除default外别的都是走H5不加载的，只需要一个页多个楼层即可
const app = getApp();
import {
  Floor
} from './define.js';
var strFloor = "floor";
var strAct = "actId";
var strActName = "actName";
var strPage = "dtPage";
//专有
var strColor = "color";
var strRadius = "radius";
var strIcon = "icon";
var strGrav = "gravPnt";
var detailCallout = {
  content: "查看详情",
  fontSize: 14,
  color: "FFFFFFFF",
  bgColor: "#009968",
  borderWidth: 1,
  padding: 4,
  display: "ALWAYS",
  textAlign: "center"
};
var markerCallout = {
  content: "",
  fontSize: 14,
  bgColor: "#FFF",
  borderColor: "#009968",
  borderWidth: 1,
  padding: 4,
  display: "BYCLICK",
  // display: "ALWAYS",
  textAlign: "center"
};
var addMarkerFunction = function(currentFloor, id, lat, lng, icon, callout) {
  if (callout == null)
    app.globalData.floors[currentFloor].Markers.push({
      id: currentMarkerId,
      latitude: lat,
      longitude: lng,
      iconPath: icon,
      width: 40,
      height: 40
    });
  else
    app.globalData.floors[currentFloor].Markers.push({
      id: currentMarkerId,
      latitude: lat,
      longitude: lng,
      iconPath: icon,
      width: 40,
      height: 40,
      callout: callout
    });
  app.globalData.markerValue[currentMarkerId++] = id;
}
var currentMarkerId = 0;


function ReadJsonToGeoPage() {
  var strJSON = "{\"type\":\"FeatureCollection\",\"features\":[{\"type\":\"Feature\",\"geometry\":{\"type\":\"Polygon\",\"coordinates\":[[[120.20054161548615,30.162077845536697],[120.20248889923096,30.162541656075867],[120.20304679870605,30.160909033300904],[120.20299851894379,30.16083018435755],[120.20165205001831,30.160454491467345],[120.20053625106812,30.161521270009594],[120.20041286945343,30.1619340638265],[120.20046651363373,30.162008273767626],[120.20054161548615,30.162077845536697],[120.20054161548615,30.162077845536697],[120.20054161548615,30.162077845536697],[120.20054161548615,30.162077845536697],[120.20054161548615,30.162077845536697],[120.20054161548615,30.162077845536697]]]},\"properties\":{\"color\":\"#FF7F50\",\"gravPnt\":{\"lat\":30.161498073771604,\"lng\":120.20172983407974},\"floor\":\"1\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Marker\",\"coordinates\":[120.2027302980423,30.161324886667273]},\"properties\":{\"icon\":\"img/icons/icon5.png\",\"floor\":\"1\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Marker\",\"coordinates\":[120.20164668560028,30.16216902666705]},\"properties\":{\"icon\":\"img/icons/icon5.png\",\"floor\":\"1\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Marker\",\"coordinates\":[120.20298779010773,30.16091672843556]},\"properties\":{\"icon\":\"img/icons/icon5.png\",\"floor\":\"1\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Marker\",\"coordinates\":[120.20106732845306,30.161590842104605]},\"properties\":{\"icon\":\"img/icons/icon6.png\",\"floor\":\"1\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[120.20195782184601,30.162235541347137]},\"properties\":{\"color\":\"#FF7F50\",\"radius\":17.092970229750595,\"actId\":2,\"actName\":\"抽奖\",\"floor\":\"1\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"MultiLineString\",\"coordinates\":[[[120.2031272649765,30.161011073016358],[120.20241379737854,30.160867289750517],[120.20121216773987,30.16147488857386],[120.20257472991943,30.162495275120143],[120.20172715187073,30.162203074597304],[120.20173251628876,30.162198436486776]]]},\"properties\":{\"color\":\"#2691EA\",\"gravPnt\":{\"lat\":30.16168128243533,\"lng\":120.20216971635818},\"floor\":\"1\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Polygon\",\"coordinates\":[[[120.20228505134583,30.162448894142585],[120.20255327224731,30.162448894142585],[120.20255327224731,30.16216133159476],[120.20228505134583,30.16216133159476],[120.20228505134583,30.162448894142585],[120.20228505134583,30.162448894142585],[120.20228505134583,30.162448894142585],[120.20228505134583,30.162448894142585],[120.20228505134583,30.162448894142585],[120.20228505134583,30.162448894142585]]]},\"properties\":{\"color\":\"#DA70D5\",\"gravPnt\":{\"lat\":30.162305112868673,\"lng\":120.20241916179657},\"actId\":2,\"actName\":\"抽奖\",\"floor\":\"1\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Polygon\",\"coordinates\":[[[120.20205974578857,30.161057454670303],[120.20236551761627,30.161057454670303],[120.20236551761627,30.16066320991641],[120.20205974578857,30.16066320991641],[120.20205974578857,30.161057454670303],[120.20205974578857,30.161057454670303],[120.20205974578857,30.161057454670303],[120.20205974578857,30.161057454670303],[120.20205974578857,30.161057454670303],[120.20205974578857,30.161057454670303]]]},\"properties\":{\"color\":\"#DA70D5\",\"gravPnt\":{\"lat\":30.160860332293357,\"lng\":120.20221263170242},\"actId\":2,\"actName\":\"抽奖\",\"floor\":\"1\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[120.20207583904266,30.16171143366805]},\"properties\":{\"color\":\"#DA70D5\",\"radius\":25.556290990970417,\"dtPage\":\"圆形内\",\"floor\":\"1\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"MultiLineString\",\"coordinates\":[[[120.20121216773987,30.161256895533576],[120.2024245262146,30.161813472553074],[120.20288586616516,30.161725348067673],[120.20288586616516,30.161725348067673]]]},\"properties\":{\"color\":\"#2691EA\",\"gravPnt\":{\"lat\":30.161535184043323,\"lng\":120.20204901695251},\"floor\":\"1\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Point\",\"coordinates\":[120.20204365253448,30.16201755000634]},\"properties\":{\"color\":\"#FF7F50\",\"radius\":46.99588951504213,\"floor\":\"2\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Polygon\",\"coordinates\":[[[120.2027302980423,30.16237932263534],[120.20391583442688,30.16237932263534],[120.20391583442688,30.16171143366805],[120.2027302980423,30.16171143366805],[120.2027302980423,30.16237932263534]]]},\"properties\":{\"color\":\"#FF7F50\",\"gravPnt\":{\"lat\":30.162045378151696,\"lng\":120.20332306623459},\"floor\":\"2\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Polygon\",\"coordinates\":[[[120.2004075050354,30.161818110681693],[120.19938826560974,30.160973967677513],[120.20130336284637,30.160714229914543],[120.2004075050354,30.161818110681693]]]},\"properties\":{\"color\":\"#FF7F50\",\"gravPnt\":{\"lat\":30.16126617029812,\"lng\":120.20034581422806},\"floor\":\"4\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Polygon\",\"coordinates\":[[[120.2000641822815,30.162537017981265],[120.20113170146942,30.162537017981265],[120.20113170146942,30.161781005646578],[120.2000641822815,30.161781005646578],[120.2000641822815,30.162537017981265]]]},\"properties\":{\"color\":\"#FF7F50\",\"gravPnt\":{\"lat\":30.16215901181392,\"lng\":120.20059794187546},\"floor\":\"5\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Polygon\",\"coordinates\":[[[120.20070254802704,30.16266688454736],[120.20219922065735,30.16266688454736],[120.20219922065735,30.162003635647938],[120.20070254802704,30.162003635647938],[120.20070254802704,30.16266688454736]]]},\"properties\":{\"color\":\"#FF7F50\",\"gravPnt\":{\"lat\":30.16233526009765,\"lng\":120.2014508843422},\"floor\":\"6\"}},{\"type\":\"Feature\",\"geometry\":{\"type\":\"Polygon\",\"coordinates\":[[[120.20084202289581,30.162722541594754],[120.20238161087036,30.162722541594754],[120.20238161087036,30.161929425703352],[120.20084202289581,30.161929425703352],[120.20084202289581,30.162722541594754]]]},\"properties\":{\"color\":\"#FF7F50\",\"gravPnt\":{\"lat\":30.162325983649055,\"lng\":120.20161181688309},\"floor\":\"7\"}}],\"bounds\":[{\"lat\":30.162722541594754,\"lng\":120.20391583442688},{\"lat\":30.160454491467345,\"lng\":120.19938826560974}],\"initialPnt\":{\"lat\":30.161588516531047,\"lng\":120.20165205001831}}"; //TODO: request
  if (strJSON != "") {
    var geoStorageObj = JSON.parse(strJSON);
    if (geoStorageObj !== null)
      geoStorageObj.features.forEach(function(feature) {
        var currentFloor = feature.properties[strFloor].toString();
        var hasPage = feature.properties[strPage];
        if (app.globalData.floors[currentFloor] == undefined)
          app.globalData.floors[currentFloor] = new Floor();
        if (feature.geometry.type == "Point") { ////////实际是圆,必画
          app.globalData.floors[currentFloor].Circles.push({
            latitude: feature.geometry.coordinates[1],
            longitude: feature.geometry.coordinates[0],
            color: feature.properties[strColor],
            fillColor: feature.properties[strColor] + "4c",
            radius: feature.properties[strRadius],
            strokeWidth: 1
          });
        } else if (feature.geometry.type == "Polygon" || feature.geometry.type == "MultiLineString") { /////必画
          var points = [];
          feature.geometry.coordinates[0].forEach(function(geopnt) {
            points.push({
              latitude: geopnt[1],
              longitude: geopnt[0]
            });
          });
          if (feature.geometry.type == "Polygon")
            app.globalData.floors[currentFloor].Polygons.push({
              points: points,
              strokeWidth: 1,
              strokeColor: feature.properties[strColor],
              fillColor: feature.properties[strColor] + "4c"
            });
          else
            app.globalData.floors[currentFloor].Polylines.push({
              points: points,
              arrowLine: true,
              color: feature.properties[strColor],
              width: 2
            });
        }
        // var addMarkerFunction = function (currentFloor, id, lat, lng, icon, callout)
        markerCallout.content = feature.properties[strActName];
        if (feature.properties[strPage] != undefined) { // 优先级：详情页高于所有
          addMarkerFunction(currentFloor, feature.properties[strPage], feature.geometry.coordinates[1], feature.geometry.coordinates[0], '../../images/DotWithPage.png', copyobj(detailCallout));
        } else if (feature.properties[strAct] != undefined && feature.geometry.type == "Circle") { //圆上的额外Marker表示活动
          addMarkerFunction(currentFloor, feature.properties[strAct], feature.geometry.coordinates[1], feature.geometry.coordinates[0], '../../images/DotOnly.png', copyobj(markerCallout));
        } else if (feature.properties[strAct] != undefined && feature.geometry.type == "Polygon") { //多边形上的额外Marker表示活动
          addMarkerFunction(currentFloor, feature.properties[strAct], feature.properties[strGrav].lat, feature.properties[strGrav].lng, '../../images/DotOnly.png', copyobj(markerCallout));
        } else if (feature.properties[strAct] != undefined && feature.geometry.type == "Marker") { //Marker表示活动
          addMarkerFunction(currentFloor, feature.properties[strAct], feature.geometry.coordinates[1], feature.geometry.coordinates[0], '../../images' + feature.properties[strIcon].substring(3), copyobj(markerCallout));
        } else if (feature.geometry.type == "Marker") {
          addMarkerFunction(currentFloor, -1, feature.geometry.coordinates[1], feature.geometry.coordinates[0], '../../images' + feature.properties[strIcon].substring(3), null);
        }
      });
  }
  app.globalData.currentFloor = '1';
  // 注：marker若为[]，地图渲染bug，所以这里添加占位符
  addMarkerFunction('1', -1, geoStorageObj.initialPnt.lat, geoStorageObj.initialPnt.lng, '../../images/null.png', null);
};

function copyobj(a) {
  var c = {};
  c = JSON.parse(JSON.stringify(a));
  return c;
}
module.exports = {
  ReadJsonToGeoPage: ReadJsonToGeoPage
}