import { Link } from "react-router-dom";
import ToggleUser from "./ToggleUser";

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid d-flex">
        <div className="d-flex">
          <span className="navbar-brand mb-0 h1">The Marketplace</span>

          <ToggleUser />
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/items" className="nav-link">
                List Of Items
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sellItems" className="nav-link">
                Sell Items
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/user" className="nav-link">
                Account Info
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/basket" className="link-light">
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
