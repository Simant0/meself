import React from "react";
import "./Navbar.css";
import { NavbarData } from "./NavbarData";
import { NavHashLink } from "react-router-hash-link";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__contents">
        {NavbarData.map((val, key) => {
          return (
            <NavHashLink smooth={true} to={val.link}>
              <div className="navbar__content" key={key}>
                <div className="navbar__icon">{val.icon}</div>
                <div className="navbar__title">{val.title}</div>
              </div>
            </NavHashLink>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
