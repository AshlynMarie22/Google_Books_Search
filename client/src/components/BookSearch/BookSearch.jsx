import React, { useState } from "react";
import SearchResult from "../SearchResult/SearchResult";
import Container from "../Container/container";
import API from "../../utils/API";


// import "./SearchCard.css";

const SearchCard = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  const handleInputChange = (event) => {
    event.preventDefault();
    let { value } = event.target;

    setQuery(value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (query === "") {
      console.log("You must enter a book title to search");
      return;
    }
    API.getBook(query)
      .then((result) => {
        setBooks(result.data.items);
        console.log(result.data.items);
        setQuery("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
 
    // const bookObject = {
    //   title: books.volumeInfo.title,
    //   authors: books.volumeInfo.authors,
    //   description: books.volumeInfo.description,
    //   image: books.volumeInfo.imageLinks.thumbnail,
    //   link: books.volumeInfo.infoLink,
    // }
  
    // const saveBookToDatabase = () => {
    //   Axios.post("/api/books", bookObject).then((res) => {
    //     console.log(res);
    //   }).catch((err) => {
    //     console.log(err)
    //   })
    // };
  
    // const viewLink = () => {
    //   window.open(books.volumeInfo.infoLink);
    // };

  return (
    <>
    <Container><h5 className="card-title">Book Search</h5>

                <form onSubmit={handleOnSubmit}>
                  <div className="form-group">
                    <label htmlFor="formGroupExampleInput">
                      Search for Book Title:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="Type book title here then click Search!"
                      name="query"
                      value={query}
                      onChange={handleInputChange}
                    />
                    <br/>
                    <button
                      className="btn btn-outline-dark float-right"
                      type="submit"
                      onClick={handleOnSubmit}
                    >
                      Search
                    </button>
                  </div>
                </form>
                </Container> 
<br/>
     <Container>
                <h5 className="card-title">Results</h5>
                {books === undefined || books.length === 0
                  ? "There are no books by that title in our collection."
                  : books.map((book) => {
                      // console.log(book);
                      return (
                        <SearchResult
                          key={book._id}
                          title={book.volumeInfo.title}
                          authors={book.volumeInfo.authors}
                          image={book.volumeInfo.imageLinks.thumbnail}
                          description={book.volumeInfo.description}
                          link={book.volumeInfo.infoLink}
                        />
                      );
                    })}
                    </Container>
 
    </>
  );
};
export default SearchCard;