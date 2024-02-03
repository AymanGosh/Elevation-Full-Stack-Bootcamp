import React, { useState } from "react";
import Movies from "./Movies";
import "./Catalog.css";
function Catalog({ getCategoryData }) {
  const movies = { allMovies: [], rentedMovies: [] };
  getCategoryData("catalog").forEach((m) => {
    if (!m.isSearched) {
      return;
    }
    if (m.isRented) {
      movies.rentedMovies.push(m);
    }
    movies.allMovies.push(m);
  });
  const [searchInput, setSearchInput] = useState("");
  const [budget, setBudget] = useState(100 - movies.rentedMovies.length * 50);

  const handleInputChange = (event) => {
    const searchedMovie = event.target.value;

    const searchAllMovies = getCategoryData("catalog").map((m) => {
      if (m.title.includes(searchedMovie)) {
        m.isSearched = true;
      } else {
        m.isSearched = false;
      }
      return m;
    });

    const setCatalog = getCategoryData("setCatalog");
    setCatalog([...searchAllMovies]);
    setSearchInput(event.target.value);
  };
  const CATALOG_STATE_MAP = {
    budget,
    setBudget,
  };
  const getCatalogData = (category) => {
    return CATALOG_STATE_MAP[category];
  };
  return (
    <div>
      <br />
      <h3>Budget: {budget}$</h3>
      <input
        type="text"
        placeholder="Search"
        value={searchInput}
        onChange={handleInputChange}
      />

      <br />
      {movies.rentedMovies.length > 0 && (
        <>
          <br />
          <div>Rented</div>
          <Movies
            getCatalogData={getCatalogData}
            movies={movies.rentedMovies}
            getCategoryData={getCategoryData}
          />
        </>
      )}
      <div>Catalog</div>
      <Movies
        getCatalogData={getCatalogData}
        movies={movies.allMovies}
        getCategoryData={getCategoryData}
      />
    </div>
  );
}

export default Catalog;
