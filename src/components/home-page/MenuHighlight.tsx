import React from "react";
import classes from "./MenuHighlight.module.scss";
import Link from "next/link";
import Button from "../ui/Button";
import MenuHighlightList from "./MenuHighlightList";

type MenuHighlightProps = {
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

const MenuHighlight: React.FC<MenuHighlightProps> = ({ meals }) => {
  return (
    <section>
      <div className={classes.title}>
        <h1>This Week&apos;s Specials!</h1>
        <p>
          Order our specials for the week or check out our full{" "}
          <Link href="/menu">online menu</Link>
        </p>
        <div className={classes.action}>
          <Button link="/menu">Online Menu</Button>
        </div>
      </div>
      <div className={classes.highlights}>
        <MenuHighlightList meals={meals} />
      </div>
    </section>
  );
};
export default MenuHighlight;
