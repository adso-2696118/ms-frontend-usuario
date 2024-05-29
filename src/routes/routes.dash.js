import { Router } from "express";

const rutaDash = Router();

rutaDash.get("/", (req, res)=>{
    res.send("<h1> Este es mi dashboard </h1> ");
})
rutaDash.get("/user", (req, res)=>{
    res.send("<h1> Usuarios </h1> ");
})

export default rutaDash;