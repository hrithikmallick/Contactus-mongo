const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
//import model
const Data = require("./models/usersms");

const port = process.env.PORT || 8080;
//connect to db
require("./db/conn");
//template engine
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/view");
const partials_path = path.join(__dirname, "../templates/partials");
app.use(express.static(static_path));
//use for encoder
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);
//starting routing
app.get("/", (req, res) => {
  res.render("index");
});
//contact post
app.post("/contact", async (req, res) => {
  try {
    // res.send(req.body);
    const userData = new Data(req.body);
    await userData.save();
    res.status(201);
    res.render("index");
  } catch (err) {
    console.log(err);
  }
});
//for useless get requests
app.get("*", (req, res) => {
  res.render("404page", {
    errorMsg: "Opps! page not found, Click Here to go",
  });
});
app.listen(port, () => {
  console.log(`listening to at http://localhost:${port}`);
});
