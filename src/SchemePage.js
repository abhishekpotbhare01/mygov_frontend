import React from "react";
import "./SchemePage.css";
import Schemes from "./compoents/Schemes";
import one from "../src/assets/gov/img/gov2.jpg";
import two from "../src/assets/gov/img/gov_schme.png";
import three from "../src/assets/gov/img/ladli-behna-yojana.png";
import four from "../src/assets/gov/img/Midday-Meal-Scheme.png";
import { Navbar } from "./compoents/Navbar";

function SchemePage() {
  const name1 = "PM kisan yojna";
  const name2 = "PM Awas Yojna";
  const name3 = "PM Ladli yojna";
  const name4 = "Mid Day Meal";

  const othereHref = "";
  const midDayMealHref = "sudent-scheme-form";

  return (
    <>
      <Navbar />
      <div>
        <div className="maindiv">
          <input type="text" placeholder="Enter SchemeName" id="exampleInput" />
          <button type="button" className="btn btn-primary">
            View scheme status
          </button>
        </div>
        <div className="schemes">
          <Schemes name={name1} img={one} href={othereHref}></Schemes>
          <Schemes name={name2} img={two} href={othereHref}></Schemes>
          <Schemes name={name3} img={three} href={othereHref}></Schemes>
          <Schemes name={name4} img={four} href={midDayMealHref}></Schemes>
        </div>
      </div>
    </>
  );
}

export default SchemePage;
