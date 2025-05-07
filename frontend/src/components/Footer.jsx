import React from "react";
import "../styles/components/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();  // Get current year dynamically

  return (
    <footer className="footer">
      <p>&copy; {currentYear} Kalleda Village. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
