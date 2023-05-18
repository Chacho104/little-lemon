import React from "react";
import MenuItemsList from "../menu-markup/MenuItemsList";

type BreakfastProps = {
  meals: any[];
};

const Breakfast: React.FC<BreakfastProps> = ({ meals }) => {
  const breakfastItems = meals.filter((meal) => meal.category === "breakfast");
  return <MenuItemsList items={breakfastItems} />;
};
export default Breakfast;
