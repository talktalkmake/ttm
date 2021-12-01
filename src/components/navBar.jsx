import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <React.Fragment>
      <nav className="top-nav">
        <li className="nav-item">
          <Link to="/">Tom Hart</Link>
        </li>
        <li className="nav-item">
          <NavLink to="/work">Work</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </nav>
      <nav className="second-nav">
        <li className="nav-item nav-space">
          <a href="https://github.com/talktalkmake/" target="_blank">
            GitHub
          </a>
        </li>
        <li className="nav-item">
          <a href="https://twitter.com/talktalkmake" target="_blank">
            Twitter
          </a>
        </li>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
