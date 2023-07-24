import React,{Fragment} from 'react';
import MealSummary from './MealSummary';
import AvaliableMeal from './AvaliableMeal';
const Meals = () => {
  return (
    <Fragment>
        <MealSummary></MealSummary>
        <AvaliableMeal></AvaliableMeal>

    </Fragment>
  )
}

export default Meals