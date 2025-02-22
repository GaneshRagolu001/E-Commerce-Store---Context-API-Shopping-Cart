import { UseCart } from "../context/Cart";

function Item({ itemname, itemprice, itemimage }) {
  const { items, setitems } = UseCart();
  console.log(items);
  return (
    <div className="items-container">
        <div className="image-div">
          <img src={itemimage} alt="image" />
        </div>
        <div className="item-name-div">
          <h2>{itemname}</h2>
          <h3>Price : ${itemprice}</h3>
        </div>
        <button
          onClick={() =>
            setitems([
              ...items,
              {
                Itemname: itemname,
                Itemprice: itemprice,
                image: itemimage,
              },
            ])
          }
        >
          Add to Cart
        </button>
    </div>
  );
}

export default Item;
