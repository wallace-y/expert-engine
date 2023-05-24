import { Link } from "react-router-dom";

function WelcomeMessage() {
  return (
    <section>
      <h1>What would you like to do today?</h1>
      <Link to="/items">Buy</Link>
      <Link to="/sellItems">Sell</Link>
    </section>
  );
}

export default WelcomeMessage;
