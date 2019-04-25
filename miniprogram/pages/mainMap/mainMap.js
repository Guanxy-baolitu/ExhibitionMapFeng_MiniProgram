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
      id: 0,
      latitude: 39.75861437,
      longitude: 116.3558386,
      width: 50,
      height: 50
    }],
    polyline: [{
      points: [{
        longitude: 116.356666,
        latitude: 39.7592
      }, {
          longitude: 116.3558386,
        latitude: 39.75861437
      }],
      color: '#FFFFFF',
      width: 2,
      dottedLine: true
    }],
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