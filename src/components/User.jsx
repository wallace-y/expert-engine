import { Link } from "react-router-dom";

function User({previousOrders}) {
  console.log(previousOrders)
  if (previousOrders.length === 0) {
    return (
      <div>
      <p>You didn't order anything!</p>
      <Link to="/">Go Home</Link>
      </div>
    )
  }
  return (
    <section>
    <h2>This is what you ordered:</h2>
    {previousOrders.map((order,index) => {
      // <p>the {index+1} order</p>
      return (
        order.map((thing, index) => {
        let formattedPrice = thing.price / 100;

        return (
          <div key={index}>
            <p>{thing.item_name}</p>
            <p>£{formattedPrice}</p>
          </div>
        );
      })
      )
    })}
    <Link to="/">Go Home</Link>
  </section>
  )
}

export default User;