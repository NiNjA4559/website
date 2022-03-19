const ejs = require("ejs");
const express = require("express");
const fs = require("fs");

let app = express();

app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use("/styles", express.static(__dirname+'/public/styles'));
app.use("/assets", express.static(__dirname+'/public/assets'));

app.engine("html", ejs.renderFile);
app.set("view engine", "html");

app.get("/", (req, res) => {
    res.redirect("/home");
});
app.get("/:code", async(req, res) => { 
    if(!req.params) return res.redirect("/home");
    if(req.params.code.toLowerCase() == "home") return res.render("home");
});
app.listen(2000)
