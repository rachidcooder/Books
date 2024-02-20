const express = require("express");
const db = require("../config/db.js");


const route = express.Router();



//
route.get("/books", (req, res) => {
  const q = "SELECT * FROM books ";
  db.query(q, (err, data) => {
    if (err) return res.json({ err });

    return res.json({ data });
  })
});


route.post("/book", (req, res) => {
  const { title, description, cover } = req.body;
  const q = "INSERT INTO books(title,description,cover) VALUES(?)";
  const values = [title, description, cover];

  db.query(q, [values], (err, data) => {
    if (err) res.json(err);

    return res.json(data);
  })
});


//get one book ;
route.get("/book/:id", async (req, res) => {
  const id = req.params.id;

  const query = "SELECT * FROM books WHERE id = ?";
  db.query(query, id, (err, data) => {
    if (err) res.json(err);
    if (data.length === 0) return res.json({ msg: "Book not found" });
    return res.json(data);
  });

});


module.exports = route;