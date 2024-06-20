import { config } from "dotenv";
config();

/**
 * almacena la url del backend
 * @type {string}
 */
const url = process.env.BACKEND_URL;
/**
 * Presentacion inicial del dashboard
 * @param {object} req Peticion http
 * @param {object} res respuesta http
 */
const presentacion = (req, res)=>{
    
    res.render("views.dash.ejs");
}

const listarUsuarios = (req, res) => {
    let datos = "";
    const recurso = url + "/api/user"
    fetch(recurso)
    .then(res=>res.json())
    .then(data=>{
        datos = data.body[0];
        res.render("views.usuario.listar.ejs", {datos:datos});
    })
    
}
const crearUsuarios = (req, res) => {
    res.render("views.usuario.crear.ejs");
}
export { presentacion, listarUsuarios, crearUsuarios };