import React from "react";
import "./Works.css";
import progulkiImg from "../../assets/img/progulki.png";
import beautySalonImg from "../../assets/img/beautySalon.png";
import designStudioImg from "../../assets/img/designStudio.png";
import pizzaImg from "../../assets/img/pizza.png";
import toDoImg from "../../assets/img/toDo.png";
import mestoImg from "../../assets/img/mesto.png";
import russiaTripImg from "../../assets/img/russiaTrip.png";
import howToLearnImg from "../../assets/img/howToLearn.png";
import letterOneImg from "../../assets/img/letter1.png";
import letterTwoImg from "../../assets/img/letter2.png";
import taxiImg from "../../assets/img/taxi.png";

function Works() {
  return (
    <div className="work" id="works">
      <h2 className="work__header">works</h2>
      <ul className="work__items">

        <li className="work__item">
          <a
              className="work__link"
              href="https://gonzoooo.github.io/todo-react/"
              target="_blank"
              rel="noreferrer"
          >
            <img
                className="work__image"
                src={toDoImg}
                alt="Pic of the `ToDo` app"
            />
          </a>
          <p className="work__description">
            To-do list app on React with the ability to add, tag, sort, and
            delete to-dos.
          </p>
        </li>

        <li className="work__item">
          <a
              className="work__link"
              href="https://gonzoooo.github.io/mesto/"
              target="_blank"
              rel="noreferrer"
          >
            <img
                className="work__image"
                src={mestoImg}
                alt="Pic of the `Mesto` landing"
            />
          </a>
          <p className="work__description">
            Adaptive landing page with the ability to add and delete photos,
            like, change avatar and nickname
          </p>
        </li>

        <li className="work__item">
          <a
              className="work__link"
              href="https://github.com/Gonzoooo/react-pizza-scss"
              target="_blank"
              rel="noreferrer"
          >
            <img
                className="work__image"
                src={pizzaImg}
                alt="Pic of the pizzeria app"
            />
          </a>
          <p className="work__description">
            App on React with Redux for ordering pizza with the ability to
            choose the size and number of pizzas.
          </p>
        </li>

        <li className="work__item">
          <a
              className="work__link"
              href="https://gonzoooo.github.io/design-studio/"
              target="_blank"
              rel="noreferrer"
          >
            <img
                className="work__image"
                src={designStudioImg}
                alt="Pic of the design studio landing"
            />
          </a>
          <p className="work__description">Landing on React</p>
        </li>

        <li className="work__item">
          <a
              className="work__link"
              href="https://gonzoooo.github.io/letter-2/"
              target="_blank"
              rel="noreferrer"
          >
            <img className="work__image" src={letterTwoImg} alt="HTML letter" />
          </a>
          <p className="work__description">HTML-letter</p>
        </li>

        <li className="work__item">
          <a
              className="work__link"
              href="https://gonzoooo.github.io/letter/"
              target="_blank"
              rel="noreferrer"
          >
            <img className="work__image" src={letterOneImg} alt="HTML letter" />
          </a>

          <p className="work__description">HTML-letter</p>
        </li>

        <li className="work__item">
          <a
            className="work__link"
            href="http://cosmo-taxii.tilda.ws/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="work__image"
              src={taxiImg}
              alt="Pic of the Taxi landing"
            />
          </a>
          <p className="work__description">Landing on Tilda with animation</p>
        </li>

        <li className="work__item">
          <a
            className="work__link"
            href="http://progulkii.tilda.ws/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="work__image"
              src={progulkiImg}
              alt="Pic of the Progulki landing"
            />
          </a>
          <p className="work__description">Landing on Tilda with form</p>
        </li>

        <li className="work__item">
          <a
            className="work__link"
            href="http://beautystudiio.tilda.ws/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="work__image"
              src={beautySalonImg}
              alt="Pic of the beauty studio landing"
            />
          </a>
          <p className="work__description">Landing on Tilda</p>
        </li>

        <li className="work__item">
          <a
            className="work__link"
            href="https://gonzoooo.github.io/russian-travel/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="work__image"
              src={russiaTripImg}
              alt="Pic of the `Trip throw Russia` landing"
            />
          </a>
          <p className="work__description">Adaptive landing page</p>
        </li>

        <li className="work__item">
          <a
            className="work__link"
            href="https://gonzoooo.github.io/how-to-learn/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="work__image"
              src={howToLearnImg}
              alt="Pic of the `Learning to learn` landing"
            />
          </a>
          <p className="work__description">Adaptive landing page</p>
        </li>

      </ul>
    </div>
  );
}

export default Works;
