"use strict";

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// d_06_promise_polyfill.js
// require("@babel/polyfill");
// import "@babel/polyfill";
var _require = require("core-js/fn/promise"),
    resolve = _require.resolve;

var box = 10;

var fnBox = function fnBox() {
  return box;
};

var fnPlus = function fnPlus() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 ? arguments[1] : undefined;
  //const c = a || 3;
  return a + b;
};

var FileData = function FileData(name, date) {
  _classCallCheck(this, FileData);

  this.name = name;
  this.date = date;
}; //-------------------------------------------


var promi = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('success');
  }, 500);
});
var rel = promi.then(function (resolve) {
  return resolve;
});
console.log(rel);