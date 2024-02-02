import React from "react";
import { Link } from "react-router-dom";
import "./Movie.css";
function Movie({ movie, getCategoryData, index }) {
  const textButton = movie.isRented ? "-" : "+";

  const addToFavoritClick = () => {
    const cloneCatalog = [...getCategoryData("catalog")];
    const setCatalog = getCategoryData("setCatalog");
    cloneCatalog.find((m) => m.id === movie.id).isRented = !movie.isRented;
    setCatalog(cloneCatalog);
  };
  return (
    <>
      <Link to={`/movies/${index}`}>
        <img src={movie.img} />
      </Link>
      <button onClick={addToFavoritClick} className="buttonOverlay">
        {textButton}
      </button>
    </>
  );
}

export default Movie;
