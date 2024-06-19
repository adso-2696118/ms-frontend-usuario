"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _routes = _interopRequireDefault(require("./routes.home"));
var _routes2 = _interopRequireDefault(require("./routes.dash"));
var ruta = (0, _express.Router)();
ruta.use("/", _routes["default"]);
ruta.use("/dash", _routes2["default"]);
var _default = exports["default"] = ruta;