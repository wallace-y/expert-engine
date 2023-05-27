import { LoggedInContext } from "../contexts/LoggedIn";
import { useContext } from "react";
import { Navigate, redirect } from "react-router-dom";
import { CurrentUserContext } from "../contexts/CurrentUser";
import { addItemToBasket } from "../utils/utils";

function ItemCard({ item }) {
  const { item_name, description, img_url, price, category_name } = item;
  const { loggedIn } = useContext(LoggedInContext);
  const { currentUser } = useContext(CurrentUserContext);

  if (!loggedIn) {
    return <Navigate to="/login" />;
  }
  const handleClick = () => {
    if (loggedIn) {
      addItemToBasket(currentUser, item);
    }
  };

  let formattedPrice = `£ ${price / 100}`;
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img
        height=""
          style={{ width: "100%" }}
          src={img_url}
          className="card-img-top"
          alt={`a picture of ${item_name}`}
        />
        <div class="card-body">
          <h5 class="card-title">{item_name}</h5>
          <p class="card-text">{description}</p>
          <p class="card-text">{category_name}</p>
          <p class="card-text">{formattedPrice}</p>
          <button
            className="btn btn-dark"
            onClick={() => {
              return handleClick();
            }}
          >
            Add to basket
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
