import React from "react";
import ProfilePic from "../../images/profile-pic.jpg";
import "./style.css";

function Media() {
  return (
    <div className="about-page">
      <div
        style={{
          height: 560,
          clear: "both",
          paddingTop: 80,
          textAlign: "center",
        }}
        className="container about-container"
      >
        <div className="media">
          <div className="media-body">
            <h3 className="mt-0 mb-1">About Me</h3>
            <hr className="display-4" />
            <p className="brand-statement">
              Web developer utilizing and extensive background in food &
              beverage/hospitality to work well within the team environment of
              coding. Recently received a certificate in Full Stack Web
              Development from UCI extension, with a clear grasp of HTML, CSS,
              Javascript and responsive web design incorporating bootstrap
              elements. Attention to detail paired with adept problem solving
              are key skills that are extremely useful while debugging code. As
              an Event Manager comprehensive checklists and itineraries were
              integral to ensure everything, down to silverware placement, is
              executed flawlessly and in a timely manner. Previous experience as
              well as an insatiable appetite for learning have me excited for
              the future and committed to staying up to date with current and
              emerging technologies.
            </p>
          </div>
          <img src={ProfilePic} className="ml-3 pic" alt="My profile pic" />
        </div>
      </div>
    </div>
  );
}

export default Media;
