import React, { useEffect, useState } from "react";

import Axios from "axios";

// import "./SavedBooks.css";
import Container from "../Container/container";
import ResultRow from "../ResultRow/ResultRow";

const SavedBooks = () => {
  const [allSavedBooks, setAllSavedBooks] = useState([]);

  useEffect(() => {
    loadSavedBooks();
  },[]);


  const loadSavedBooks = () => {
    Axios.get("/api/books").then((res) => {
      setAllSavedBooks(res.data);
    });
  };

  const deleteOneBook = (event) => {
    console.log(event.target.id)
    Axios.delete("/api/books/" + event.target.id).then((result) => {
      console.log(result);
      loadSavedBooks();
    }).catch((err) => {
      console.log(err)
    })
  };

  const viewLink = (event) => {
    window.open(event.target.id);
  };

  
  return (
      <>
    <Container><><h5>Saved Books</h5></></Container> 

              {allSavedBooks.map((book) => (
                  
                    <ResultRow
                    deleteOneBook={deleteOneBook}
                    viewLink={viewLink}
                    title={book.title}
                    authors={book.authors} 
                    link={book.link}
                    id={book._id}
                    image={book.image}
                    description={book.description}
                />
              ))}
              </>

  );
              
};

export default SavedBooks;