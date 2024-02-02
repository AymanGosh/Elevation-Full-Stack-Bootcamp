import React from "react";
import { Link } from "react-router-dom";
import "./Movie.css";
function Movie({ getCatalogData,movie, getCategoryData, index }) {
  const textButton = movie.isRented ? "-" : "+";

  const addToFavoritClick = () => {
    const cloneCatalog = [...getCategoryData("catalog")];
    const setCatalog = getCategoryData("setCatalog");
    const budget = getCatalogData("budget");
    const setBudget= getCatalogData("setBudget");
    if(movie.isRented){
      setBudget(budget+50);
    }else{
      if(budget-50<0){
        alert("You dont have enough money!")
        return;
      }else{
        setBudget(budget-50);
      }
    }
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
