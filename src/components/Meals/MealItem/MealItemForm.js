import React from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';


const MealItemForm = () => {
  return (
    <form className={classes.form}>
        <Input label="Amout" input={{
            id:"amount",
            type:'number',
            min:"1",
            max:"5",
            step:"1",
            defaultValue:'1'
        }}></Input>
        <button>+Add</button>
    </form>
  )
}

export default MealItemForm