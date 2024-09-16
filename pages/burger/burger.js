//burger.js
var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    navTab: ["快速上手", "设计思想", "设计模式", "项目介绍"],
    currentNavtab: "0",
    imgUrls: [
      '../../images/gzh-wz.png',
      '../../images/gzh.png',
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    feed: [],
    feed_length: 0,
    burgerId1_content: 1,
    burgerId2_content: 2,
    burgerId3_content: 3,
    burgerId4_content: 4
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    this.refresh();
  },
  switchTab: function(e){
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  },

  upper: function () {
    wx.showNavigationBarLoading()
    this.refresh();
    console.log("upper");
    setTimeout(function(){wx.hideNavigationBarLoading();wx.stopPullDownRefresh();}, 2000);
  },
  lower: function (e) {
    wx.showNavigationBarLoading();
    var that = this;
    setTimeout(function(){wx.hideNavigationBarLoading();that.nextLoad();}, 1000);
    console.log("lower")
  },

  //网络请求数据, 实现刷新
  refresh0: function(){
    var index_api = '';
    util.getData(index_api)
        .then(function(data){
          //this.setData({
          //
          //});
          console.log(data);
        });
  },

  //使用数据实现刷新效果
  refresh: function(){
    console.log("refresh")
    var feed = util.getBurger();
    var feed_data = feed.data;
    this.setData({
      burgerId1_content: app.towxml(feed_data[0].burger_content,'markdown'),
      burgerId2_content: app.towxml(feed_data[1].burger_content,'markdown'),
      burgerId3_content: app.towxml(feed_data[2].burger_content,'markdown'),
      burgerId4_content: app.towxml(feed_data[3].burger_content,'markdown'),
    });
  },

  //使用数据实现继续加载效果
  nextLoad: function(){
    var next = util.burgerNext();
    console.log("continueload");
    var next_data = next.data;
    this.setData({
      feed: this.data.feed.concat(next_data),
      feed_length: this.data.feed_length + next_data.length
    });
  }
});
