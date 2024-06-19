"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.presentacion = exports.listarUsuarios = exports.crearUsuarios = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();

/**
 * almacena la url del backend
 * @type {string}
 */
var url = process.env.BACKEND_URL;
/**
 * Presentacion inicial del dashboard
 * @param {object} req Peticion http
 * @param {object} res respuesta http
 */
var presentacion = exports.presentacion = function presentacion(req, res) {
  res.render("views.dash.ejs");
};
var listarUsuarios = exports.listarUsuarios = function listarUsuarios(req, res) {
  var datos = "";
  var recurso = url + "/api/user";
  fetch(recurso).then(function (res) {
    return res.json();
  }).then(function (data) {
    datos = data.body[0];
    res.render("views.usuario.listar.ejs", {
      datos: datos
    });
  });
};
var crearUsuarios = exports.crearUsuarios = function crearUsuarios(req, res) {
  res.render("views.usuario.crear.ejs");
};