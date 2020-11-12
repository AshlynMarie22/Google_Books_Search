const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/books", (req, res) => {
  db.Books.find({}).then((allBooks) => {
    res.json(allBooks);
  });
});

router.post("/api/books", (req, res) => {
  const saveBook = {
    title: req.body.title,
    authors: req.body.authors,
    description: req.body.description,
    image: req.body.image,
    link: req.body.link,
  };
  
  db.Books.create(saveBook).then((savedBook) => {
    res.json(savedBook);
  });
});

router.delete("/api/Books/:id", (req, res) => {
    db.Books.findByIdAndDelete(req.params.id).then((deletedBook) => {
      res.json(deletedBook);
    });
  });
  
  module.exports = router;