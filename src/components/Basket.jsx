import { useState } from "react";
import { Link } from "react-router-dom";

function Basket({ basketItems, setBasketItems, setPreviousOrders }) {
  const [items, setItems] = useState([]);

  let totalCost = basketItems.reduce((a, b) => {
    return a + b.price;
  }, 0);

  let formattedTotalPrice = `£ ${totalCost / 100}`;

  return (
    <section>
      <h1>Here's what is in your basket</h1>
      {basketItems.map((thing, index) => {
        let formattedPrice = thing.price / 100;

        return (
          <div key={index}>
            <p>{thing.item_name}</p>
            <p>£{formattedPrice}</p>
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
      <p>Total cost {formattedTotalPrice}</p>
      <Link to="/ordered">
        <button
          onClick={() => {
            setPreviousOrders((currentList) => {
              let newList = [...currentList];
              newList.push(basketItems);
              setBasketItems([]);
              return newList;
            });
          }}
        >
          Buy now
        </button>
      </Link>
      <button>Keep shopping</button>
    </section>
  );
}

export default Basket;
