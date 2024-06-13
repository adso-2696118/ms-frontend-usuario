/**
 * Presentacion inicial del dashboard
 * @param {object} req Peticion http
 * @param {object} res respuesta http
 */
const presentacion = (req, res)=>{
    
    res.render("views.dash.ejs");
}

const listarUsuarios = (req, res) => {
    res.render("views.usuario.listar.ejs");
}

export { presentacion, listarUsuarios };