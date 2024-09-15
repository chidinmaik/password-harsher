import React from 'react';
import './Footer.css'; // Import CSS for the Footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Password Tool. All Rights Reserved.</p>
        
      </div>
    </footer>
  );
};

export default Footer;
