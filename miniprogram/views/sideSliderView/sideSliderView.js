var _that = null;
function init(that)
{
  _that = that;
  _that.setData({
    open: false,
    // mark 是指原点x轴坐标
    mark: 0,
    // newmark 是指移动的最新点的x轴坐标 
    newmark: 0,
    istoright: true,
  })
}
// 点击左上角小图标事件
function tap_ch() {
  if (_that.data.open) {
    _that.setData({
      open: false
    });
  } else {
    _that.setData({
      open: true
    });
  }
}

function close(){
  _that.setData({
    open: false
  });
}

module.exports = {
  init: init,
  tap_ch: tap_ch,
  close: close
}