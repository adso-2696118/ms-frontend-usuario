"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
/*!
* dependencyLibs/inputmask.dependencyLib.jquery.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2017 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 3.3.8
*/

!function (factory) {
  "function" == typeof define && define.amd ? define(["jquery"], factory) : "object" == (typeof exports === "undefined" ? "undefined" : (0, _typeof2["default"])(exports)) ? module.exports = factory(require("jquery")) : window.dependencyLib = factory(jQuery);
}(function ($) {
  return $;
});