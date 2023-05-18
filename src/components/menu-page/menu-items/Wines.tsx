import React from "react";
import MenuItemsList from "../menu-markup/MenuItemsList";

type WinesProps = {
  meals: any[];
};

const Wines: React.FC<WinesProps> = ({ meals }) => {
  const wineItems = meals.filter((meal) => meal.category === "wines");
  return <MenuItemsList items={wineItems} />;
};
export default Wines;
