function ItemCard({ item, setBasketItems }) {
  const { item_name, description, img_url, price, category_name } = item;

  let formattedPrice = `£ ${price / 100}`;
  return (
    <section style={{ border: "1px solid black" }}>
      <h1>{item_name}</h1>
      <p>{description}</p>
      <img
        style={{ width: "100px" }}
        src={img_url}
        alt={`a picture of ${item_name}`}
      ></img>
      <p>{formattedPrice}</p>
      <p>{category_name}</p>
      <button
        onClick={() => {
          setBasketItems((currentList) => {
            let newList = [...currentList];
            newList.push(item);
            return newList;
          });
        }}
      >
        Add to basket
      </button>
    </section>
  );
}

export default ItemCard;
