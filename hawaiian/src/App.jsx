import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home.jsx";
import Reason from "./reason.jsx";
import Restaurants from "./restaurants.jsx";
import Services from "./services.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reason" element={<Reason />} />
      <Route path="/restaurants" element={<Restaurants />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
}

export default App;
