import { createContext, useState, useContext } from "react";

export const MyContext = createContext(null);

export const UseCart = () => {
  const cart = useContext(MyContext);
  return cart;
};

export const CartProvider = ({ children }) => {
  const [items, setitems] = useState([]);
  const [showcart, setShowcart] = useState(false);

  return (
    <MyContext.Provider value={{ items, setitems,showcart,setShowcart }}>
      {children}
    </MyContext.Provider>
  );
};
