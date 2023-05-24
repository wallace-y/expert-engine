import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { getAllItems } from "../utils/utils.js";

function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getAllItems().then((d) => {
      setItems(d);
    });
  }, []);
  console.log(items);

  return (
    <section>
      <h1>List of items:</h1>
      {items.map((item) => {
        return <ItemCard key={item.item_id} item={item} />;
      })}
    </section>
  );
}

export default ItemList;
