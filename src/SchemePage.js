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
      // throw new Error("Login response not found in local storage");
    }
let resp=null;
    let userid2 = JSON.parse(userId).userDto.userId;
    console.log(userid2)
    const fetchAllSchemeId = async (userid2) => {
      try {
    
       resp = await SchemeService.getAllSchemeId(userid2);

        setAllSchemeId(resp)   
        console.log("resp inside functoion ",resp)
    
        localStorage.setItem('resp',JSON.stringify(resp));
      } catch (error) {
        console.error("Error in fetching schemeId:", error);
      }
    };
    
   let results=allSchemeId.map((obj) => {
      const scheme = obj.scheme || obj.schemeMaster;
      let status =  "";
              if(obj.womenScheme)
                 status=obj.womenScheme.status
               if(obj.studentScheme)
                  status= obj.studentScheme.status
              if(obj.farmerscheme)
                  status=obj.farmerscheme.status
      // obj.womenScheme ? obj.womenScheme.status : obj.studentScheme.status;
       
      return {
        schemeId: scheme.schemeId,
        status: status,
      };
    });
//console.log("results array",results)
console.log("resp is ",resp)
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
    console.log("allschemeid:",allSchemeId)
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
        <div className="schemes">
      {filteredSchemes.map((scheme, index) => {
        // Check if the schemeId exists in any object in the allSchemeId array
        const appliedScheme = allSchemeId.find(
          (item) => item.scheme.schemeId === scheme.schemeId
        );

        // Set isApplied based on the presence of the schemeId
        const isApplied = appliedScheme !== undefined;

        return (
          <div key={index}>
            <Schemes
              scheme={scheme}
              isApplied={isApplied}
              allSchemeId={allSchemeId}
              setIsApplied={setIsApplied}
            />
          </div>
        );

          })}
        </div>
      </div>
    </>
  );
}

export default SchemePage;
