import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./homepage.component.css";
import one from "../assets/gov/img/gov2.jpg";
import two from "../assets/gov/img/gov_schme.png";

import img1 from "../assets/gov/img/ladli-behna-yojana.png"

import { Navbar } from "./Navbar";
import HomePage from "./HomePage";

function Homepagecomponent() {
  return (
    <>

      <Navbar />

      <HomePage></HomePage>
      <div class="main">
        {/**  <!-----------------------------------Slider---------------------------------->*/}
        {/* <div id="carouselExampleIndicators" className="carousel slide carousel-custom-height col-12" data-ride="carousel"   >
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item ">
          <img className="d-block w-100" src={one} alt="First slide" />
        </div>
        <div className="carousel-item active">
          <img className="d-block w-100" src={two} alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={"images/carousel3.jpg"} alt="Third slide" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div> */}


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

          

             
          
          </div>
        </div>

      </div>
    </>
  );
}
export default Homepagecomponent;