import React from "react";
import "./AboutUs.css";
import { Navbar } from "./Navbar";
import "../assets/gov/img/about-text.svg";
const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="about-us">
        <header className="about-us-header">
          <h1>About Us</h1>
          <nav className="breadcrumb">
            <a href="/">Home</a> <span>&gt;</span> <span>About Us</span>
          </nav>
        </header>
        <div className="about-us-content">
          <div className="video-section">
            <iframe
              className="w-full h-full rounded-xl video-section"
              src="https://www.youtube.com/embed/bNOWkB-6cmc?autoplay=1"
              title="myScheme: One Stop Research For Government schemes, myScheme is a National Platform that aims to offer one-stop search and discovery of the Government schemes. It provides an innovative, technology-based solution to discover scheme information based upon the eligibility of the citizen."
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen=""
            ></iframe>
          </div>
          <div className="text-section">
            <section className="vision">
              <h2>Our Vision</h2>
              <p>Our vision is to make citizens' lives easier.</p>
            </section>
            <section className="mission">
              <h2>Our Mission</h2>
              <p>
                Our mission is to streamline the government-user interface for
                government schemes and benefits. Reduce time and effort required
                to find and avail a government scheme.
              </p>
              <br />
            </section>
          </div>
        </div>
        <span className="Aboutdata">
          <div className="img-info">
            <img
              src="https://cdn.myscheme.in/images/about/about-text.svg"
              decoding="async"
              data-nimg="intrinsic"
              alt="Hero image"
              className="border-0 "
            />
          </div>
          <div className="abouttext">
            <p>
              myScheme is a National Platform that aims to offer one-stop search
              and discovery of the Government schemes.
            </p>
            <br />
            <p>
              It provides an innovative, technology-based solution to discover
              scheme information based upon the eligibility of the citizen.
            </p>
            <br />

            <p>
              The platform helps the citizen to find the right Government
              schemes for them. It also guides on how to apply for different
              Government schemes. Thus no need to visit multiple Government
              websites.
            </p>
            <br />

            <p>
              myScheme platform is Developed, Managed, and Operated by National
              e-Governance Division (NeGD), with the Support of Ministry of
              Electronics and Information Technology (MeitY), Department of
              Administrative Reforms and Public Grievance (DARPG) and in
              partnership with other Central and State Ministries/Departments.
            </p>
            <br />
          </div>
        </span>
      </div>
    </>
  );
};

export default AboutUs;
