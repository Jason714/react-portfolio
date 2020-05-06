import React from "react";
import Pdf from "../resume/Resume.pdf";
import "./contact.css";

const Contact = () => {
  return (
    <section
      style={{
        height: 660,
        clear: "both",
      }}
      className="contact-area"
    >
      <div className="container contact-container">
        <div className="row">
          <div className="col-md-5">
            <div>
              <h4>Contact Info</h4>
              <hr />
              <br />
              <ul className="list-group details">
                <li className="list-group-item borderless">
                  <p>Location: Anaheim, CA</p>
                </li>
                <li className="list-group-item borderless">
                  <p>Phone #: (402)210-0899</p>
                </li>
                <li className="list-group-item borderless">
                  <p>Email: jblakecodes@gmail.com</p>
                </li>
                <li className="list-group-item borderless">
                  <a
                    href={Pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume"
                  >
                    Download a PDF of my Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-7">
            <div>
              <h4>Contact Form</h4>
              <hr />
              <br />
              <form id="contactForm">
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control contact-form"
                      placeholder="Your Name*"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control contact-form"
                      id="email"
                      name="email"
                      placeholder="Your Email*"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control contact-form"
                      placeholder="Subject*"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control contact-form"
                      id="phone"
                      name="phone"
                      placeholder="Phone*"
                    />
                  </div>
                </div>
                <textarea
                  name="message"
                  id="message"
                  className="form-control contact-form"
                  rows="6"
                  placeholder="Your Message ..."
                ></textarea>
                <button type="submit" className="btn btn-primary mt-1">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
