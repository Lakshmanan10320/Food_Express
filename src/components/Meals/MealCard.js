import React from "react";
import classes from "./MealCard.module.css";
import MealItemForm from "./MealItem/MealItemForm";
import { useContext } from 'react';
import CartContext from '../../store/cart-context';


const Product = (props) => {
  const cartCtx = useContext(CartContext);
    const addToCarthandler = amount => {
        cartCtx.addItem({
            id:props.id,
            name:props.name,
            amount: amount,
            price: props.price
        }); 
    };

  return (
    <div className={classes.card}>
      <img className={classes['product--image']} src={props.url} alt="Food image" />
      <h2>{props.name}</h2>
      <p className={classes.price}>${props.price}</p>
      <p className={classes.description}>{props.description}</p>
      <p>
        <MealItemForm id={props.id} onAddToCart={addToCarthandler} amountInput={props.amountInput} />
      </p>
    </div>
  );
}

export default Product;
 