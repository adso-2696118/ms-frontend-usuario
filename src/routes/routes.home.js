import { Router } from "express";
import { contact, home, login } from "../controllers/controllers.home";

const rutaHome = Router();

rutaHome.get("/", home)
rutaHome.get("/contactos",contact)
rutaHome.get("/login", login)

export default rutaHome;