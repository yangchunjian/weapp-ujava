function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
};

var index = require('../data/data_index.js')
var index_next = require('../data/data_index_next.js')
var burger = require('../data/data_burger.js')
var burger_next = require('../data/data_burger_next.js')
var detail = require('../data/data_detail.js')

function getData(url){
  return new Promise(function(resolve, reject){
    wx.request({
      url: url,
      data: {},
      header: {
        //'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log("success")
        resolve(res)
      },
      fail: function (res) {
        reject(res)
        console.log("failed")
      }
    })
  })
}

function getSearch(){
  return index.index;
}

function getNext(){
  return index_next.next;
}

function getBurger(){
  return burger.burger;
}

function burgerNext(){
  return burger_next.next;
}

function getDetail(){
  return detail.detail;
}



module.exports.getData = getData;
module.exports.getNext = getNext;
module.exports.getBurger = getBurger;
module.exports.burgerNext = burgerNext;
module.exports.getSearch = getSearch;
module.exports.getDetail = getDetail;




