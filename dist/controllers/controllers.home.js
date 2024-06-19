"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = exports.home = exports.galery = exports.contact = exports.about = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var home = exports.home = function home(req, res) {
  res.render("views.home.ejs");
};
var contact = exports.contact = function contact(req, res) {
  res.render("views.contact.ejs");
};
var galery = exports.galery = function galery(req, res) {
  res.render("views.gallery.ejs");
};
var about = exports.about = function about(req, res) {
  res.send("about");
};
var login = exports.login = function login(req, res) {
  var url = process.env.BACKEND_URL;
  var options = {
    url: url
  };
  res.render("views.login.ejs", options);
};