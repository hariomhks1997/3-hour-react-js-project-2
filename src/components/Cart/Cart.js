import React from "react";
import classes from "./Cart.module.css";
import Model from "../UI/Model";

const Cart = (props) => {
    const cartitems=(
        <ul className={classes['cart-items']}>
            {[{id: "c1", name: "sushi", amount: "2", price: "12.99"}].map((item)=>(
                <li>{item.name} </li>
            ))}

        </ul>
    )
    
  return (
  <Model onClick={props.hide}>
{cartitems}
<div className={classes.total}>
    <span>Total Amount</span>
    <span>35.62</span>
</div>
<div className={classes.actions}>
    <button onClick={props.hide} className={classes['button--alt']}>Close</button>
    <button className={classes.button}>Order</button>
</div>
</Model>
  );
};

export default Cart;
