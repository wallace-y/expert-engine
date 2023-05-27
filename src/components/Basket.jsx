import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { LoggedInContext } from "../contexts/LoggedIn";
import { getAllItemsInBasket, removeItemFromBasket } from "../utils/utils";
import { CurrentUserContext } from "../contexts/CurrentUser";

function Basket() {
  const [items, setItems] = useState([]);
  const { loggedIn, setLoggedIn } = useContext(LoggedInContext);
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  if (loggedIn) {
    useEffect(() => {
      getAllItemsInBasket(currentUser.username).then((d) => {
        setItems(d);
      });
    }, [items]);
  }

  if (!loggedIn) {
    return <Navigate to="/login" />;
  }

  let totalCost = items.reduce((a, b) => {
    return a + b.price;
  }, 0);

  let formattedTotalPrice = `£ ${totalCost / 100}`;

  return (
    <section className="text-center">
      <h1>Here's what is in your basket</h1>
      {items.map((thing, index) => {
        let formattedPrice = thing.price / 100;

        return (
          <div className="mb-2" key={index}>
            <h3>{thing.item_name}</h3>
            <p>£{formattedPrice}</p>
            <button
              className="btn btn-dark"
              onClick={() => {
                removeItemFromBasket(currentUser.username, thing.item_id);
              }}
            >
              Remove from basket
            </button>
          </div>
        );
      })}

      <p>Total cost {formattedTotalPrice}</p>

      <Link className="link-dark" to="/items">Keep shopping</Link>
    </section>
  );
}

export default Basket;
