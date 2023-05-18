import React from "react";
import MenuItemsList from "../menu-markup/MenuItemsList";

type BeveragesProps = {
  meals: any[];
};

const Beverages: React.FC<BeveragesProps> = ({ meals }) => {
  const beverageItems = meals.filter((meal) => meal.category === "beverages");
  return <MenuItemsList items={beverageItems} />;
};
export default Beverages;
