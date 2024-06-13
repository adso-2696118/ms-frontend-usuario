import { render } from "ejs";
import { Router } from "express";
import { presentacion } from "../controllers/controllers.dash";

const rutaDash = Router();

rutaDash.get("/", presentacion);

export default rutaDash;