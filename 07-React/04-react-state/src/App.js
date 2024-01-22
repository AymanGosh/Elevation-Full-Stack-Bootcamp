import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Hudini from "./components/Hudini";
import Landing from "./components/Landing";
import Home from "./components/Home";
function App() {
  const dummyData = {
    user: "Robyn",
    store: [
      { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
      { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
      {
        item: "Surround Sound Pelican",
        price: 3099,
        discount: 0.05,
        hottest: true,
      },
    ],
    shouldDiscount: false,
    currentPage: "Landing",
  };
  let [shoppingList, setShoppingList] = useState(dummyData);
  return (
    <div>
      {/* <Hudini /> */}
      {shoppingList.currentPage === "Landing" ? (
        <Landing userName={shoppingList.user} shoppingList={shoppingList} />
      ) : (
        <Home store={shoppingList.store} />
      )}
      <button
        onClick={() => {
          let cloneShoppingList = { ...shoppingList };
          cloneShoppingList.currentPage = "Home";
          setShoppingList({ ...cloneShoppingList });
        }}
      >
        Home Page
      </button>
      <button
        onClick={() => {
          let cloneShoppingList = { ...shoppingList };
          cloneShoppingList.currentPage = "Landing";
          setShoppingList({ ...cloneShoppingList });
        }}
      >
        Landing Page
      </button>
    </div>
  );
}

export default App;
