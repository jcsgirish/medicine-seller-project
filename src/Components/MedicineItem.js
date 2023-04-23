import React, { useContext } from "react";
import CartContext from "../Store/CartContext";
import { Button } from "bootstrap";

const MedicineItem = () => {
  const CartCtx = useContext(CartContext);
  const CartDataHandler = (name, des, price,quantity) => {
    const cartItems = {
      name: name,
      description: des,
      price: price,
      quantity: quantity
    };
    CartCtx.addToCart(cartItems);
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product name</th>
            <th scope="col">Description</th>
            <th scope="col">price</th>
            <th scope="col">quantity</th>
            <th scope="col">Add to Cart</th>
          </tr>
        </thead>
        <tbody>
          {CartCtx.productStore.map((product, index) => {
            return (
              <tr key={product._id}>
                <th scope="row">{index + 1}</th>
                <td>{product.productName}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>
                  <Button>
                    variant="primary"
                    onClick={CartDataHandler.bind(
                      null,
                      product.productName,
                      product.description,
                      product.price,
                      product.quantity
                    )}
                 
                    Add to Cart
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MedicineItem;