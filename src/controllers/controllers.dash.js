import { config } from "dotenv";
config();
export const presentacion = (req, res)=>{
    
    const tpk = process.env.TOKEN_PRIVATEKEY;

    res.render("views.dash.ejs", { tpk : tpk });
}