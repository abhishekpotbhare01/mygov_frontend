import React from "react";
import "./SchemePage.css";
import SchemeService from "./service/SchemeService";
import Schemes from "./compoents/Schemes";
import one from "../src/assets/gov/img/gov2.jpg";
import { useEffect, useState } from "react";
import { Navbar } from "./compoents/Navbar";
import { useNavigate } from "react-router-dom";

function SchemePage() {
  const [schemes, setSchemes] = useState([]);
  const [searchScheme, setSearchSchemes] = useState("");
  const [filteredSchemes, setfilteredSchemes] = useState([]);

  const [allSchemeId, setAllSchemeId] = useState([]);
  const [isApplied, setIsApplied] = useState(false);
  // const [userid, setUserid] = useState();

  const navigate = useNavigate();

  //fetch schemes when componnent is rendered;
  useEffect(() => {
    const fetchSchemes = async () => {
      try {
        const resp = await SchemeService.GetAllSchemes();
        setSchemes(resp);
      } catch (error) {
        console.error("Error while fetching schemes:", error);
      }
    };

    fetchSchemes(); // Call the async function
  }, []);

  useEffect(() => {
    let userId = localStorage.getItem("loginResponse");
    if (!userId) {
      throw new Error("Login response not found in local storage");
    }

    let userid2 = JSON.parse(userId).userId;
    const fetchAllSchemeId = async (userid2) => {
      try {
        const resp = await SchemeService.getAllSchemeId(userid2);
        setAllSchemeId(resp);
        console.log("schemeId list:", resp);
      } catch (error) {
        console.error("Error in fetching schemeId:", error);
      }
    };

    fetchAllSchemeId(userid2); // Call the async function
  }, []);

  // Update filtered schemes when search input changes
  useEffect(() => {
    if (searchScheme) {
      const filtered = schemes.filter((scheme) =>
        scheme.schemeName.toLowerCase().includes(searchScheme.toLowerCase())
      );
      setfilteredSchemes(filtered);
    } else {
      setfilteredSchemes(schemes); // Reset to all schemes if the search is cleared
    }
  }, [searchScheme, schemes]);

  const handleSchemeStatus = (e) => {
    e.preventDefault();
    localStorage.setItem("");
    navigate("/scheme-status");
  };
  return (
    <>
      <Navbar />
      <div>
        <div className="maindiv">
          {/* search schemes  */}
          <input
            type="text"
            placeholder="Enter SchemeName"
            value={searchScheme}
            onChange={(e) => setSearchSchemes(e.target.value)}
            id="exampleInput"
          />

          {/* view schemes button */}
          <button
            type="button"
            className="btn btn-primary"
            onClick={(e) => handleSchemeStatus(e)}
          >
            View scheme status
          </button>
        </div>

        {/* scheme cards */}
        {/* <div className="schemes">
          {filteredSchemes.map((scheme, index) => {  1
            allSchemeId.map((id)=>{
                
            if(scheme.schemeId === id){
                setIsApplied(true);
                return true;
            }
          })
            return (

              <div key={index}>
                <Schemes scheme={scheme} 
                         isApplied={isApplied} 
                         allSchemeId={allSchemeId}
                         setIsApplied={setIsApplied} />
              </div>
            );
          })}
        </div> */}

        <div className="schemes">
          {filteredSchemes.map((scheme, index) => {
            const isApplied = allSchemeId.includes(scheme.schemeId);
            return (
              <div key={index}>
                <Schemes scheme={scheme} isApplied={isApplied} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SchemePage;
