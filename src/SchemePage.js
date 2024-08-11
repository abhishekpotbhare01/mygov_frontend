import React from "react";
import "./SchemePage.css";
import SchemeService from "./service/SchemeService";
import Schemes from "./compoents/Schemes";
import one from "../src/assets/gov/img/gov2.jpg";
import two from "../src/assets/gov/img/gov_schme.png";
import three from "../src/assets/gov/img/ladli-behna-yojana.png";
import { useEffect, useState } from "react";
import four from "../src/assets/gov/img/Midday-Meal-Scheme.png";
import { Navbar } from "./compoents/Navbar";

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
      useEffect(() => {
        if (searchScheme) {
          const filtered = schemes.filter(scheme =>
            scheme.schemeName.toLowerCase().includes(searchScheme.toLowerCase()));
          setfilteredSchemes(filtered);
        } else {
          setfilteredSchemes(schemes); // Reset to all schemes if the search is cleared
        }
      }, [searchScheme, schemes]);
    

  return (
    <div>
      <h1>Scheme Page</h1>
      <div className="maindiv">
        
        {/* search schemes  */}
        <input type="text"
         placeholder="Enter SchemeName" 
          value={searchScheme}
        onChange={(e) => setSearchSchemes(e.target.value)} 
        id="exampleInput" />

        {/* view schemes button */}
        <button type="button" className="btn btn-primary">
          View scheme status
        </button>
      </div>
      
        {/* scheme cards */}
      <div className="schemes">
        {filteredSchemes.map((scheme, index) => {
          return (
            <div key={index}>
              <Schemes scheme={scheme} img={one} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SchemePage;
