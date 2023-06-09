import { Route, Routes } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import WelcomeMessage from "./components/WelcomeMessage";
import ListOfItems from "./components/ListOfItems";
import SellItems from "./components/SellItems";
import Basket from "./components/Basket";
import CheckoutMessage from "./components/CheckoutMessage";
import User from "./components/User";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<WelcomeMessage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/items" element={<ListOfItems />}></Route>
        <Route path="/sellItems" element={<SellItems />}></Route>
        <Route path="/basket" element={<Basket />}></Route>
        <Route path="/ordered" element={<CheckoutMessage />}></Route>
        <Route path="/user" element={<User />}></Route>
      </Routes>
    </div>
  );
}

export default App;
