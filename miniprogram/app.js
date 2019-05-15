//app.js
App({
  globalData: {
    currentFloor : 1,
    floors : {},
    userInfo: null,
    sysInfo: null,
    windowW: null,
    windowH: null
  },
  onLaunch: function () {
    this.globalData = {}
    this.globalData.floors = {};
  }
})
