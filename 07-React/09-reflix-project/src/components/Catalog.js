import React from "react";
import Movies from "./Movies";

function Catalog({ getCategoryData }) {
  const allMovies = getCategoryData("catalog");
  const rentedMovies = allMovies.filter((m) => m.isRented);

  return (
    <div>
      {rentedMovies.length > 0 && (
        <>
          <div>Rented</div>
          <Movies movies={rentedMovies} getCategoryData={getCategoryData} />
        </>
      )}
      <div>Catalog</div>
      <Movies movies={allMovies} getCategoryData={getCategoryData} />
    </div>
  );
}

export default Catalog;
