import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { getAllItems } from "../utils/utils.js";

function ItemList({ selectedCat, basketItems, setBasketItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getAllItems(selectedCat).then((d) => {
      setItems(d);
    });
  }, [selectedCat]);

  return (
    <section className="mt-2">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {items.map((item) => {
          return (
            <ItemCard
              key={item.item_id}
              item={item}
              setBasketItems={setBasketItems}
            />
          );
        })}
      </div>
    </section>
  );
}

export default ItemList;
