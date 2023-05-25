import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import WelcomeMessage from "./components/WelcomeMessage";
import ListOfItems from "./components/ListOfItems";
import SellItems from "./components/SellItems";
import Basket from "./components/Basket";

function App() {
  const [basketItems, setBasketItems] = useState([]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<WelcomeMessage />}></Route>
        <Route
          path="/items"
          element={
            <ListOfItems
              basketItems={basketItems}
              setBasketItems={setBasketItems}
            />
          }
        ></Route>
        <Route path="/sellItems" element={<SellItems />}></Route>
        <Route
          path="/basket"
          element={
            <Basket basketItems={basketItems} setBasketItems={setBasketItems} />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
