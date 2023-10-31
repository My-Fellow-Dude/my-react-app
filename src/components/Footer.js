import React from 'react';
import './Footer.css';  // Import the CSS

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>Email: info@doglovers.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Dog Lovers by Simon West</p>
      </div>
    </footer>
  );
}

export default Footer;
