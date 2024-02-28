const express = require('express');
const mysql = require("mysql");
const cors = require("cors");
const route = require("./Routers/routes.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", route);



app.get("/", (req, res) => {
  return res.send("<h1>welecom here ! </h1>");
})




app.listen(5000, () => {
  console.log("listening to the port : 5000");
})


