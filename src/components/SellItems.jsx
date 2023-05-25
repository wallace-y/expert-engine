import { Link } from "react-router-dom";
import { getAllCategories } from "../utils/utils";
import { useEffect, useState } from "react";

function SellItems() {
  const [sellItemCategories, setSellItemCategories] = useState([]);

  useEffect(() => {
    getAllCategories().then((d) => {
      setSellItemCategories(d);
    });
  }, [sellItemCategories]);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log(event.target.item_name.value)
    console.log(event.target.img_url.value)
    console.log(event.target.description.value)

  }

  return (
    <section>
      <h1>Sell Items TBC</h1>
      <form onSubmit={handleSubmit}>
      <label for="item_name">Item Name:</label>
      <input type="text" id="item_name" name="item_name"/><br/><br/>

      <label for="img_url">Item Image URL:</label>
      <input type="text" id="img_url" name="img_url"/><br/><br/>

      <label for="price">Price:</label>
      <input type="number" id="price" name="price"/><br/><br/>

      <label for="description">Description:</label>
      <input type="text" id="description" name="description"/><br/><br/>

      <label htmlFor="sellItem-category-choice">Category:</label>
      <select id="sellItem-categories" >
        <option value="">Select Selling Item Category</option>

        {sellItemCategories.map((category) => {
          return (
            <option
              key={category.category_name}
              value={category.category_name}
            > {category.category_name}</option>
          );
        })}
      </select><br/>
      <button> Submit</button>
      </form>
    </section>
  );
}

export default SellItems;
