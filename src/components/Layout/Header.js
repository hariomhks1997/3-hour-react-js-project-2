import React ,{Fragment}from 'react';
import classes from './Header.module.css';
import mealsimage from '../../assets/download.jpg'
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            
            <HeaderCartButton></HeaderCartButton>
        </header>

        <div className={classes['main-image']}>
        
          
            <img src={mealsimage} alt="A table full of delecious food"></img>
        </div>
    </Fragment>
    
  )
}

export default Header