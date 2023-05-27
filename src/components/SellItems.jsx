import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { getAllCategories } from "../utils/utils";
import { useEffect, useState } from "react";
import { LoggedInContext } from "../contexts/LoggedIn";
import { useContext } from "react";

function SellItems() {
  const [sellItemCategories, setSellItemCategories] = useState([]);
  const { loggedIn, setLoggedIn } = useContext(LoggedInContext);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    getAllCategories().then((d) => {
      setSellItemCategories(d);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      item_name: event.target.item_name.value,
      img_url: event.target.img_url.value,
      price: event.target.price.value,
      description: event.target.description.value,
      category_name: event.target.category_name.value,
    };

    axios
      .post("https://nc-marketplace-sem-4.onrender.com/api/items", data)
      .then(function (response) {
        setFormSubmitted(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  if (!loggedIn) {
    return <Navigate to="/login" />;
  }

  if (formSubmitted) {
    return (
      <section className="text-center mt-2">
        <h2>Item successfully added</h2>
        <p>What would you like to do now?</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <Link to="/" className="link-dark">
            Home
          </Link>
          <Link to="/items" className="link-dark">
            Buy
          </Link>
          <Link to="/sellItems" className="link-dark">
            Sell
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="text-center">
      <h1>Sell an item</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="item_name">Item Name:</label>
          <input
            type="text"
            id="item_name"
            name="item_name"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="img_url">Item Image URL:</label>
          <input
            type="text"
            id="img_url"
            name="img_url"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            className="form-control"
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="sellItem-category-choice">Category:</label>
          <select
            id="sellItem-categories"
            name="category_name"
            className="form-control"
          >
            <option value="">Select Selling Item Category</option>

            {sellItemCategories.map((category) => {
              return (
                <option
                  key={category.category_name}
                  value={category.category_name}
                >
                  {" "}
                  {category.category_name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="text-center">
          <button className="btn btn-dark"> Submit</button>
        </div>
      </form>
    </section>
  );
}

export default SellItems;
