import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "./sstsnaplogo.png";
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
          <a href="/">
            <img src={logo} alt="SST Snaps Logo" />
            SST snaps
          </a>
        </div>

        <div className={`navbar-links ${mobileMenuOpen ? "active" : ""}`}>
          <a href="/" className="navbar-link active">
            Home
          </a>
          <a href="/events" className="navbar-link">
            All Events
          </a>
          <a href="/about" className="navbar-link">
            About
          </a>
        </div>

        <div className="navbar-actions">
          {/* <button className="navbar-button login">Login</button> */}
          {/* <button className="navbar-button signup">Sign Up</button> */}
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
