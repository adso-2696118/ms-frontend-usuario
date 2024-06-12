import { Router } from "express";
import { contact, galery, home, login } from "../controllers/controllers.home";

const rutaHome = Router();

rutaHome.get("/", home);
rutaHome.get("/contactos",contact);
rutaHome.get("/acercade",contact);
rutaHome.get("/galeria", galery);
rutaHome.get("/login", login);

export default rutaHome;