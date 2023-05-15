import React from "react";
import MenuItem from "./MenuItem";
import classes from "./MenuItemsList.module.scss";

type MenuItemsListProps = {
  items: any[];
};

const MenuItemsList: React.FC<MenuItemsListProps> = ({ items }) => {
  return (
    <ul className={classes.menu}>
      {items.map((item) => (
        <MenuItem
          key={item._id}
          title={item.title}
          description={item.description}
          price={item.price}
          image={item.image}
          slug={item.slug}
        />
      ))}
    </ul>
  );
};
export default MenuItemsList;
