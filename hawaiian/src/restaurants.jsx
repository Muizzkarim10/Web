import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import rest1 from "./assets/restut-1.jpg";
import rest2 from "./assets/restut-2.jpg";
import rest3 from "./assets/restut-3.jpg";

const Restaurants = () => {
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
                <Link className="nav-link active" to="/restaurants">
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

      {/* RESTAURANTS CARDS */}
      <section className="container py-5">
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-md-6">
            <div className="card h-100">
              <img
                src={rest1}
                className="card-img-top"
                alt="Maui"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Maui</h5>
                <p className="card-text">
                  Here in Maui, we are blessed with some of the finest dining
                  the United States has to offer. From the atmosphere to the
                  tropical yet savory flavors, we guarantee you won't leave
                  disappointed. The best restaurants in Maui are typically found
                  ocean-side and open-air. As you indulge in your first course,
                  take in the sights and sounds of Maui's natural beauty. Once
                  you start your main course, it'll be hard to focus on anything
                  but the taste.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-6">
            <div className="card h-100">
              <img
                src={rest2}
                className="card-img-top"
                alt="Outdoor Dining"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">
                  Outdoor Dining with the Chef's Menu
                </h5>
                <p className="card-text">
                  Exclusive Outdoor Dining on the Ocean Front Lanai of Kamuela
                  Provision Company. All dining reservations specific to the
                  Ocean Front Lanai are served a Three Course Chef's Menu. The
                  Ocean Front Lanai offers guests an unrivaled ambiance
                  complemented by sunset views of the pacific ocean. As the sun
                  sets and the stars appear, local musicians perform nightly on
                  the Ocean Front Lanai. Our Chef's Menu offers a range of
                  selections for each of the 3 courses including opportunities
                  for guests to indulge further with enhanced offerings.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-6">
            <div className="card h-100">
              <img
                src={rest3}
                className="card-img-top"
                alt="Local Lunar"
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Local Lunar</h5>
                <p className="card-text">
                  The head chef, Mike Lofaro, is renowned for his modern take on
                  Hawaiian seasonal cuisine. His latest culinary experiment is
                  to employ the Hawaiian moon calendar system, traditionally
                  used by locals to dictate their eating, farming and fishing
                  habits. Lofaro will rotate his menu throughout the year based
                  on the ingredients that can be harvested, fished or foraged
                  according to the current lunar cycle. Guests can try Lofaro's
                  contemporary interpretation of traditional fish and poi, a
                  staple of native Hawaiian cuisine. Housed in a native hale
                  thatched structure, the interior of the restaurant references
                  Hawaiian culture. It features ohia hardwood posts and rafters,
                  lauhala weave ceiling panels, and an inscribed ode to local
                  traditions of ocean voyaging and wayfinding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Restaurants;
