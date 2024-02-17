import React from "react";
import "./Contacts.css";

function Contacts() {
  return (
    <div className="contacts" id="contact">
      <h2 className="contacts__header">you can reach me on</h2>
      <ul className="contacts__items">
        <li className="contacts__item">
          <a
            href="https://www.linkedin.com/in/gatarto"
            target="_blank"
            rel="noreferrer"
          >
            <i className="devicon-linkedin-plain"></i>
          </a>
        </li>
        <li className="contacts__item">
          <a href="mailto:gatarto@yandex.ru">Mail</a>
        </li>
        <li className="contacts__item">
          <a
              href="https://github.com/Gonzoooo"
              target="_blank"
              rel="noreferrer"
          >
            <i className="devicon-github-original"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contacts;
