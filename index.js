// lib and imports
const express = require("express");
const app = express();

const myFirstController = require("./controllers/controller")

// app setup
app.use(express.json())
app.use("/static", express.static("public"));
app.set("view engine", "ejs");


// pages
app.get('/', (req, res) => {
  res.render('home.ejs');
});
app.get('/playground', (req, res) => {
  res.render('playground.ejs');
});
app.get('/playground/scoreboard', (req, res) => {
  res.render('scoreboard.ejs');
});


// Create here your api setup

app.post("/api/sendname", (req, res) => {
  console.log(req.body)
  myFirstController.addNameToDb(req.body)
})

app.post("/api/receivename", (req, res) => {
  myFirstController.getNameFromDb(res)

})
app.post("/api/sendselection", (req, res) => {
  console.log(req.body)
  console.log('hello from playground')

})






app.listen(process.env.PORT || 3000, () => console.log("Server Up and running"));
