import React, { useState } from "react";
import "../compoents/Schemes.css";
import { useNavigate } from "react-router-dom";

function Schemes(props) {
  const [schemeMasterData, setSchemeMasterData] = useState({});

  //console.log("scheme object", props.scheme);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    setSchemeMasterData(props.scheme);
    localStorage.setItem("schemeMasterData", JSON.stringify(props.scheme));
    navigate(props.scheme.formPath);
  };
  return (
    <div className="schemes_card" id={props.scheme.schemeName}>
      <img
        src={props.scheme.imageUrl}
        className="card-img-top"
        alt="Scheme one"
      />
      <div className="card-body">
        <h5 className="card-title">{props.scheme.schemeName}</h5>
        <p className="card-text">
          {props.scheme.schemeDescription}
         
        </p>
      
        {
          props.isApplied ? 
        
        <button type="button" className="btn btn-secondary" disabled>Applied</button>
         :
        <button type="button"
          // href={props.href}
          className="btn btn-primary"
          onClick={handleClick}
        >
          Apply
        </button>
        
                }
      </div>
    </div>
  );
}

export default Schemes;
