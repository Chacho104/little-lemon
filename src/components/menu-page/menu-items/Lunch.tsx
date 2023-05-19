import React from "react";
import MenuItemsList from "../menu-markup/MenuItemsList";

type LunchProps = {
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

const Lunch: React.FC<LunchProps> = ({ meals }) => {
  const lunchItems = meals.filter((meal) => meal.category === "lunch");
  return <MenuItemsList items={lunchItems} />;
};
export default Lunch;
