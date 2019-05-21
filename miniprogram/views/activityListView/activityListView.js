var timeJS = require("../../js/util_time.js");
var __that = null;
var mockList = [
  {
    name: "活动一",
    time: timeJS.formatDate(new Date(), "MM.dd hh:mm~") + timeJS.formatDate(new Date(), "MM.dd hh:mm"),
    location: "体育场C座"
  },
  {
    name: "活动二",
    time: timeJS.formatDate(new Date(), "MM.dd hh:mm~") + timeJS.formatDate(new Date(), "MM.dd hh:mm"),
    location: "体育场C座"
  },
  {
    name: "活动三",
    time: timeJS.formatDate(new Date(), "MM.dd hh:mm~") + timeJS.formatDate(new Date(), "MM.dd hh:mm"),
    location: "体育场C座"
  },
  {
    name: "活动四",
    time: timeJS.formatDate(new Date(), "MM.dd hh:mm~") + timeJS.formatDate(new Date(), "MM.dd hh:mm"),
    location: "体育场C座"
  }
]

function init(that)
{
  __that = that;
  __that.setData({
    activityList: []
  })
  requestActivityList();
}

function requestActivityList()
{
  __that.setData({
    activityList: mockList
  });
}

module.exports = {
  init:init,
  requestActivityList: requestActivityList
}