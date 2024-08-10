import React from "react";
import "../compoents/Schemes.css";
function Schemes(props) {
  return (
    <div className="schemes_card" id={props.name}>
      <img src={props.img} className="card-img-top" alt="Scheme one" />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href={props.href} className="btn btn-primary">
          Apply
        </a>
      </div>
    </div>
  );
}

export default Schemes;
