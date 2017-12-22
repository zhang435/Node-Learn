const express = require("express")
const hbs     = require("hbs");

var app = express()

app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials")
hbs.registerHelper("year" , () =>  new Date().getFullYear())
hbs.registerHelper("screamit", (text) => text.toUpperCase())
app.get("/" , (req, res) => {
    // res.send('HELLO EXPRESS');
    res.render("index.hbs",{
        title : "Index",
        name : "apple",
        like : ["sleep", "food"],
    })
})

app.get("/about" , (req, res) => {
    res.render("about.hbs",{
        title : "About",
    });
    // res.send('IN the about page');

})
app.listen(3000); 
 