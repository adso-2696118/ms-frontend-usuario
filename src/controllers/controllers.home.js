export const home = (req, res) =>{
    // res.send("home");
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