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


  const viewLink = (event) => {
    window.open(event.target.id);
  };

  
  return (
      <>
    <Container><><h5>Saved Books</h5></></Container> 

              {allSavedBooks.map((book) => (
                  
                    <ResultRow
                  // deleteBook={deleteBook}
                    viewLink={viewLink}
                    key={book._id}
                    title={book.title}
                    authors={book.authors} 
                    link={book.link}
                    id={book._id}
                    image={book.image}
                    description={book.description}
                    loadSavedBooks={loadSavedBooks}
                />
              ))}
              </>

  );
              
};

export default SavedBooks;