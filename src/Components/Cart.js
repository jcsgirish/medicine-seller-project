import React, { useContext } from "react";
import { useState } from "react";
import CartContext from "../Store/CartContext";
import { Button } from "bootstrap";
const Cart = () => {
  const [show, setShow] = useState(false);
  const CartCtx = useContext(CartContext);

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
let total=0;
CartCtx.cartStore.forEach((item)=>{
    total+=Number(item.price);
})

  return <>
    <Button onClick={handleShow}>CART</Button>
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
    {CartCtx.cartStore.map((product,index)=>{
        return(
            <tr key={index}>
            <th scope="row">{index+1}</th>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            </tr>
        )
    })}
</tbody>
    </table>
    <Button onClick={handleClose}>close</Button>
    <p>Total Amount:${total}</p>
  </>;
};

export default Cart;