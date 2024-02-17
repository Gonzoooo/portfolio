import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      {new Date().getFullYear()} &#169; Gatarto
    </footer>
  );
}

export default Footer;
