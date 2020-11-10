import React from "react";
// import "./style.css";

//Container for the table
function Container(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="card w-100">
          <div className="card-body">{props.children}</div>
        </div>
      </div>
    </div>
  );
}

export default Container;