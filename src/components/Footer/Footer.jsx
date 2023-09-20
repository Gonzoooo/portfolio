import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      {new Date().getFullYear()} &#169; Olga Smirnova
    </footer>
  );
}

export default Footer;
