import { Router } from "express";

const rutaHome = Router();

rutaHome.get("/", (req, res)=>{
    res.send("<h1> Hola mundo</h1> ");
})
rutaHome.get("/contactos", (req, res)=>{
    res.send("<h1> Contactos </h1> ");
})

export default rutaHome;