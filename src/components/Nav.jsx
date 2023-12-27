import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark fixed-top py-4 mb-5">
      <div className="container-fluid container">
        <Link className="navbar-brand" to="/">
          <span className="text-info">FilmSPot</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>{" "}
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/About">
                About us
              </Link>
            </li>
         
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
