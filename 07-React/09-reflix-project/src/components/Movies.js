import React from "react";
import Movie from "./Movie";

function Movies({ getCatalogData,movies, getCategoryData }) {
  return (
    <>
      {movies.map((m, index) => {
        return (
          <Movie
          getCatalogData={getCatalogData}
            key={index}
            index={index}
            movie={m}
            getCategoryData={getCategoryData}
          />
        );
      })}
    </>
  );
}

export default Movies;
