import React, { useContext, useState } from 'react'
import CartContext from "../Store/CartContext";
import Cart from './Cart'

const MedicineForm = () => {
  const CartCtx = useContext(CartContext)

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const nameHandler = (event) => {
    setName(event.target.value);
  }

  const descriptionHandler = (event) => {
    setDescription(event.target.value);
  }

  const priceHandler = (event) => {
    setPrice(event.target.value);
  }

  const quantityHandler = (event) => {
    setQuantity(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const products = {
      productName: name,
      description: description,
      price: price,
      quantity: quantity
    };

    CartCtx.addProduct(products)
  }

  return (
    <>
      <div style={{ textAlign: 'center' }}>MEDICAL SHOP</div>
      <div style={{ textAlign: 'center' }}>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="productName">Product Name:</label>
            <input type="text" id="productName" required onChange={nameHandler} value={name} />
          </div>

          <div>
            <label htmlFor="description">Description:</label>
            <input type='text' id="description" onChange={descriptionHandler} value={description} />
          </div>

          <div>
            <label htmlFor="price">Price:</label>
            <input type='number' id="price" onChange={priceHandler} value={price} />
          </div>

          <div>
            <label htmlFor="quantity">Quantity:</label>
            <input type='number' id="quantity" onChange={quantityHandler} value={quantity} />
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
        <Cart />
      </div>
    </>
  )
}

export default MedicineForm