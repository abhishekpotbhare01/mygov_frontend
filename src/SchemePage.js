import React  from "react";
import "./SchemePage.css";
import SchemeService  from './service/SchemeService'
import Schemes from "./compoents/Schemes";
import one from "../src/assets/gov/img/gov2.jpg";
import two from "../src/assets/gov/img/gov_schme.png";
import three from "../src/assets/gov/img/ladli-behna-yojana.png";
import { useEffect, useState } from "react";

function SchemePage() {
  
    const [schemes, setSchemes] = useState([]);
    const [searchScheme, setSearchSchemes]=useState('');
    const [filteredSchemes,setfilteredSchemes]=useState([]);


    //fetch schemes when componnent is rendered;
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
  
   // Update filtered schemes when search input changes
    useEffect(()=>{
      useEffect(() => {
        if (searchInput) {
          const filtered = schemes.filter(scheme =>
            scheme.schemeName.toLowerCase().includes(searchInput.toLowerCase())
          );
          setFilteredSchemes(filtered);
        } else {
          setFilteredSchemes(schemes); // Reset to all schemes if the search is cleared
        }
      }, [searchInput, schemes]);
    })

  return (
    <div>
      <h1>Scheme Page</h1>
      <div className="maindiv">
        <input type="text" placeholder="Enter SchemeName" id="exampleInput" />
        <button type="button" className="btn btn-primary">
          View scheme status
        </button>
      </div>
      
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
