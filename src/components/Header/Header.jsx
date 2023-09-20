import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <nav className="header__nav">
        <a className="nav__logo"
           href="https://github.com/Gonzoooo"
           target="_blank"
           rel="noreferrer">Gatarto</a>
        <ul className="nav__links">
          <li className="nav__link">
            <a href="#works">Works</a>
          </li>
          <li className="nav__link">
            <a href="#about">About</a>
          </li>
          <li className="nav__link">
            <a href="#contact">Contacts</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
