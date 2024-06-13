import { render } from "ejs";
import { Router } from "express";
import { crearUsuarios, listarUsuarios, presentacion } from "../controllers/controllers.dash";

const rutaDash = Router();

rutaDash.get("/", presentacion);
rutaDash.get("/listar", listarUsuarios)
rutaDash.get("/crear", crearUsuarios)

export default rutaDash;