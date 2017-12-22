const express = require("express")
const hbs     = require("hbs");
const fs      = require("fs");
const port    = process.env.PORT || 3000;

var app = express()

app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials")
hbs.registerHelper("year" , () =>  new Date().getFullYear())
hbs.registerHelper("screamit", (text) => text.toUpperCase())

app.use((req,res,next) => {
    var now =  new Date().toString();
    var content = `${now} : ${req.method} : ${req.url}\n`;
    fs.appendFile("log",content ,(error) => {})
    next();
})

app.use((req,res,next) => {
    res.render("mantain.hbs");
})

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
app.listen(port, () => {
    console.log(`listen a ${port}`);
}; 
 