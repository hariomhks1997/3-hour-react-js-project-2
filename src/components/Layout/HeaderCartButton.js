import React,{useContext} from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css'
import CartContext from '../../Store/Cart-context';

const HeaderCartButton = (props) => {
 const cartctx= useContext(CartContext);
 let quantity=0;
 cartctx.items.forEach(item=>{
  quantity=quantity+Number(item.quantity)
 })
  return (
    <button className={classes.button} onClick={props.shown} >
  <span className={classes.icon}>
    <CartIcon></CartIcon>
  </span>
  <span>Your Cart</span>
  <span className={classes.badge}>
    {quantity}
  </span>
  

    </button>
  )
}

export default HeaderCartButton;