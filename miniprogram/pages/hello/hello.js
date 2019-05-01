// pages/hello/hello.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
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

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },

    click: function (e) {
        // wx.openLocation({
        //     latitude: 39.758810,
        //     longitude: 116.356720,
        //     scale: 18,
        //     name: '北京大学软件与微电子学院',
        //     address:'北京市大兴区金苑路24号'
        // }),

        wx.openLocation({
            latitude: 39.979384,
            longitude: 116.310319,
            scale: 16, // 缩放级别
            name: "微软亚洲研究院",
            address: "中国北京市海淀区中关村丹棱街5号"
        })

    }
})