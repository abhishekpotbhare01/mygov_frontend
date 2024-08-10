import React  from "react";
import "./SchemePage.css";
import SchemeService  from './service/SchemeService'
import Schemes from "./compoents/Schemes";
import one from "../src/assets/gov/img/gov2.jpg";
import two from "../src/assets/gov/img/gov_schme.png";
import three from "../src/assets/gov/img/ladli-behna-yojana.png";
import { useEffect, useState } from "react";

function SchemePage() {
  const name1 = "PM kisan yojna";
  const name2 = "PM Awas Yojna";
  const name3 = "PM Ladli yojna";

    const [schemes, setSchemes] = useState([]);


    useEffect(() => {

      const fetchSchemes = async () => {
          try {
              const resp = await SchemeService.getAllSchemes();
              setSchemes(resp);
          } catch (error) {
              console.error("Error while fetching schemes:", error);
          }
      };
  
      fetchSchemes(); // Call the async function
  }, []);
  

  return (
    <div>
      <h1>Scheme Page</h1>
      <div className="maindiv">
        <input type="text" placeholder="Enter SchemeName" id="exampleInput" />
        <button type="button" className="btn btn-primary">
          View scheme status
        </button>
      </div>
      {/* <div className="schemes">
        <Schemes name={name1} img={one}></Schemes>
        <Schemes name={name2} img={two}></Schemes>
        <Schemes name={name3} img={three}></Schemes>
      </div>  */}
      
      <div className="schemes">

      {
      schemes.map((scheme, index) => {
        return (
          <div key={index} >
            <Schemes scheme={scheme} img={one} />
          </div>
        );
      })
    
  }
  </div>   
    </div>
  );
}

export default SchemePage;
