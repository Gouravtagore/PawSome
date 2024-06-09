import React, { useContext } from "react";
import "./NavigationBar.css";
import { NavLink } from "react-router-dom";
import { loginContext } from "../../contexts/loginContext";

function NavigationBar() {
  let [currentUser, error, userLoginStatus, loginUser, logoutUser] =
    useContext(loginContext);

  const activeLink = {
    color: "#dc3545",
    fontSize: "1.25rem",
    fontWeight: "bold",
  };
  
  const inactiveLink = {
    color: "#000000",
    fontSize: "1.2rem",
  };
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
      <a className="navbar-brand fs-1" to="#">Nothing</a>
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
                style={({ isActive }) => {
                  return isActive ? activeLink : inactiveLink;
                }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/register"
                style={({ isActive }) => {
                  return isActive ? activeLink : inactiveLink;
                }}
              >
                Register
              </NavLink>
            </li>

            {!userLoginStatus ? (
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/login"
                  style={({ isActive }) => {
                    return isActive ? activeLink : inactiveLink;
                  }}
                >
                  Login
                </NavLink>
              </li>
            ) : (
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/login"
                  style={({ isActive }) => {
                    return isActive ? activeLink : inactiveLink;
                  }}
                  onClick={logoutUser}
                >
                  Logout
                </NavLink>
              </li>
            )}

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/aboutus"
                style={({ isActive }) => {
                  return isActive ? activeLink : inactiveLink;
                }}
              >
                Aboutus
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
