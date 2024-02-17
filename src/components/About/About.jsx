import React from "react";
import "./About.css";

function About() {
    return (
        <div className="about" id="about">
            <h2 className="about__header">about</h2>
            <p className="about__text">Hello, I'm Olga. I started my journey in web development in 2022, and now I am
                striving to acquire more knowledge about it. I have experience working with HTML, CSS, SASS, JavaScript
                (I've also tried TypeScript), Webpack, and other web development technologies. Additionally, I have
                worked with the React library.</p>

            <div className="about__icons">
                <i className="devicon-html5-plain"></i>

                <i className="devicon-css3-plain"></i>

                <i className="devicon-javascript-plain"></i>

                <i className="devicon-react-original"></i>

                <i className="devicon-sass-original"></i>

                <i className="devicon-github-original"></i>

                <i className="devicon-webstorm-plain"></i>

                <i className="devicon-eslint-plain"></i>


            </div>

            <p className="about__text">Glad to present my works &#10174;</p>


        </div>
    );
}

export default About;
