import React,{useContext} from "react";
import classes from "./Cart.module.css";
import Model from "../UI/Model";
import CartContext from "../../Store/Cart-context";

const Cart = (props) => {
    
    const deletitemhandler=(id)=>{
    

            cartcntx.removeitem(id)
    
        
    }
    
    const cartcntx=useContext(CartContext)
    const cartitems=(
        <ul className={classes['cart-items']}>
            {cartcntx.items.map((item)=>(
                <form style={{display:"flex"}}>
                <li   key={item.id}> Name:{item.name} Price:{item.price} Quantity:{item.quantity} <h1 style={{display:"none"}}>{item.id}</h1> </li>
                <button type="submit" onClick={()=>deletitemhandler(item.id)}>Delete</button>
                </form>
            ))}

        </ul>
    ) 
    let number=0
    let amount=parseFloat(number)

    cartcntx.items.map((item)=>(
     amount=amount+parseFloat(item.price)
    ))

    
    
  return (
  <Model onClick={props.hide}>
{cartitems}
<div className={classes.total}>
    <span>Total Amount</span>
    <span>{parseInt(amount)}</span>
</div>
<div className={classes.actions}>
    <button onClick={props.hide} className={classes['button--alt']}>Close</button>
    <button className={classes.button}>Order</button>
</div>
</Model>
  );
};

export default Cart;
