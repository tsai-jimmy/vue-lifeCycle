(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _page = require("./page.js");

var _page2 = _interopRequireDefault(_page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(function () {
    var m = new _page2.default();
    m.logFn();
});

},{"./page.js":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mike = function mike() {
    var _this = this;

    _classCallCheck(this, mike);

    this.mike = "mike";

    this.logFn = function () {
        console.log(_this.mike);
    };
};

exports.default = mike;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqc1xcZXM2XFxhcHAuanMiLCJqc1xcZXM2XFxwYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7O0FBQ0EsRUFBRSxZQUFZO0FBQ1YsUUFBTSxJQUFJLG9CQUFWO0FBQ0EsTUFBRSxLQUFGO0FBQ0gsQ0FIRDs7Ozs7Ozs7Ozs7SUNEcUIsSSxHQUVqQixnQkFBYztBQUFBOztBQUFBOztBQUFBLFNBRGQsSUFDYyxHQURQLE1BQ087O0FBQUEsU0FHZCxLQUhjLEdBR04sWUFBSztBQUNULGdCQUFRLEdBQVIsQ0FBWSxNQUFLLElBQWpCO0FBQ0gsS0FMYTtBQUViLEM7O2tCQUpnQixJIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBvYmogZnJvbSBcIi4vcGFnZS5qc1wiO1xuJChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbSA9IG5ldyBvYmooKTtcbiAgICBtLmxvZ0ZuKCk7XG59KSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIG1pa2V7XG4gICAgbWlrZSA9IFwibWlrZVwiO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBcbiAgICB9XG4gICAgbG9nRm4gPSAoKSA9PntcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5taWtlKTtcbiAgICB9XG59Il19
