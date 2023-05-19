import React from "react";
import MenuItemsList from "../menu-markup/MenuItemsList";

type BeveragesProps = {
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

const Beverages: React.FC<BeveragesProps> = ({ meals }) => {
  const beverageItems = meals.filter((meal) => meal.category === "beverages");
  return <MenuItemsList items={beverageItems} />;
};
export default Beverages;
