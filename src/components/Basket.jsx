import { useState } from "react";

function Basket({ basketItems, setBasketItems }) {
  const [items, setItems] = useState([]);

  return (
    <section>
      <h1>Here's what is in your basket</h1>
      {basketItems.map((thing, index) => {
        return (
          <div key={index}>
            <p>{thing.item_name}</p>
            <p>{thing.price}</p>
            <button
              onClick={() => {
                setBasketItems((currentList) => {
                  let newList = [...currentList];
                  newList.splice(index, 1);
                  return newList;
                });
              }}
            >
              Remove from basket
            </button>
          </div>
        );
      })}
      <p>Total cost £XXX</p>
      <button>Buy now</button>
      <button>Keep shopping</button>
    </section>
  );
}

export default Basket;
