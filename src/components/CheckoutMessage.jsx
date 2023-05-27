import { Link } from "react-router-dom";

function CheckoutMessage() {
  return (
    <section>
      <h1>Thank you for your order!</h1>
      <p>This is what you ordered:</p>

      <Link to="/">Go Home</Link>
    </section>
  );
}

export default CheckoutMessage;
