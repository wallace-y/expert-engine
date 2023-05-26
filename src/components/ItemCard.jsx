import Login from "./Login";
import { LoggedInContext } from "../contexts/LoggedIn";
import { useContext } from "react";
import { Navigate, redirect } from "react-router-dom";
import React from "React";

function ItemCard({ item, setBasketItems }) {
  const { item_name, description, img_url, price, category_name } = item;
  const { loggedIn, setLoggedIn } = useContext(LoggedInContext);

  if(!loggedIn){
    return <Navigate to="/login" />
  }
  const handleClick = () => {
    if(loggedIn){
      setBasketItems((currentList) => {
        let newList = [...currentList];
        newList.push(item);
        return newList;
      });
    } 
  }

  let formattedPrice = `£ ${price / 100}`;
  return (
    <section style={{ border: "1px solid black" }}>
      <h1>{item_name}</h1>
      <p>{description}</p>
      <img
        style={{ width: "100px" }}
        src={img_url}
        alt={`a picture of ${item_name}`}
      ></img>
      <p>{formattedPrice}</p>
      <p>{category_name}</p>
      <button
        onClick={() => {
          return handleClick()
        }}
      >
        Add to basket
      </button>
    </section>
  );
}

export default ItemCard;
