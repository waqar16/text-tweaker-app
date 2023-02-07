import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-dark bg-primary`}>
        <div className="container-fluid container">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  {props.f1}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  {props.f2}
                </a>
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {props.f3}
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
              <li className="nav-item">
                <a className="nav-link disabled" href="/">
                  {props.f4}
                </a>
              </li>
            </ul>
            <button className="btn btn-light" onClick={props.handleMode}>
              {props.modeStatus}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  f1: PropTypes.string,
  f2: PropTypes.string,
  f3: PropTypes.string,
  f4: PropTypes.string,
};
