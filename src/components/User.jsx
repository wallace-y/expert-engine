import { Link, Navigate } from "react-router-dom";
import { CurrentUserContext } from "../contexts/CurrentUser";
import { useContext, useEffect, useState } from "react";
import { LoggedInContext } from "../contexts/LoggedIn";
import { getAllOrdersByUser } from "../utils/utils";

function User() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const { loggedIn, setLoggedIn } = useContext(LoggedInContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    getAllOrdersByUser(currentUser.username).then((d) => {
      setItems(d);
    });
  }, [items]);

  if (!loggedIn) {
    return <Navigate to="/login" />;
  }

  if (loggedIn) {
    if (items.length === 0) {
      return (
        <div className="text-center">
          <h1>Hi {currentUser.username}</h1>
          <p>You haven't ordered anything yet.</p>
          <Link to="/" className="link-dark">
            Go Home
          </Link>
        </div>
      );
    }
    return (
      <section className="text-center">
        <h1>Here are your previous orders:</h1>
        {items.map((thing, index) => {
          let formattedPrice = thing.price / 100;

          return (
            <div key={index}>
              <h3>{thing.item_name}</h3>
              <p>£{formattedPrice}</p>
            </div>
          );
        })}

        <Link to="/" className="link-dark">
          Go Home
        </Link>
      </section>
    );
  }
}

export default User;
