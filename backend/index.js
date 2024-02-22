const express = require('express');
const mysql = require("mysql");
const cors = require("cors");
const route = require("./Routers/routes.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", route);

//
// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "mistdjva2@.com",
//   database: "db"
// })


app.get("/", (req, res) => {
  return res.send("<h1>welecom here ! </h1>");
})

//get  books
// app.get("/books", (req, res) => {
//   const q = "SELECT * FROM books ";
//   db.query(q, (err, data) => {
//     if (err) return res.json({ err });

//     return res.json({ data });
//   })
// })
//add book 
// app.post("/book", (req, res) => {
//   const { title, description, cover } = req.body;
//   const q = "INSERT INTO books(id,title,description,cover) VALUES(?)";
//   const values = [2, title, description, cover];

//   db.query(q, [values], (err, data) => {
//     if (err) res.json(err);

//     return res.json(data);
//   })

// });




app.listen(5000, () => {
  console.log("listening to the port : 5000");
})


