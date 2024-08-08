import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./AdminNavBar.css";

export function AdminNavbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="nav-container">
          <div className="left-nav">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li>
                <a className="navbar-brand" href="#" style={{ color: "orange" }}>
                  MyGov
                </a>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="#"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Home
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="text-white marquee">
            Welcome Admin
          </div>


          <div className="right-nav">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/logout"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}
