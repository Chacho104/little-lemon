import React from "react";
import MenuItemsList from "../menu-markup/MenuItemsList";

type JuicesProps = {
  meals: any[];
};

const Juices: React.FC<JuicesProps> = ({ meals }) => {
  const juiceItems = meals.filter((meal) => meal.category === "juices");
  return <MenuItemsList items={juiceItems} />;
};
export default Juices;
