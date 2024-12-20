import React, { createContext, useState, useContext } from "react";

const ShoppingCartContext = createContext();

// Custom Hook for easier access to the context
export const useShoppingCart = () => useContext(ShoppingCartContext);

export const ShoppingCartProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState([]);

  const addToCart = (product, quantity) => {
    const existingProductIndex = shoppingCart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      // If the product exists, update its quantity
      const updatedCart = [...shoppingCart];
      updatedCart[existingProductIndex].quantity += quantity;
      updatedCart[existingProductIndex].subtotal =
        updatedCart[existingProductIndex].quantity * product.price;
      setShoppingCart(updatedCart);
    } else {
      // If the product doesn't exist, add it to the cart
      setShoppingCart([
        ...shoppingCart,
        {
          ...product,
          quantity,
          subtotal: quantity * product.price,
        },
      ]);
    }
  };

  const clearCart = () => {
    setShoppingCart([]);
  };

  return (
    <ShoppingCartContext.Provider
      value={{ shoppingCart, addToCart, clearCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
