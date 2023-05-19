import React from "react";
import MenuItemsList from "../menu-markup/MenuItemsList";

type WinesProps = {
  meals: {
    _id: string;
    category: string;
    title: string;
    price: number;
    isFeatured: boolean;
    description: string;
    slug: string;
    image: string;
  }[];
};

const Wines: React.FC<WinesProps> = ({ meals }) => {
  const wineItems = meals.filter((meal) => meal.category === "wines");
  return <MenuItemsList items={wineItems} />;
};
export default Wines;
