import React,{useContext} from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import CartContext from '../../../Store/Cart-context';


const MealItemForm = (props) => {
  const cartcntx = useContext(CartContext)
  const addItemToCart=(event)=>{
    event.preventDefault();
     //cartcntx.items.push(props.item)
     const quantity=document.getElementById("amount_" +props.id).value
     cartcntx.additem({...props.item,quantity:quantity,id:Math.random().toString()})
    
     
  }
  
  
  return (
    <form  className={classes.form}>
      { console.log(cartcntx)}
        <Input key={Math.random().toString()} label="Amout" input={{
            id:"amount_" +props.id,
            type:'number',
            min:"1",
            max:"5",
            step:"1",
            defaultValue:'1'
        }}></Input>
        <button  onClick={addItemToCart}>+Add</button>
    </form>
  )
}

export default MealItemForm