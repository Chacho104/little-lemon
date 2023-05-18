import React from "react";
import MenuItemsList from "../menu-markup/MenuItemsList";

type MainsProps = {
  meals: any[];
};

const Mains: React.FC<MainsProps> = ({ meals }) => {
  const mainItems = meals.filter((meal) => meal.category === "mains");
  return <MenuItemsList items={mainItems} />;
};
export default Mains;
