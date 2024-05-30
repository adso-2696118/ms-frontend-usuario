import { Router } from "express";
import { contact, home } from "../controllers/controllers.home";

const rutaHome = Router();

rutaHome.get("/", home)
rutaHome.get("/contactos",contact)

export default rutaHome;