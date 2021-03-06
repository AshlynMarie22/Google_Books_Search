import React from "react";
import Axios from "axios";

// import "./style.css";

function ResultRow(props) {
  
    const deleteBook = (event) => {
      console.log(event.target)
      Axios.delete(`/api/books/${event.target.id}`).then((result) => {
        console.log(result);
        props.loadSavedBooks();
      }).catch((err) => {
        console.log(err)
      })
    };
    
  return (
    <div>
      <div key={props.id} className="card w-90">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-8 text-left">
              <h5>{props.title}</h5>
              <h6>by: {props.authors}</h6>
            </div>
            <div className="col-sm-4 text-right">
              <button
                id={props.link}
                onClick={props.viewLink}
                className="btn btn-outline-info"
              >
                View
              </button>
              <button
               id={props.id}
               onClick={deleteBook}
                className="btn btn-outline-info"
              >
                Delete
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

export default ResultRow;
