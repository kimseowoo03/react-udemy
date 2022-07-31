import MealsSummery from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import React from "react";

const Meals = () => {
  return (
    <React.Fragment>
      <MealsSummery />
      <AvailableMeals />
    </React.Fragment>
  )
}

export default Meals;