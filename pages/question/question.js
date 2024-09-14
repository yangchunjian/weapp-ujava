//answer.js
var util = require('../../utils/util.js')

var app = getApp()
Page({
  data: {
    motto: 'UJava--微信小程序版',
    userInfo: {}
  },
  //事件处理函数
  onLoad: function (e) {
    console.log('onLoad='+e)
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  tapName: function(event){
    console.log(event)
  }
})
