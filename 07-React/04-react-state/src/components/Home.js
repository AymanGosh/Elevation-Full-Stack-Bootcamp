import React from "react";
import Item from "./Item";
const Home = ({ store }) => {
  return (
    <div>
      {store.map((s) => (
        <Item key={s.item + s.price} item={s.item} price={s.price} />
      ))}
    </div>
  );
};

export default Home;
