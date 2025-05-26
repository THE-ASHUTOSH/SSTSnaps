import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "./sstsnaplogo.png";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import GalleryToggle from "./GalleryToggle";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <NavLink to="/">
            <img src={logo} alt="SST Snaps Logo" />
            SST snaps
          </NavLink>
        </div>

        <div className={`navbar-links ${mobileMenuOpen ? "active" : ""}`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/eventsPage"
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
          >
            All Events
          </NavLink>
          {/* <a
            href="/#allevents"
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
          >
            All Events
          </a> */}
          <NavLink
            to="/review"
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
          >
            About
          </NavLink>
        </div>

        <div className="navbar-actions">
          <GalleryToggle />
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            <span
              className={`mobile-menu-icon ${mobileMenuOpen ? "open" : ""}`}
            ></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
