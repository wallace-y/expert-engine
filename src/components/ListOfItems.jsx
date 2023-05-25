import Dropdown from "./Dropdown";
import ItemList from "./ItemList";
import { useState } from "react";

function ListOfItems({ basketItems, setBasketItems }) {
  const [selectedCat, setSelectedCat] = useState("");

  return (
    <section>
      <h1>List of Available Items</h1>
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
