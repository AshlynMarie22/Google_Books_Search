import React from "react";
import Axios from "axios";
// import "./style.css";

function SearchResult(props) {
  const bookObject = {
    title: props.title,
    authors: props.authors,
    description: props.description,
    image: props.image,
    link: props.link,
  }

  const saveBookToDatabase = () => {
    Axios.post("/api/books", bookObject).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err)
    })
  };

  const viewLink = () => {
    window.open(props.link);
  };

  return (
    <div>
      <div key={props._id} className="card w-90">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-8 text-left">
              <h5>{props.title}</h5>
              <h6>by: {props.authors}</h6>
            </div>
            <div className="col-sm-4 text-right">
              <button
                id={props.link}
                onClick={viewLink}
                className="btn btn-outline-info"
              >
                View
              </button>
              <button
              id={props.link}
                onClick={saveBookToDatabase}
                className="btn btn-outline-info"
              >
                Save
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <img src={props.image} alt="cover of book" />
            </div>
            <div className="col-sm-10">
              <p>{props.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
