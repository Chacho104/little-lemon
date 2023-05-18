import React from "react";
import MenuItemsList from "../menu-markup/MenuItemsList";

type DessertsProps = {
  meals: any[];
};

const Desserts: React.FC<DessertsProps> = ({ meals }) => {
  const dessertItems = meals.filter((meal) => meal.category === "desserts");
  return <MenuItemsList items={dessertItems} />;
};
export default Desserts;
