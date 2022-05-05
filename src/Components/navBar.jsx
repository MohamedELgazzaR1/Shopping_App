import React, { Component, Fragment } from "react";
import { Link ,NavLink} from "react-router-dom";
const NavBar = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" >
          Navbar
        </a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link " aria-current="page" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link " to="/menu">
              Menu
            </NavLink>
            <NavLink className="nav-link " to="/login">
              Login
            </NavLink>
            <NavLink className="nav-link " to="/admin">
              Admin
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              contact
            </NavLink>
            <NavLink className="nav-link" to="/cart">
              Shopping Cart
            </NavLink>
          </div>
        </div>

        <span className="badge bg-primary  m-2 "><i className="fa-solid fa-cart-shopping m-2"></i>{props.productCount}</span>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
