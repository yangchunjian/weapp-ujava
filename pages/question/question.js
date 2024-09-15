//answer.js
var util = require('../../utils/util.js')
const {getData} = require("../../utils/util");

var app = getApp()
Page({
  data: {
    motto: 'UJava--微信小程序版',
    userInfo: {},
    id : "",
    title: "",
    detail: "",
  },
  //事件处理函数
  onLoad: function (e) {

    console.log('onLoad='+e)
    console.log('onLoad id='+e.id)
    this.getDetail(e.id)
  },

  //使用数据实现刷新效果
  getDetail: function (input) {
    var feed = util.getDetail();
    var feed_data = feed.data.filter(data => data.question_id == input);
    if(feed_data.length<1){
      console.log("result num < 1 is "+ feed_data.length)
      return
    }
    console.log("getData");
    this.setData({
      title: feed_data[0].title,
      detail: feed_data[0].detail
    });
  },


})
