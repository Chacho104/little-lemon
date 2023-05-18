import React from "react";
import MenuItemsList from "../menu-markup/MenuItemsList";

type LunchProps = {
  meals: any[];
};

const Lunch: React.FC<LunchProps> = ({ meals }) => {
  const lunchItems = meals.filter((meal) => meal.category === "lunch");
  return <MenuItemsList items={lunchItems} />;
};
export default Lunch;
