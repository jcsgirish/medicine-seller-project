import React, { useEffect, useState } from "react";

const CartContext = React.createContext();

export const CartProvider = (props) => {
  const [productStore, setProductStore] = useState([]);
  const [cartStore, setCartStore] = useState([]);

  const apiUrl = "https://crudcrud.com/api/a30a88e4f425412d86124dcfde4f1ab8";

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${apiUrl}/Medicines`);
      const data = await response.json();
      setProductStore(data);
    } catch (error) {
      console.error(error);
    }
  };

  const addProduct = async (product) => {
    try {
      await fetch(`${apiUrl}/Medicines`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      fetchProducts();
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCart = async () => {
    try {
      const response = await fetch(`${apiUrl}/list`);
      const data = await response.json();
      setCartStore(data);
    } catch (error) {
      console.error(error);
    }
  };

  const addToCart = async (cartData) => {
    try {
      await fetch(`${apiUrl}/list`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartData),
      });
      fetchCart();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const contextValue = {
    productStore,
    addProduct,
    cartStore,
    addToCart,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext ;