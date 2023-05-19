import React from "react";
import MenuItemsList from "../menu-markup/MenuItemsList";

type BreakfastProps = {
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

const Breakfast: React.FC<BreakfastProps> = ({ meals }) => {
  const breakfastItems = meals.filter((meal) => meal.category === "breakfast");
  return <MenuItemsList items={breakfastItems} />;
};
export default Breakfast;
