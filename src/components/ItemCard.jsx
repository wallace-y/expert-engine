import Login from "./Login";
import { LoggedInContext } from "../contexts/LoggedIn";
import { useContext } from "react";
import { Navigate, redirect } from "react-router-dom";
import { CurrentUserContext } from "../contexts/CurrentUser";
import { addItemToBasket } from "../utils/utils";

function ItemCard({ item, setBasketItems }) {
  const { item_name, description, img_url, price, category_name } = item;
  const { loggedIn, setLoggedIn } = useContext(LoggedInContext);
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  if (!loggedIn) {
    return <Navigate to="/login" />;
    addItemToBasket;
  }
  const handleClick = () => {
    if (loggedIn) {
      addItemToBasket(currentUser, item);
      // setBasketItems((currentList) => {
      //   let newList = [...currentList];
      //   newList.push(item);
      //   return newList;
      // });
    }
  };

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
          return handleClick();
        }}
      >
        Add to basket
      </button>
    </section>
  );
}

export default ItemCard;
