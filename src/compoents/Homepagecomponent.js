import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./homepage.component.css";
import one from "../assets/gov/img/gov2.jpg";
import two from "../assets/gov/img/gov_schme.png";

import img1 from "../assets/gov/img/ladli-behna-yojana.png"

import pmkisan from "../assets/gov/img/pm_kisan.png"

import { Navbar } from "./Navbar";
import HomePage from "./HomePage";

function Homepagecomponent() {
  return (
    <>

      <Navbar />

      <HomePage></HomePage>
      <div class="main">


        {/** <!------------------------------Cards--------------------------------> */}
        <div class="row mt-4">
          <div class="card-group mt-3">
            <div class="card ">

              <div
                style={{
                  display: "flex",
                  alignitems: "center",
                  justifycontent: "center",
                }}
              >
                <img src={img1} />
              </div>
              <div
                style={{
                  display: "flex",
                  alignitems: "center",
                  justifycontent: "center",
                }}
              >

              </div>

              <div class="card-body">
                <div
                  style={{
                    display: "flex",
                    alignitems: "center",
                    justifycontent: "center",
                  }}
                ></div>

                <p class="card-text ">
                  Ladli Behna Yojana की मध्‍य प्रदेश सरकार द्वारा 28 जनवरी 2023 को आरम्‍भ की गई थी।
                  इसका उद्येश्‍य महिलाओं के स्वास्थ्य एवं पोषण तथा आर्थिक स्वावलम्बन को बढाना है। इस योजना के
                  तहत मध्‍य प्रदेश राज्‍य की महिलाओं को 1000 रूपये प्रतिमाह प्रदान किये जाएंगे।
                </p>

              </div>
            </div>

            <div class="card ">

              <div
                style={{
                  display: "flex",
                  alignitems: "center",
                  justifycontent: "center",
                }}
              >
                <img src={pmkisan} />
              </div>
              <div
                style={{
                  display: "flex",

                  alignitems: "center",
                  justifycontent: "center",
                }}
              >

              </div>

              <div class="card-body">
                <div
                  style={{
                    display: "flex",
                    alignitems: "center",
                    justifycontent: "center",
                  }}
                ></div>

                <p class="card-text ">
                प्रधानमंत्री किसान सन्मान निधी योजना ही शेतकऱ्यांना आर्थिक मदत देण्यासाठी भारत सरकारची विशेष योजना आहे.
                 यासाठी पूर्णपणे भारत सरकारकडून निधी दिला जातो. 
                 या योजनेअंतर्गत सर्व भू-धारक शेतकरी कुटुंबांना तीन समान हप्त्यांमध्ये वार्षिक ६००० रुपयांचं सहाय्य दिलं जातं.
                </p>

              </div>
            </div>





          </div>
        </div>



      </div>
    </>
  );
}
export default Homepagecomponent;