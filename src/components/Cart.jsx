import React from "react";
import { UseCart } from "../context/Cart";

function Cart() {
  const cart = UseCart();

  const total = cart.items.reduce((a, b) => a + b.Itemprice, 0);
  return (
    <div className="cart-items">
      <h1>Cart</h1>
      <hr />
      {cart &&
        cart.items.map((item) => {
          return <li key={item.Itemname.length}>{item.Itemname}</li>;
        })}
      <hr />

      <p>
        Total bill is : <p className="price-box">{total}</p>
      </p>
    </div>
  );
}

export default Cart;
