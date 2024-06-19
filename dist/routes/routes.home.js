"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controllers = require("../controllers/controllers.home");
var rutaHome = (0, _express.Router)();
rutaHome.get("/", _controllers.home);
rutaHome.get("/contactos", _controllers.contact);
rutaHome.get("/acercade", _controllers.contact);
rutaHome.get("/galeria", _controllers.galery);
rutaHome.get("/login", _controllers.login);
var _default = exports["default"] = rutaHome;