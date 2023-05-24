function ItemCard({ item }) {
  const { item_name, description, img_url, price, category_name } = item;

  let formattedPrice = `£ ${price / 100}`;
  return (
    <section>
      <h1>{item_name}</h1>
      <p>{description}</p>
      <img src={img_url} alt={`a picture of ${item_name}`}></img>
      <p>{formattedPrice}</p>
      <p>{category_name}</p>
    </section>
  );
}

export default ItemCard;
