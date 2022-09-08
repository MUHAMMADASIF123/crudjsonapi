import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <NavLink className=" text-black navbar-brand" to="#">
         Online Store 
        </NavLink>
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
              <NavLink className="nav-link active text-black" aria-current="page" to="/">
                All Products
              </NavLink>
            </li>
          
          </ul>
        </div>

        
         
        
      </div>
    </nav>
  );
}

export default Navbar;
