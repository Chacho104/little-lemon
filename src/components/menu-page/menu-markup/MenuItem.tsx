import Link from "next/link";
import React from "react";
import classes from "./MenuItem.module.scss";
import Image from "next/image";

type MenuItemProps = {
  title: string;
  description: string;
  price: number;
  image: string;
  slug: string;
};

const MenuItem: React.FC<MenuItemProps> = ({
  title,
  description,
  price,
  image,
  slug,
}) => {
  const exploreLink = `/menu/${slug}`;
  return (
    <li>
      <Link href={exploreLink} className={classes.item}>
        <div className={classes["item-content"]}>
          <h3>{title}</h3>
          <p>{description}</p>
          <h5>${price}</h5>
        </div>
        <div className={classes["item-image"]}>
          <Image
            src={"/" + image}
            alt={`Delicious ${title}`}
            width={112}
            height={112}
          />
        </div>
      </Link>
    </li>
  );
};
export default MenuItem;
