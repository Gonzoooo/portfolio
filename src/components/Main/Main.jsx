import React from "react";
import "./Main.css";
import Works from "../Works/Works";
import Contacts from "../Contacts/Contacts";
import About from "../About/About";

function Main() {
  return (
    <main className="main">
      <h1 className="main__header">Let me introduce my portfolio</h1>
        <About />
        <Works />
        <Contacts />
    </main>
  );
}

export default Main;
