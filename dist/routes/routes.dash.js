"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ejs = require("ejs");
var _express = require("express");
var _controllers = require("../controllers/controllers.dash");
var rutaDash = (0, _express.Router)();
rutaDash.get("/", _controllers.presentacion);
rutaDash.get("/listar", _controllers.listarUsuarios);
rutaDash.get("/crear", _controllers.crearUsuarios);
var _default = exports["default"] = rutaDash;