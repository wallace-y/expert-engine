import axios from "axios";
import { Link } from "react-router-dom";
import { getAllCategories } from "../utils/utils";
import { useEffect, useState } from "react";

function SellItems() {
  const [sellItemCategories, setSellItemCategories] = useState([]);

  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    getAllCategories().then((d) => {
      setSellItemCategories(d);
    });
  }, [sellItemCategories]);

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

  if (formSubmitted) {
    return (
      <section>
        <h2>Item successfully added</h2>
        <p>What would you like to do now?</p>
        <Link to="/">Home</Link>
        <Link to="/items">Buy</Link>
        <Link to="/sellItems">Sell</Link>
      </section>
    );
  }

  return (
    <section>
      <h1>Sell Items TBC</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="item_name">Item Name:</label>
        <input type="text" id="item_name" name="item_name" />
        <br />
        <br />

        <label htmlFor="img_url">Item Image URL:</label>
        <input type="text" id="img_url" name="img_url" />
        <br />
        <br />

        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" />
        <br />
        <br />

        <label htmlFor="description">Description:</label>
        <input type="text" id="description" name="description" />
        <br />
        <br />

        <label htmlFor="sellItem-category-choice">Category:</label>
        <select id="sellItem-categories" name="category_name">
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
        <br />
        <button> Submit</button>
      </form>
    </section>
  );
}

export default SellItems;
