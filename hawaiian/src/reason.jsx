import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";

const Reason = () => {
  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" style={{ width: "100px" }} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/restaurants">
                  Restaurants
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/reason">
                  Reasons
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <section className="container py-5">
        <h4 className="text-info mb-3">
          Getting the best from interaction devices
        </h4>
        <p className="lead mb-4">
          Once we have chosen an interaction device for a user interface, we
          need to consider how to use it effectively. We have relatively little
          control over the appearance or use of input devices, so we concentrate
          on the design of the feedback provided by output devices. In
          particular, we concentrate on software components like text, colour,
          images, moving images, and sound. Applying them thoughtfully improves
          UI usability.
        </p>

        <h4 className="text-info mb-2">Text</h4>
        <p className="lead mb-4">
          Text is the dominant component in most education and training
          software, and on many websites. It also plays a central role in
          standard software applications such as word processors and
          spreadsheets. It is a flexible and powerful means of communication.
        </p>

        <h4 className="text-info mb-2">Color</h4>
        <p className="lead mb-4">
          Screens can only display a subset of the colours visible to the human
          eye. There is also variation between computers, so a web page on a PC
          may look different when viewed on a Macintosh. Colour choice affects
          usability, aesthetics, and user perception.
        </p>

        <h4 className="text-info mb-2">
          Choosing colours with the right connotations
        </h4>
        <p className="lead mb-4">
          When using colour, consider the cultural and emotional meanings. Red
          can indicate danger in the West but joy in China. Colours aimed at
          young people are bright, while those for older audiences are subdued.
          Fashion and environment also influence colour choice. Always evaluate
          with users for best results.
        </p>

        <h4 className="text-info mb-2">Citation links</h4>
        <div className="d-flex flex-column">
          <a
            href="https://www.hiltonwaikoloavillage.com/dining"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hilton Waikoloa Dining
          </a>
          <a
            href="https://www.gohawaii.com/listing/paradise-helicopters/85154"
            target="_blank"
            rel="noopener noreferrer"
          >
            Paradise Helicopters
          </a>
          <a
            href="https://www.hawaii-guide.com/top-things-to-do-inhawaii"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hawaii Guide
          </a>
          <a
            href="https://onlyinhawaii.org/upside-waterfall-pali-highway-oahu-hawaii/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Upside Down Waterfall
          </a>
          <a
            href="https://www.tripadvisor.com/Attractions-g28932-Activities-c57-t68-Hawaii.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            TripAdvisor Hawaii
          </a>
          <a
            href="https://guides.loc.gov/hawaii-state-guide#:~:text=Hawaii%20(Hawaiian%3A%20Hawai'i,and%20the%20only%20island%20state."
            target="_blank"
            rel="noopener noreferrer"
          >
            LOC Hawaii State Guide
          </a>
          <a
            href="https://www.lsnglobal.com/news/article/21343/hawaiian-restaurant-bases-menu-on-local-lunar-calendar"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hawaiian Restaurant Lunar Calendar
          </a>
        </div>
      </section>
    </div>
  );
};

export default Reason;
