import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Landing from "./components/Landing";
import Catalog from "./components/Catalog";
import { MOVIES_DATA } from "./Consts";
import { useState } from "react";
import MovieDetail from "./components/MovieDetail";
import Navbar from "./components/Navbar";
import { addNewProperty } from "./utilities";

function App() {
  const [catalog, setCatalog] = useState(
    addNewProperty(MOVIES_DATA, "isSearched", true)
  );

  const STATE_MAP = {
    catalog: catalog,
    setCatalog: setCatalog,
  };
  const getCategoryData = (category) => {
    return STATE_MAP[category];
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/catalog"
          element={<Catalog getCategoryData={getCategoryData} />}
        />
        <Route
          path="/movies/:id"
          element={<MovieDetail getCategoryData={getCategoryData} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
