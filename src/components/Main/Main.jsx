import React from "react";
import "./Main.css";
import Works from "../Works/Works";
import Contacts from "../Contacts/Contacts";
import About from "../About/About";

function Main() {
  return (
    <main className="main">
      <h1 className="main__header">
        <span>&#60;Let me introduce my portfolio&#47;&#62;</span>
      </h1>
        <About />
        <Works />
        <Contacts />
    </main>
  );
}

export default Main;
