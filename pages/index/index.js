//index.js

var util = require('../../utils/util.js')
var app = getApp()
Page({
    data: {
        // 搜索框值
        inputVal: "",
        feed: [],
        feed_length: 0
    },
    //事件处理函数
    bindQueTap: function (e) {
        var b =e;
        console.log("b =" +b);
        var id = e.currentTarget.dataset.id
        wx.navigateTo({
            url: '../question/question?id='+id
        })
    },
    onLoad: function () {
        console.log('onLoad')
        var that = this
        //调用应用实例的方法获取全局数据
        this.getData();
    },
    upper: function () {
        
        wx.showNavigationBarLoading()
        this.refresh();
        console.log("upper");
        setTimeout(function () {
            wx.hideNavigationBarLoading();
            wx.stopPullDownRefresh();
        }, 2000);
    },
    search: function () {
        wx.showNavigationBarLoading()
        this.reSearch();
        console.log("search");
        setTimeout(function () {
            wx.hideNavigationBarLoading();
            wx.stopPullDownRefresh();
        }, 2000);
    },
    lower: function () {
        wx.showNavigationBarLoading();
        var that = this;
        setTimeout(function () {
            wx.hideNavigationBarLoading();
            that.nextLoad();
        }, 1000);
        console.log("lower")
    },
    // 清除搜索框值
    clearInput: function () {
        this.setData({
            inputVal: ""
        });
    },
    // 键盘抬起事件
    inputTyping: function (e) {
        var val = e.detail.value;
        this.inputVal =  val;
        if (val == '') {
            return;
        }

        var feed = util.getSearch();
        console.log("loaddata");
        var feed_data = feed.data.filter(data => data.question.toLowerCase().indexOf(val.toLowerCase()) >= 0 || data.digest.toLowerCase().indexOf(val.toLowerCase()) >= 0);
        this.setData({
            feed: feed_data,
            feed_length: feed_data.length
        });
    },

    //网络请求数据, 实现首页刷新
    refresh0: function () {
        var index_api = '';
        util.getData(index_api)
            .then(function (data) {
                //this.setData({
                //
                //});
                console.log(data);
            });
    },

    //使用数据实现刷新效果
    getData: function () {
        var feed = util.getSearch();
        console.log("loaddata");
        var feed_data = feed.data;
        this.setData({
            feed: feed_data,
            feed_length: feed_data.length
        });
    },
    refresh: function () {
        wx.showToast({
            title: '刷新中',
            icon: 'loading',
            duration: 1000
        });
        var val = this.inputVal;
        var feed = util.getSearch();
        var feed_data = feed.data;
        if(undefined != val && "" != val){
            feed_data = feed.data.filter(data => data.question.toLowerCase().indexOf(val.toLowerCase()) >= 0 || data.digest.toLowerCase().indexOf(val.toLowerCase()) >= 0);
        }
        console.log("refresh");
        var feed_data = feed_data;
        this.setData({
            feed: feed_data,
            feed_length: feed_data.length
        });
        setTimeout(function () {
            wx.showToast({
                title: '刷新成功',
                icon: 'success',
                duration: 1000
            })
        }, 3000)

    },
    reSearch: function () {
        wx.showToast({
            title: '搜索中',
            icon: 'loading',
            duration: 3000
        });
        var feed = util.getSearch();
        console.log("reSearch");
        var feed_data = feed.data;
        this.setData({
            feed: feed_data,
            feed_length: feed_data.length
        });
        setTimeout(function () {
            wx.showToast({
                title: '搜索完成',
                icon: 'success',
                duration: 2000
            })
        }, 3000)

    },

    //使用数据实现继续加载效果
    nextLoad: function () {
        wx.showToast({
            title: '加载中',
            icon: 'loading',
            duration: 4000
        })
        var next = util.getNext();
        console.log("continueload");
        var next_data = next.data;
        this.setData({
            feed: this.data.feed.concat(next_data),
            feed_length: this.data.feed_length + next_data.length
        });
        setTimeout(function () {
            wx.showToast({
                title: '加载成功',
                icon: 'success',
                duration: 2000
            })
        }, 3000)
    }


})
