import { useEffect, useState } from "react";
import { getAllCategories } from "../utils/utils.js";

function Dropdown() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories().then((d) => {
      setCategories(d);
    });
  }, []);

  return (
    <section>
      <h1>List of Categories</h1>
      <label htmlFor="category-choice">Filter by category:</label>
      <input
        list="all-categories"
        id="category-choice"
        name="category-choice"
      ></input>

      <datalist id="all-categories">
        {categories.map((category) => {
          return (
            <option
              key={category.category_name}
              value={category.category_name}
            />
          );
        })}
      </datalist>
    </section>
  );
}

export default Dropdown;
