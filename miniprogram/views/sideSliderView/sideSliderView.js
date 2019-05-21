var _that = null;
var categories = {};
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
  });
  requestCategories();
}

function requestCategories(){
  categories['地点']=[];
  categories['地点'].push({value:'3号楼', selected :false});
  categories['地点'].push({ value: '百讲', selected: false });
  categories['地点'].push({ value: '体育馆', selected: false });
  categories['地点'].push({ value: '操场', selected: false });
  categories['地点'].push({ value: '二教', selected: false });
  categories['地点'].push({ value: '新太阳', selected: false });
  categories['时间'] = [];
  categories['时间'].push({ value: '05.16', selected: false });
  categories['时间'].push({ value: '05.17', selected: false });
  categories['内容'] = [];
  categories['内容'].push({ value: '有表演', selected: false });
  categories['内容'].push({ value: '无表演', selected: false });
  // wx.request
  _that.setData({categoryList: categories});
}

// 点击左上角小图标事件
function tap_ch() {
  if (_that.data.open) {
    _that.setData({
      open: false});
  } else {
    _that.setData({
      open: true});
  }
}

function selectFromCat(event){
  var key = event.target.dataset.key;
  var value = event.target.dataset.value;
  categories[key].forEach(function (item) {
    if(item.value===value){
      item.selected = (item.selected==true)?false:true;
    }
    console.log(item);
  });
  _that.setData({ categoryList: categories });
  // console.log(key);
  // console.log(value);
}

function close(){
  _that.setData({
    open: false
  });
}

module.exports = {
  init: init,
  tap_ch: tap_ch,
  selectFromCat: selectFromCat,
  close: close
}