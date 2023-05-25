import { Link } from "react-router-dom";

function CheckoutMessage({ previousOrders }) {
  return (
    <section>
      <h1>Thank you for your order!</h1>
      <p>This is what you ordered:</p>
      {previousOrders[previousOrders.length - 1].map((thing, index) => {
        let formattedPrice = thing.price / 100;

        return (
          <div key={index}>
            <p>{thing.item_name}</p>
            <p>£{formattedPrice}</p>
          </div>
        );
      })}
      <Link to="/">Go Home</Link>
    </section>
  );
}

export default CheckoutMessage;
