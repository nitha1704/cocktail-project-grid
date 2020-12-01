import React from 'react'
import {Link} from 'react-router-dom'

// Component
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
    return (
      <nav className="desktop">
        <div className="inner">
          <div className="navbar-wrap">
            <div className="navbar-item1">
              <Link to="/">
                <img
                  src="/images/logo.9a3d2645.svg"
                  alt=""
                  className="logo-navbar"
                />
              </Link>
            </div>
            <div className="navbar-item2">
              <ul className="ul-cleargap">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <NavbarMobile />
          </div>
        </div>
      </nav>
    );
}

export default Navbar
