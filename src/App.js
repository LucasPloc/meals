import { useState } from "react";
import CartProvider from "./store/CartProvider";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

const App = () => {
  const [showCart, setShowCart] = useState(false);

  const openCartHandler = () => {
    setShowCart(true);
  };
  const closeCartHandler = () => {
    setShowCart(false);
  };

  return (
    <CartProvider>
      {showCart && <Cart closeCart={closeCartHandler} />}
      <Header openCart={openCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
