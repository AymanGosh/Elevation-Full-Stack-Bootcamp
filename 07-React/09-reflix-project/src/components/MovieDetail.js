import React from "react";
import { useParams } from "react-router-dom";
import "./MovieDetail.css";

function MovieDetail({ getCategoryData }) {
  const { id } = useParams();
  const movieDetail = getCategoryData("catalog")[id];
  return (
    <div className="containerDetails">
      {movieDetail.title} {`(${movieDetail.year})`}
      <br />
      <img src={movieDetail.img} alt={movieDetail.title} />
      <br />
      {movieDetail.descrShort}
    </div>
  );
}

export default MovieDetail;
