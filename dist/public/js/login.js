"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var loguear = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var user, pass, url, urlBuho, options;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          user = document.getElementById("user").value;
          pass = document.getElementById("password").value;
          url = document.getElementById("url").value;
          sessionStorage.setItem("urlBuho", url);
          urlBuho = sessionStorage.getItem("urlBuho") + "/api/login";
          options = {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              usuario: user,
              clave: pass
            })
          };
          _context.next = 8;
          return fetch(urlBuho, options).then(function (res) {
            return res.json();
          }).then(function (data) {
            if (data.error == true) {
              alertify.error("Clave errada");
            } else {
              sessionStorage.setItem("token", data.body.token);
              window.location.href = "/dash";
            }
          })["catch"](function (err) {
            console.log("Tenemos un problema", err);
          });
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function loguear() {
    return _ref.apply(this, arguments);
  };
}();