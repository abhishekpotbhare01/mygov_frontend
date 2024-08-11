import React from "react";
import "../compoents/Schemes.css";
import { useNavigate } from 'react-router-dom';
function Schemes(props) {
  const navigate = useNavigate();

  const handleClick=()=>{
    navigate('/sudent-scheme-form')
  }
  return (
    <div className="schemes_card"
     id= {props.scheme.schemeName}
    >
      <img src={props.img} className="card-img-top" alt="Scheme one" />
      <div className="card-body">
        <h5 className="card-title">    
          {props.scheme.schemeName}

        </h5>
        <p className="card-text">
          {props.scheme.schemeDescription}
         
        </p>
        {/* <a href={props.href} className="btn btn-primary">
          Apply
        </a> */}
        <button type="button"onClick={handleClick} className="btn btn-primary btn-block col-md-6">
                            Apply
                        </button>
      </div>
    </div>
  );
}

export default Schemes;
