import React from "react";
import MenuItemsList from "../menu-markup/MenuItemsList";

type JuicesProps = {
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

const Juices: React.FC<JuicesProps> = ({ meals }) => {
  const juiceItems = meals.filter((meal) => meal.category === "juices");
  return <MenuItemsList items={juiceItems} />;
};
export default Juices;
