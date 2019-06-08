//app.js
App({
  globalData: {
    currentFloor: 1,
    floors: {},
    pageNames: {},
    showRoute: true,
    markerValue: {}
  },
  onLaunch: function() {
    this.globalData = {}
    this.globalData.floors = {};
    this.globalData.markerValue = {};
    this.globalData.showRoute = true;
  }
})