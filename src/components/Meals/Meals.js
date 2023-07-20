import React,{Fragment} from 'react';
import MealSummary from './MealSummary';
import AvaliableMeal from './AvaliableMeal';
const Meals = () => {
  return (
    <Fragment>
        <MealSummary key={Math.random().toString()}></MealSummary>
        <AvaliableMeal key={Math.random().toString()}></AvaliableMeal>

    </Fragment>
  )
}

export default Meals