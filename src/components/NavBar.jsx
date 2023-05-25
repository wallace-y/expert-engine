import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/items">List Of Items</Link>
      <Link to="/sellItems">Sell Items</Link>
      <Link to="/basket">
        <i className="fa-solid fa-cart-shopping"></i>
      </Link>
    </nav>
  );
}

export default NavBar;
