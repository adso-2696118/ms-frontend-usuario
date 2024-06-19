"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _dotenv = require("dotenv");
var _routes = _interopRequireDefault(require("./routes"));
var _ejs = _interopRequireDefault(require("ejs"));
var _path = _interopRequireDefault(require("path"));
(0, _dotenv.config)();
var server = (0, _express["default"])();
server.set('view engine', 'ejs');
server.set("views", _path["default"].join(__dirname, "views"));
server.set("port", process.env.PORT || 3000);
server.use(_express["default"]["static"](_path["default"].join(__dirname, "public")));

// rutas
server.use("/", _routes["default"]);

// Error 404
server.use("/", function (req, res) {
  res.render("views.error404.ejs");
});
var _default = exports["default"] = server;