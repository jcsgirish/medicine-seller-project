import React, { useContext, useState } from 'react'
import CartContext from "../Store/CartContext";
import Cart from './Cart'
import { Button } from 'bootstrap'

const MedicineForm = () => {
    const CartCtx=useContext(CartContext)

    const[name,setName]=useState('');
    const[description,setDescription]=useState('');
    const[price,setPrice]=useState('');
    const[quantity,setQuantity]=useState('');

    const NameHandler=(event)=>{
    setName(event.target.value);
    }
    const DescriptionHandler=(event)=>{
        setDescription(event.target.value);
    }
    const PriceHandler=(event)=>{
        setPrice(event.target.value);
    }
    const QuantityHandler=(event)=>{
        setQuantity(event.target.value);
    }
    const SubmitHandler=(event)=>{
    event.preventDefault();
    const products={
        productName:name,
        description:description,
        price:price,
        quantity:quantity
    };
    CartCtx.addProduct(products)
    }
  return (
    <>
        <div style={{textAlign:'center'}}>MEDICAL SHOP</div>
        <div style={{textAlign:'center'}}>
            <form onSubmit={SubmitHandler}>
            <div><label type="text" required onChange={NameHandler} value={name}>Product Name</label></div>
            <div><label type='text' onChange={DescriptionHandler} value={description}>Description</label></div>
            <div><label type='number' onChange={PriceHandler} value={price}>Price</label></div>
            <div><label type='number' onChange={QuantityHandler} value={quantity}>Quantity</label></div>
            <div><Button type="submit">Submit</Button></div>
            <Cart/>
            </form>
        </div>
        
    </>
  )
}

export default MedicineForm