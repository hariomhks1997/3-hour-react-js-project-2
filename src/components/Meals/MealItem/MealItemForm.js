import React,{useRef,useState} from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';


const MealItemForm = (props) => {
   const [amountisvalid, setamountisvalid] = useState(false)
  const amountinputref = useRef()
  const submithandler=(event)=>{
    event.preventDefault();
    const enteredamount=amountinputref.current.value;
    const enteredAmountnumber=+enteredamount;
    if(enteredamount.trim().length===0 || enteredAmountnumber<1 || enteredAmountnumber>5){
          setamountisvalid(true)
          return;
    }
    props.onAddToCart(enteredAmountnumber)
  }
  return (
    <form className={classes.form} onSubmit={submithandler}>
        <Input 
        ref={amountinputref}
        label="Amout" 
        input={{
            id:"amount",
            type:'number',
            min:"1",
            max:"5",
            step:"1",
            defaultValue:'1'
        }}></Input>
        <button>+Add</button>
        {amountisvalid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  )
}

export default MealItemForm