import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap's JavaScript bundle

import one from "../assets/gov/img/gov2.jpg";
import two from "../assets/gov/img/gov_schme.png";
// import img1 from "../assets/gov/img/ladli-behna-yojana.png";

import img1 from "../assets/gov/img/PM-Kisan-Yojana.png";
import './HomePage.css'


function HomePage() {
  useEffect(() => {
    $(document).ready(function () {
      $('.carousel').carousel();
    });
  }, []);

  return (
    <div id="carouselExampleIndicators" className="carousel slide carousel-custom-height col-12" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100 carousel-image" src={two} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100 carousel-image" src={one} alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100 carousel-image" src={img1} alt="Third slide" />
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
    </div>
  );
}

export default HomePage;
