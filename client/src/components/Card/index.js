import React, { Component } from "react";
import "./style.css";

class Card extends Component {
  render() {
    let projectData = this.props.projectData;
    return (
      <React.Fragment>
        {projectData.project.map((item) => {
          return (
            <div key={item.name} className="card bg-dark text-white col-md-5">
              <img src={item.image} className="card-img-top" alt={item.name} />
              <div className="card-body text-center p-0">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a
                      className="text-center mr-2 icon-links"
                      href={item.github}
                    >
                      <i className="fab fa-github-square"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="text-center icon-links" href={item.deployed}>
                      <i className="fas fa-link"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Card;
