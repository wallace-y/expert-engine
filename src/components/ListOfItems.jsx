import Dropdown from "./Dropdown";
import ItemList from "./ItemList";
import { useState } from "react";

function ListOfItems({ basketItems, setBasketItems }) {
  const [selectedCat, setSelectedCat] = useState("");

  return (
    <section className="container text-center bg-light">
      <h1 className="mt-2">Available Items</h1>
      <Dropdown selectedCat={selectedCat} setSelectedCat={setSelectedCat} />
      <ItemList
        basketItems={basketItems}
        setBasketItems={setBasketItems}
        selectedCat={selectedCat}
      />
    </section>
  );
}

export default ListOfItems;
