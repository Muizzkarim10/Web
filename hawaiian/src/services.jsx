import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

// Images
import logo from "./assets/logo.png";
import waterImg from "./assets/water.jpg";
import paraHeliImg from "./assets/para-heli.jpg";
import marineImg from "./assets/marine.jpg";

const Services = () => {
  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <img className="navbar-brand" src={logo} alt="Logo" style={{ width: "100px" }} />
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
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/restaurants">Restaurants</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/reason">Reasons</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* MAIN SECTION */}
      <section className="container mt-4 mb-4">
        <h3 className="bg-info p-3 text-light">Top 3 Activities to do in Hawaii</h3>
        <p className="p-4 m-0 pt-0">
          Planning a trip to the Aloha State can seem overwhelming. Hawaii is magical, 
          and these experiences should be at the top of your list.
        </p>

        {/* CARD 1 */}
        <div className="card mb-3 resize-card" style={{ maxWidth: "95%", margin: "0 auto" }}>
          <div className="row g-0">
            <div className="col-md-3">
              <img src={waterImg} className="img-fluid" alt="Waterfall" />
            </div>
            <div className="col-md-9">
              <div className="card-body">
                <h5 className="card-title">Lolani Palace</h5>
                <p className="card-text">
                  The 'Lolani Palace was the royal residence of the rulers of Hawaii, now a museum.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="card mb-3 resize-card" style={{ maxWidth: "95%", margin: "0 auto" }}>
          <div className="row g-0">
            <div className="col-md-9">
              <div className="card-body">
                <h5 className="card-title">Paradise Helicopters</h5>
                <p className="card-text">
                  Paradise Helicopters offers air adventures over Hawaii with exclusive tours and landings.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <img src={paraHeliImg} className="img-fluid" alt="Helicopter" />
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="card mb-3 resize-card" style={{ maxWidth: "95%", margin: "0 auto" }}>
          <div className="row g-0">
            <div className="col-md-3">
              <img src={marineImg} className="img-fluid" alt="Marine" />
            </div>
            <div className="col-md-9">
              <div className="card-body">
                <h5 className="card-title">Atlantis Submarines</h5>
                <p className="card-text">
                  Atlantis Submarines gives an underwater experience off the shorelines of Hawaii, with marine life and reefs.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="d-flex p-3 flex-wrap justify-content-around">
        <div className="card" style={{ width: "18rem" }}>
          <img src={logo} className="card-img-top" alt="Logo" />
          <div className="card-body">
            <p className="card-text">
              Hawaii is a state in the Pacific Ocean about 2,000 miles from the U.S. mainland,
              the only U.S. state outside North America, and the only archipelago in the tropics.
            </p>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Pages</h5>
            <div className="d-flex flex-column">
              <Link to="/" className="card-link m-0">Home</Link>
              <Link to="/services" className="card-link m-0">Services</Link>
              <Link to="/restaurants" className="card-link m-0">Restaurants</Link>
              <Link to="/reason" className="card-link m-0">Reason</Link>
            </div>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Contact Us</h5>
            <div className="d-flex flex-column">
              <a href="#" className="card-link m-0">IT Park Abbottabad</a>
              <a href="#" className="card-link m-0">WhatsApp: +923139283453</a>
              <a href="#" className="card-link m-0">Email: urraan.pk@gmail.com</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;
