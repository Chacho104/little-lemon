import React from "react";
import classes from "./MenuHighlightList.module.scss";
import MenuHighlightItem from "./MenuHighlightItem";

type MenuHighlightListProps = {
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

const MenuHighlightList: React.FC<MenuHighlightListProps> = ({ meals }) => {
  return (
    <ul className={classes.highlights}>
      {meals.map((meal) => (
        <MenuHighlightItem
          id={meal._id}
          key={meal._id}
          title={meal.title}
          description={meal.description}
          category={meal.category}
          price={meal.price}
          image={meal.image}
          slug={meal.slug}
        />
      ))}
    </ul>
  );
};
export default MenuHighlightList;
