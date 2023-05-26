import { Link } from "react-router-dom";
import { CurrentUserContext } from "../contexts/CurrentUser";
import { useContext } from "react";
import { LoggedInContext } from "../contexts/LoggedIn";

function User({ previousOrders }) {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const { loggedIn, setLoggedIn } = useContext(LoggedInContext);

  if (loggedIn) {
    if (previousOrders.length === 0) {
      return (
        <div>
          <h1>Hi {currentUser.username}</h1>
          <p>You didn't order anything!</p>
          <Link to="/">Go Home</Link>
        </div>
      );
    }
    return (
      <section>
        <h2>This is what you ordered:</h2>
        {previousOrders.map((order, orderIndex) => {
          return (
            <div style={{ border: "1px solid red" }}>
              <p>Order: {orderIndex + 1}</p>
              {order.map((thing, index) => {
                let formattedPrice = thing.price / 100;

                return (
                  <div key={index}>
                    <p>{thing.item_name}</p>
                    <p>£{formattedPrice}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
        <Link to="/">Go Home</Link>
      </section>
    );
  } else {
    return <h1>Please login first to see previous orders</h1>;
  }
}

export default User;
