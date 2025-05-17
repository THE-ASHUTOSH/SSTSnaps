import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <span className="footer-logo">Scaler School of Technology</span>
          <span className="footer-project">SST Snaps</span>
        </div>
        <div className="footer-links">
          {/* Add your links here */}
          <span>Home</span>
          <span>All Events</span>
          <span>About</span>
        </div>
        <div className="footer-meta">
          <span>
            © {new Date().getFullYear()} Scaler School of Technology. All rights
            reserved.
          </span>
          <span>
            Made with <span className="footer-heart">♥</span> by the SST Snaps
            Team
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
