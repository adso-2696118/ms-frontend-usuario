import express from "express";
import { config } from "dotenv";
import ruta from "./routes";
import ejs from "ejs";
import path from "path";
config();


const server = express();
server.set('view engine', 'ejs');
server.set("views", path.join(__dirname,"views"));
server.set("port", process.env.PORT || 3000);
server.use(express.static(path.join(__dirname,"public")))

// rutas
server.use("/", ruta);

// Error 404
server.use("/",(req, res)=>{
    res.render("views.error404.ejs");
})

export default server;