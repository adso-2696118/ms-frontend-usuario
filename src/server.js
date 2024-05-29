import express from "express";
import { config } from "dotenv";
import ruta from "./routes";
config();

const server = express();

server.set("port", process.env.PORT || 3000);

// rutas
server.use("/", ruta);

export default server;