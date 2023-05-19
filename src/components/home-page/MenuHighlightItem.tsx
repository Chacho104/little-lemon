import React from "react";
import Card from "../ui/Card";
import classes from "./MenuHighlightItem.module.scss";
import Link from "next/link";
import { MdOutlineDeliveryDining } from "react-icons/md";
import Image from "next/image";

type MenuHighlightItemProps = {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  image: string;
  slug: string;
};

const MenuHighlightItem: React.FC<MenuHighlightItemProps> = (props) => {
  return (
    <Card>
      <li>
        <div className={classes["meal-image"]}>
          <Image
            src={"/" + props.image}
            alt={`Delicious ${props.title}`}
            width={304}
            height={240}
          />
        </div>
        <div className={classes.header}>
          <h3>{props.title}</h3>
          <p>${props.price.toFixed(2)}</p>
        </div>
        <div className={classes.description}>
          <p>{props.description}</p>
        </div>
        <div className={classes.action}>
          <Link href={`/menu/${props.slug}`}>Order for Delivery</Link>
          <MdOutlineDeliveryDining />
        </div>
      </li>
    </Card>
  );
};
export default MenuHighlightItem;
