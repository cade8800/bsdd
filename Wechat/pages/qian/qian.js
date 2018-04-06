// qian.js
var fileData = require('../../utils/util.js')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        qian: {}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var db = fileData.db();
        var qianList = db.QianWen;
        var id = options.id;
        var targetList = qianList.filter(function(item) {
            return item.QianHao == id
        });
        if (targetList.length >= 1) {
            this.setData({
                qian: targetList[0]
            });
        }
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})