import React, { useContext } from "react";
import { useState } from "react";
import CartContext from "../Store/CartContext";

const Cart = () => {
  const [show, setShow] = useState(false);
  const CartCtx = useContext(CartContext);

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  let total = 0;
  CartCtx.cartStore.forEach((item) => {
    if (!isNaN(item.price)) {
      total += Number(item.price);
    }
  });

  return (
    <>
      <button onClick={handleShow}> CART</button>
      {show && (
        <>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Product Name</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {CartCtx.cartStore.map((product, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{product.productName}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button onClick={handleClose}>Close</button>
          <p>Total Amount:${total}</p>
        </>
      )}
    </>
  );
};

export default Cart