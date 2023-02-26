import React from "react";
import "../styles/Navigation.css";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    <div className="navbar">
      <li className="navItem">
        <Link to="/">About me</Link>
      </li>
      <li className="navItem">
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li className="navItem">
        <Link to="/contact">Contact</Link>
      </li>
      <li className="navItem">
        <Link to="resume">Resume</Link>
      </li>
    </div>
  );
};

export { Navigation };
