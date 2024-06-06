import { render } from "ejs";
import { Router } from "express";
import { presentacion } from "../controllers/controllers.dash";

const rutaDash = Router();

rutaDash.get("/", presentacion);
rutaDash.get("/user", (req, res)=>{
    res.send("<h1> Usuarios </h1> ");
})

export default rutaDash;