import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div
      style={{
        height: 660,
        clear: "both",
        paddingTop: 120,
        textAlign: "center",
      }}
      className="jumbotron jumbotron-fluid bg-image"
    >
      <div className="container">
        <p className="lead text-center">
          <strong>Hello,</strong>
        </p>
        <h1 className="display-4 text-center">
          <strong>
            I am <span className="name">Jason Blake</span>.
          </strong>
        </h1>
        <hr className="display-4"></hr>
        <p className="lead text-center">
          <strong>Passionate Full Stack Web Developer</strong>
        </p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a
              className="text-center mr-2 icon-links"
              href="https://github.com/Jason714"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a
              className="text-center icon-links"
              href="https://www.linkedin.com/in/jason-blake-967025192/"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Jumbotron;
