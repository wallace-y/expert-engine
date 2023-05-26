import { useEffect, useState } from "react";
import { getAllCategories } from "../utils/utils.js";

function Dropdown({ selectedCat, setSelectedCat }) {
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

      <select
        id="all-categories"
        onChange={(event) => {
          setSelectedCat(event.target.value);
        }}
      >
        <option value="" defaultValue>
          Show All
        </option>
        {categories.map((category) => {
          return (
            <option
              key={category.category_name}
              defaultValue={category.category_name}
            >
              {" "}
              {category.category_name}
            </option>
          );
        })}
      </select>
    </section>
  );
}

export default Dropdown;
