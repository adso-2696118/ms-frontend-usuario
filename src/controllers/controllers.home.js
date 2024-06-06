import { config } from "dotenv";
config();

export const home = (req, res) =>{
    res.render("views.home.ejs");
};
export const contact = (req, res) =>{
    res.render("views.contact.ejs");
};
export const galery = (req, res) =>{
    res.send("galery");
};
export const about = (req, res) =>{
    res.send("about");
};
export const login = (req, res) =>{
    const url = process.env.BACKEND_URL;
    const options= {
        url : url
    };
    res.render("views.login.ejs", options);
};