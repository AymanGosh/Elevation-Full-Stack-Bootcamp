import React from "react";
import Entity from "./Entity";
import "./Entities.css";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
const Entities = ({ getCategoryData }) => {
  const { category } = useParams();

  return (
    <div className="entity-list">
      {getCategoryData(category).map((entity, i) => (
        <Link key={i} to={`${entity.name}`}>
          <Entity
            key={i}
            category={category}
            name={entity.name}
            img={entity.img}
            level={entity.level}
          />
        </Link>
      ))}
    </div>
  );
};

export default Entities;
