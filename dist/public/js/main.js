"use strict";

var guardar = function guardar() {
  if (validarCampos() != true) {
    alert("los campos son encesario para llenar");
    return;
  }
  var nombre = document.getElementById("nombre").value;
  var usuario = document.getElementById("usuario").value;
  var clave = document.getElementById("clave").value;
  var url = sessionStorage.getItem("urlBuho");
  var token = sessionStorage.getItem("token");
  var endpoint = "/api/user";
  var recurso = url + endpoint;
  console.log(recurso);
  console.log(token);
  console.log(usuario);
  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token
    },
    body: JSON.stringify({
      nombre: nombre,
      usuario: usuario,
      clave: clave
    })
  };
  fetch(recurso, options).then(function (res) {
    return res.json();
  }).then(function (data) {
    if (data.error == false) {
      Swal.fire(data.body);
    }
  });
};
var validarCampos = function validarCampos() {
  /*validacion de campos */

  /*fin de validacion */
  return true;
};