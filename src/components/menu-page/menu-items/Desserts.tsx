import React from "react";
import MenuItemsList from "../menu-markup/MenuItemsList";

type DessertsProps = {
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

const Desserts: React.FC<DessertsProps> = ({ meals }) => {
  const dessertItems = meals.filter((meal) => meal.category === "desserts");
  return <MenuItemsList items={dessertItems} />;
};
export default Desserts;
