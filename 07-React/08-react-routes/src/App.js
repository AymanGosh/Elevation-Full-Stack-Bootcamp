import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import { CATEGORIES, CHARMS_DATA, POTIONS_DATA } from "./Constants";
import HogwartNavbar from "./components/Header/HogwartNavbar";
import Entities from "./components/Entities/Entities";
import EntityDescription from "./components/Entities/EntityDescription";

import About from "./components/About";
import UserProfile from "./components/UserProfile";

const App = (props) => {
  const [categories, setCategories] = useState(CATEGORIES);
  const [potions, setPotions] = useState(POTIONS_DATA);
  const [charms, setCharms] = useState(CHARMS_DATA);
  const STATE_MAP = {
    potions: potions,
    charms: charms,
  };

  const getCategoryData = (category) => {
    return STATE_MAP[category];
  };

  return (
    <Router>
      <HogwartNavbar />
      {/* Wrapping everything with Router */}
      <div className="App">
        <div id="home-background"></div>
        <div id="main-links">{/* Main Links */}</div>

        {/* Routes go here v */}
        <Routes>
          <Route path="/" element={<Home categories={categories} />} />
          <Route path="/users/:userId" element={<UserProfile />} />
          <Route
            path="/wiki/:category"
            element={<Entities getCategoryData={getCategoryData} />}
          />
          <Route
            path="/wiki/:category/:entityName"
            element={<EntityDescription getCategoryData={getCategoryData} />}
          />
          {/* <Route path="/users/:userId" component={UserProfile} /> */}
        </Routes>
        {/* Routes go here ^ */}
      </div>
    </Router>
  );
};

export default App;
