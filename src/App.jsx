import "./App.css";
import Item from "./components/Item";
import Cart from "./components/Cart";
import { UseCart } from "./context/Cart";
import { My_Items } from "./assets/My_Items";
function App() {
  const { showcart, setShowcart } = UseCart();
  console.log(My_Items);
  let display = (
    <div className="body-container">
      {My_Items.map((item) => (
        <Item
          itemname={item.itemName}
          itemprice={item.itemPrice}
          itemimage={item.image}
          key={My_Items.length}
        />
      ))}
    </div>
  );

  if (showcart) {
    display = <Cart />;
  }
  return (
    <>
      <header>
        <h1>Shop Mate</h1>
        <button onClick={() => setShowcart(!showcart)}>Cart</button>
      </header>
      <div className="homepage-image">
        <div className="homepage-button"><button>Shop more</button></div>
      </div>
    </>
  );
}

export default App;
