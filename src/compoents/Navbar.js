import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
export function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav class="navbar navbar-dark bg-dark">
        <div className="nav-container ">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <a class="navbar-brand" href="/home" style={{ color: "orange" }}>
                MyGov
              </a>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/home"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about-us"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About Us
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/contact-us"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/user-login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                User Login
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/admin-login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Admin Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/register-user"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Register User
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
==== BASE ====
    
==== BASE ====
    </>
  );
}
