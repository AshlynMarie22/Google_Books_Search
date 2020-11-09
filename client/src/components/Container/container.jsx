import React from "react";
// import "./style.css";

//Container for the table
function Container(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <table className="table table-striped">{props.children}</table>
        </div>
      </div>
    </div>
  );
}

export default Container;