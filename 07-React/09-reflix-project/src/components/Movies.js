import React from "react";
import Movie from "./Movie";

function Movies({ movies, getCategoryData }) {
  return (
    <>
      {movies.map((m, index) => {
        return (
          <Movie
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
