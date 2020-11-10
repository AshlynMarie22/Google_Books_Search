const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/books", (req, res) => {
  db.Book.find({}).then((allBooks) => {
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
  
  db.Book.create(saveBook).then((savedBook) => {
    res.json(savedBook);
  });
});

router.delete("/api/books/:id", (req, res) => {
    db.Book.findByIdAndDelete(req.params.id).then((deletedBook) => {
      res.json(deletedBook);
    });
  });
  
  module.exports = router;