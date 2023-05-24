import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import WelcomeMessage from "./components/WelcomeMessage";
import ListOfItems from "./components/ListOfItems";
import SellItems from "./components/SellItems";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<WelcomeMessage />}></Route>
        <Route path="/items" element={<ListOfItems />}></Route>
        <Route path="/sellItems" element={<SellItems />}></Route>
      </Routes>
    </>
  );
}

export default App;
