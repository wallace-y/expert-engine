import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { getAllItems } from "../utils/utils.js";

function ItemList({selectedCat}) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getAllItems(selectedCat).then((d) => {
      setItems(d);
    });
  }, [selectedCat]);

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
