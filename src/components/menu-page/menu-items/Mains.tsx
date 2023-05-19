import React from "react";
import MenuItemsList from "../menu-markup/MenuItemsList";

type MainsProps = {
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

const Mains: React.FC<MainsProps> = ({ meals }) => {
  const mainItems = meals.filter((meal) => meal.category === "mains");
  return <MenuItemsList items={mainItems} />;
};
export default Mains;
