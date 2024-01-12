import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <p><b>KUKAKUKA</b></p>
            <span className="icon">
            </span>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/kukakuka-app"
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
                to="/shop"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/features"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Features
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Account"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Account
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/aboutus"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuClose />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;