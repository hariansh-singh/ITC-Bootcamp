import { useState } from "react";
import { CartContext } from "./cartContext";

const CartItems = ({ children }) => {
  const [cartData, setCartData] = useState(
    localStorage.getItem("myCart") != undefined
      ? JSON.parse(localStorage.getItem("myCart"))
      : []
  );

  const myAddCart = (data) => {
    setCartData(data);
  };

  return (
    <CartContext.Provider value={{ cartData: cartData, myAddCart: myAddCart }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartItems;
