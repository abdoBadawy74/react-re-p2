import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="home">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">

            <li className="nav-item">
              <Link className="nav-link" to="home">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="parent">
              Parent
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="projects">
              Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="movies">
              Movies
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="contacts">
              Contacts
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="about">
              About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="gallary">
              Gallary
              </Link>
            </li>


          </ul>
        </div>
      </nav>
    </div>
  );
}
