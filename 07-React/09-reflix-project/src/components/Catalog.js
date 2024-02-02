import React, { useState } from "react";
import Movies from "./Movies";
import "./Catalog.css"
function Catalog({ getCategoryData }) {
  const [allMovies,setAllMovies] =useState(getCategoryData("catalog"));
  const rentedMovies = allMovies.filter((m) => m.isRented);
  const [searchInput,setSearchInput] = useState("");
  const [budget,setBudget]=useState(100);

  const handleInputChange=(event)=>{
     const searchedMovie = event.target.value;
     const searchAllMovies=getCategoryData("catalog").filter(m=>{
      return m.title.includes(searchedMovie)
    })
    setAllMovies(searchAllMovies)
    setSearchInput(event.target.value);
  }
  const CATALOG_STATE_MAP = {
    budget,setBudget
  };
  const getCatalogData = (category) => {
    return CATALOG_STATE_MAP[category];
  };
  return (
    <div>
      <br/>
      <h3>Budget: {budget}$</h3>
      <input type="text" placeholder="Search" value={searchInput} onChange={handleInputChange} />

      <br/>
      {rentedMovies.length > 0 && (
        <>
        <br/>
          <div>Rented</div>
          <Movies getCatalogData={getCatalogData} movies={rentedMovies} getCategoryData={getCategoryData} />
        </>
      )}
      <div>Catalog</div>
      <Movies  getCatalogData={getCatalogData} movies={allMovies} getCategoryData={getCategoryData} />
    </div>
  );
}

export default Catalog;
