import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

import logo from "./assets/logo.png";
import palaceImg from "./assets/palace.jpeg";
import waterfallImg from "./assets/waterfall.jpg";
// hero image is used in CSS, not here

const Home = () => {
  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <img
            className="navbar-brand"
            src={logo}
            alt="Logo"
            style={{ width: "100px" }}
          />

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
                <Link className="nav-link active" to="/">
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
                <Link className="nav-link" to="/reason">
                  Reasons
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="text-center p-5 mb-3" id="main">
        <h1>Hawaii is a Top growing company.</h1>
        <p>
          Hawaii is a state in the Western United States, located in the Pacific
          Ocean about 2,000 miles from the U.S mainland. It is the only U.S
          state outside North America, the only archipelago, and the only one in
          the tropics.
        </p>
        <div className="buttons">
          <button className="btn btn-outline-secondary">Our Services</button>
          <button className="btn btn-outline-success">Restaurants</button>
        </div>
      </section>

      {/* FIRST CARD */}
      <div className="card mb-3" style={{ maxWidth: "95%" }}>
        <div className="row g-0">
          <div className="col-md-6">
            <img
              src={palaceImg}
              className="img-fluid h-100 w-100"
              alt="Palace"
            />
          </div>

          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">Iolani Palace</h5>
              <p className="card-text">
                The Iolani Palace was the royal residence of the rulers of
                Hawaii, ending with Queen Liliʻuokalani. Today, it is a National
                Historic Landmark.
              </p>

              <p className="card-text">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECOND CARD */}
      <div className="card mb-3" style={{ maxWidth: "95%" }}>
        <div className="row g-0">
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">Waterfall</h5>
              <p className="card-text">
                Hawaii features many hidden waterfalls. Waipuhia Falls, known as
                the Upside Down Waterfall, appears to flow upward because of the
                strong winds along the Pali Highway.
              </p>

              <p className="card-text">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <img
              src={waterfallImg}
              className="img-fluid h-100 w-100"
              alt="Waterfall"
            />
          </div>
        </div>
      </div>

      {/* CALL TO ACTION */}
      <div
        className="card text-center mb-3 bg-black text-light"
        style={{ maxWidth: "95%" }}
      >
        <div className="card-body">
          <h5 className="card-title">Visit Hawaii</h5>
          <p className="card-text">
            Experience Hawaii’s natural beauty, culture, and royal history.
          </p>
          <a href="#" className="btn btn-success">
            See our Restaurants
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="d-flex p-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={logo} className="card-img-top" alt="Logo" />
          <div className="card-body">
            <p className="card-text">
              Hawaii is located in the Pacific Ocean and is famous for its
              tropical climate and breathtaking natural scenery.
            </p>
          </div>
        </div>

        <div className="card mx-3" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Pages</h5>
            <div className="d-flex flex-column">
              <a href="#" className="card-link m-0">
                Home
              </a>
              <a href="#" className="card-link m-0">
                Services
              </a>
              <a href="#" className="card-link m-0">
                Restaurants
              </a>
              <a href="#" className="card-link m-0">
                Reason
              </a>
            </div>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Contact Us</h5>
            <div className="d-flex flex-column">
              <a href="#" className="card-link m-0">
                IT Park Abbottabad
              </a>
              <a href="#" className="card-link m-0">
                WhatsApp: +923139283453
              </a>
              <a href="#" className="card-link m-0">
                Email: urraan.pk@gmail.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
