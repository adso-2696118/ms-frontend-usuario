import { render } from "ejs";
import { Router } from "express";
import { listarUsuarios, presentacion } from "../controllers/controllers.dash";

const rutaDash = Router();

rutaDash.get("/", presentacion);
rutaDash.get("/listar", listarUsuarios)

export default rutaDash;